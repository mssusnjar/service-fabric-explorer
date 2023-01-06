import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { IRCAItem, getSimultaneousEventsForEvent, IConcurrentEvents } from 'src/app/Models/eventstore/rcaEngine';
import { RelatedEventsConfigs } from 'src/app/Models/eventstore/RelatedEventsConfigs';
import { ListColumnSettingWithCustomComponent, ListColumnSettingWithEmbeddedVisTool } from 'src/app/Models/ListSettings';
import { VisualizationLogoComponent } from '../../concurrent-events-visualization/visualization-logo/visualization-logo.component';
import { VisualizationToolComponent } from '../../concurrent-events-visualization/visualization-tool/visualization-tool.component';
import { IEventStoreData } from '../event-store/event-store.component';
import { EventColumnUpdate, VisualizationComponent, VisUpdateData } from '../visualizationComponents';

@Component({
  selector: 'app-rca-visualization',
  templateUrl: './rca-visualization.component.html',
  styleUrls: ['./rca-visualization.component.scss']
})
export class RcaVisualizationComponent implements VisualizationComponent {

  @Input() listEventStoreData: IEventStoreData<any, any>[];
  @Output() updateColumn = new EventEmitter<EventColumnUpdate>();

  public simulEvents: IConcurrentEvents[] = [];

  constructor(public changeDetector: ChangeDetectorRef) { }

  private getConcurrentEventsData() {
    let allEvents: IRCAItem[] = [];
    let sourceEvents = [];
    for (const data of this.listEventStoreData) {
      if (data.eventsList.lastRefreshWasSuccessful) {
        sourceEvents = sourceEvents.concat(data.getEvents());
        allEvents = allEvents.concat(data.eventsList.collection);
      }
    }

    // refresh vis-event-list
    this.simulEvents = getSimultaneousEventsForEvent(RelatedEventsConfigs, sourceEvents, sourceEvents);
    // grab highcharts data for all events
    for (let parsedEvent of allEvents) {
        let rootEvent = this.simulEvents.find(event => event.eventInstanceId === parsedEvent.eventInstanceId);
        let visPresent = false;
        if (rootEvent.reason) {
            visPresent = true;
        }

        (parsedEvent as any).visPresent = visPresent;

    }

    for (const data of this.listEventStoreData) {
      
      const visTool = new ListColumnSettingWithEmbeddedVisTool(
        VisualizationToolComponent,
        '',
        '',
        this.simulEvents,
        'visTool',
        {
          enableFilter: false,
          colspan: 3
        }
      );

      //add presentation column if not already there
      if (!data.listSettings.columnSettings.some(setting => setting.propertyPath == "visPresent")) {
        let newLogoSetting = new ListColumnSettingWithCustomComponent(
          VisualizationLogoComponent,
          'visPresent',
          'Visualization',
          {
            enableFilter: true,
            colspan: 1
          });
        newLogoSetting.fixedWidthPx = 100;
        
        this.updateColumn.emit({ columnSetting: newLogoSetting, listName: data.displayName, isExisting: false, isSecondRow: false, index: 1});
        this.updateColumn.emit({ columnSetting: visTool, listName: data.displayName, isExisting: false, isSecondRow: true} );
      }
      else {
        this.updateColumn.emit({ columnSetting: visTool, listName: data.displayName, isExisting: true, isSecondRow: true} );

      }
    }
  }

  public update(data: VisUpdateData) {
    this.listEventStoreData = data.listEventStoreData;

    this.getConcurrentEventsData();
    this.changeDetector.markForCheck();
  }

}