import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventStoreComponent } from './event-store/event-store.component';
import { DetailListTemplatesModule } from '../detail-list-templates/detail-list-templates.module';
import { FullDescriptionComponent } from './full-description/full-description.component';
import { RowDisplayComponent } from './row-display/row-display.component';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConcurrentEventsVisualizationModule } from '../concurrent-events-visualization/concurrent-events-visualization.module';
import { TimelineComponent } from './timeline/timeline.component';
import { TimePickerModule } from '../time-picker/time-picker.module';
import { VisualizationDirective } from './visualization.directive';
import { RcaVisualizationComponent } from './rca-visualization/rca-visualization.component';
import { EventChipComponent } from './event-chip/event-chip.component';
import { ChipModalComponent } from './chip-modal/chip-modal.component';

@NgModule({
  declarations: [EventStoreComponent, FullDescriptionComponent, RowDisplayComponent, TimelineComponent, VisualizationDirective, RcaVisualizationComponent, EventChipComponent, ChipModalComponent],
  imports: [
    CommonModule,
    DetailListTemplatesModule,
    FormsModule,
    NgbDropdownModule,
    SharedModule,
    NgbModule,
    NgbTooltipModule,
    ConcurrentEventsVisualizationModule,
    TimePickerModule
  ],
  exports: [EventStoreComponent, FullDescriptionComponent, RowDisplayComponent, TimelineComponent],
})
export class EventStoreModule { }
