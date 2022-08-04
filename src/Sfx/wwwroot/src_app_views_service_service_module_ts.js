"use strict";(self.webpackChunkSfxWeb=self.webpackChunkSfxWeb||[]).push([["src_app_views_service_service_module_ts"],{261:(Qt,w,a)=>{a.r(w),a.d(w,{ServiceModule:()=>Et});var p=a(9808),T=a(8555),m=a(567),g=a(1709),x=a(4286),Q=a(2165),t=a(5e3),u=a(3240);let h=(()=>{class i extends Q.J{constructor(e,s){super(s),this.data=e}common(e){return this.data.getService(this.appId,this.serviceId,!0,e).pipe((0,g.zg)(s=>(this.service=s,(0,m.D)([this.service.health.refresh(e),this.service.description.refresh(e)]))))}getParams(e){this.appId=x.a.getAppId(e),this.serviceId=x.a.getServiceId(e),this.appTypeName=x.a.getAppTypeName(e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(u.D),t.Y36(t.zs3))},i.\u0275dir=t.lG2({type:i,features:[t.qOj]}),i})();var d=a(5237),l=a(5053),v=a(4850),j=a(2261),Y=a(8118);let L=(()=>{class i extends h{constructor(e,s,o){super(e,s),this.dataService=e,this.tree=o,this.tabs=[{name:"essentials",route:"./"},{name:"details",route:"./details"}]}setup(){this.dataService.clusterManifest.ensureInitialized().subscribe(()=>{this.data.clusterManifest.isEventStoreEnabled&&-1===this.tabs.indexOf(l.gT.EventsTab)&&(this.tabs=this.tabs.concat(l.gT.EventsTab))}),this.appTypeName===l.gT.SystemAppTypeName?this.tree.selectTreeNode([d.R.cluster(),d.R.systemAppGroup(),d.R.service(this.serviceId)],!0):(this.tabs.some(e=>"manifest"===e.name)||this.tabs.splice(2,0,{name:"manifest",route:"./manifest"}),this.tree.selectTreeNode([d.R.cluster(),d.R.appGroup(),d.R.appType(this.appTypeName),d.R.app(this.appId),d.R.service(this.serviceId)],!0))}refresh(e){return this.data.clusterManifest.ensureInitialized().pipe((0,v.U)(()=>{var s,o;this.tabs=this.tabs.filter(c=>"backup"!==c.name&&"infrastructure jobs"!==c.name),this.data.clusterManifest.isBackupRestoreEnabled&&this.service.isStatefulService&&this.appTypeName!==l.gT.SystemAppTypeName&&this.tabs.push({name:"backup",route:"./backup"}),(null===(o=null===(s=this.service.description)||void 0===s?void 0:s.raw)||void 0===o?void 0:o.ServiceTypeName)===l.gT.InfrastructureServiceType&&this.tabs.push({name:"infrastructure jobs",route:"./infrastructurejobs"})}))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(u.D),t.Y36(t.zs3),t.Y36(j.r))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-base"]],features:[t.qOj],decls:4,vars:3,consts:[["type","Service",3,"tabs","name","actions"],[1,"main-view"],[1,"flex-child"]],template:function(e,s){1&e&&(t._UZ(0,"app-navbar",0),t.TgZ(1,"div",1)(2,"div",2),t._UZ(3,"router-outlet"),t.qZA()()),2&e&&t.Q6J("tabs",s.tabs)("name",null==s.service?null:s.service.name)("actions",null==s.service?null:s.service.actions)},directives:[Y.S,T.lC],styles:[""]}),i})();var r=a(6174),I=a(2944),J=a(2970),b=a(4333),y=a(4034),O=a(7895),F=a(8855),z=a(8523),V=a(8628),N=a(8285),X=a(8952),S=a(8833);function G(i,n){if(1&i&&t._UZ(0,"app-status-resolver",13),2&i){const e=t.oxw(2);t.Q6J("status",e.service.raw.ServiceStatus)}}function K(i,n){if(1&i&&(t.TgZ(0,"app-essential-health-tile",11),t.YNc(1,G,1,1,"ng-template",12),t.qZA()),2&i){const e=t.oxw();t.Q6J("healthState",null==e.service?null:e.service.healthState)("listItems",e.essentialItems)}}function $(i,n){if(1&i&&(t.TgZ(0,"app-tile-wrapper",14),t._UZ(1,"app-state-info",15),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("stateful",e.service.isStatefulService)("data",e.service.description.raw)}}function W(i,n){if(1&i&&t._UZ(0,"app-dashboard-tile",16),2&i){const e=t.oxw();t.Q6J("data",e.partitionsDashboard)}}function q(i,n){if(1&i&&t._UZ(0,"app-dashboard-tile",16),2&i){const e=t.oxw();t.Q6J("data",e.replicasDashboard)}}function H(i,n){if(1&i&&t._UZ(0,"app-health-viewer",17),2&i){const e=t.oxw();t.Q6J("healthyEvaluations",e.service.health.healthEvents)("unhealthyEvaluations",e.service.health.unhealthyEvaluations)}}function _(i,n){if(1&i&&t._UZ(0,"app-detail-list",18),2&i){const e=t.oxw();t.Q6J("list",e.service.partitions.collection)("listSettings",e.listSettings)}}let tt=(()=>{class i extends h{constructor(e,s,o){super(e,s),this.data=e,this.settings=o,this.essentialItems=[]}setup(){this.listSettings=this.settings.getNewOrExistingListSettings("partitions",["id"],[new r.a7("id","Id",e=>e.viewPath),new r.v0("partitionInformation.raw.ServicePartitionKind","Partition Kind"),new r.Gp("healthState","Health State"),new r.v0("raw.PartitionStatus","Status")]),this.essentialItems=[]}refresh(e){return this.essentialItems=[{descriptionName:"Service Type Version",displayText:this.service.raw.ManifestVersion,copyTextValue:this.service.raw.ManifestVersion},{descriptionName:"Service Type",displayText:this.service.raw.TypeName,copyTextValue:this.service.raw.TypeName},{descriptionName:"Status",displayText:this.service.raw.ServiceStatus,copyTextValue:this.service.raw.ServiceStatus,selectorName:"status",displaySelector:!0}],this.service.description.refresh(e).subscribe(),(0,m.D)([this.service.health.refresh(e).pipe((0,v.U)(s=>{const o=I.wk.getHealthStateCount(s.raw,I.NP.Partition);this.partitionsDashboard=J.D.fromHealthStateCount("Partitions","Partition",!1,o);const c=I.wk.getHealthStateCount(s.raw,I.NP.Replica);this.replicasDashboard=J.D.fromHealthStateCount("Replicas","Replica",!1,c)})),this.service.partitions.refresh(e)])}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(u.D),t.Y36(t.zs3),t.Y36(b.g))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-essentials"]],features:[t.qOj],decls:19,vars:7,consts:[[1,"tile-container"],["class","long",3,"healthState","listItems",4,"ngIf"],["data-cy","state-data",4,"ngIf"],[3,"data",4,"ngIf"],[1,"detail-pane","essen-pane"],["sectionName","Unhealthy Evaluations",3,"tooltipSouth"],["collapse-header",""],["collapse-body",""],[3,"healthyEvaluations","unhealthyEvaluations",4,"ngIf"],["sectionName","Partitions"],["data-cy","partitions",3,"list","listSettings",4,"ngIf"],[1,"long",3,"healthState","listItems"],["appEssentialTemplate","","id","status"],[3,"status"],["data-cy","state-data"],[3,"stateful","data"],[3,"data"],[3,"healthyEvaluations","unhealthyEvaluations"],["data-cy","partitions",3,"list","listSettings"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t.YNc(1,K,2,2,"app-essential-health-tile",1),t.YNc(2,$,2,2,"app-tile-wrapper",2),t.YNc(3,W,1,1,"app-dashboard-tile",3),t.YNc(4,q,1,1,"app-dashboard-tile",3),t.qZA(),t.TgZ(5,"div",4)(6,"app-collapse-container",5)(7,"div",6)(8,"h4"),t._uU(9,"Health Evaluations"),t.qZA()(),t.TgZ(10,"div",7),t.YNc(11,H,1,2,"app-health-viewer",8),t.qZA()()(),t.TgZ(12,"div",4)(13,"app-collapse-container",9)(14,"div",6)(15,"h4"),t._uU(16,"Partitions"),t.qZA()(),t.TgZ(17,"div",7),t.YNc(18,_,1,2,"app-detail-list",10),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",s.service&&s.service.isInitialized),t.xp6(1),t.Q6J("ngIf",null==s.service?null:s.service.description.raw),t.xp6(1),t.Q6J("ngIf",s.partitionsDashboard),t.xp6(1),t.Q6J("ngIf",s.replicasDashboard),t.xp6(2),t.Q6J("tooltipSouth",!0),t.xp6(5),t.Q6J("ngIf",s.service&&s.service.health),t.xp6(7),t.Q6J("ngIf",s.service&&s.service.partitions.isInitialized))},directives:[p.O5,y.Q,y.W,O.u,F.B,z.H,V.L,N.P,X.f,S.m],styles:[""]}),i})();var Z=a(1271);function et(i,n){if(1&i&&(t.TgZ(0,"div")(1,"div",3)(2,"h4"),t._uU(3," Service Description "),t.qZA(),t._UZ(4,"app-detail-view-part",4),t.qZA()()),2&i){const e=t.oxw();t.xp6(4),t.Q6J("data",e.service.description.raw)("parent",e.service.description)}}let it=(()=>{class i extends h{constructor(e,s){super(e,s),this.data=e}refresh(e){return this.data.clusterManifest.isBackupRestoreEnabled&&this.service.isStatefulService&&this.appTypeName!==l.gT.SystemAppTypeName&&(this.service.serviceBackupConfigurationInfoCollection.refresh(e),this.data.refreshBackupPolicies(e)),(0,m.D)([this.service.description.refresh(e),this.service.partitions.refresh(e)])}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(u.D),t.Y36(t.zs3))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-details"]],features:[t.qOj],decls:3,vars:2,consts:[[1,"detail-pane","essen-pane"],[3,"data"],[4,"ngIf"],["data-cy","serviceDescription",1,"detail-pane","essen-pane"],[3,"data","parent"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-detail-view-part",1),t.qZA(),t.YNc(2,et,5,2,"div",2)),2&e&&(t.xp6(1),t.Q6J("data",s.service),t.xp6(1),t.Q6J("ngIf",s.service))},directives:[Z.d,p.O5],styles:[""]}),i})();var st=a(5893);let nt=(()=>{class i extends h{constructor(e,s){super(e,s),this.data=e}setup(){this.listEventStoreData=[this.data.getServiceEventData(this.serviceId)]}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(u.D),t.Y36(t.zs3))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-events"]],features:[t.qOj],decls:2,vars:1,consts:[[3,"listEventStoreData"]],template:function(e,s){1&e&&(t.TgZ(0,"div"),t._UZ(1,"app-event-store",0),t.qZA()),2&e&&(t.xp6(1),t.Q6J("listEventStoreData",s.listEventStoreData))},directives:[st.h],styles:[""]}),i})();var at=a(3347);function ot(i,n){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-manifest-viewer",1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("manifestName",e.service.name)("manifest",e.serviceManifest)}}let rt=(()=>{class i extends h{constructor(e,s){super(e,s),this.data=e}setup(){}refresh(e){const s=this.service.parent;return this.data.getServiceType(s.raw.TypeName,s.raw.TypeVersion,this.service.description.raw.ServiceTypeName,!0,e).pipe((0,g.zg)(o=>o.manifest.refresh(e).pipe((0,v.U)(()=>{this.serviceManifest=o.manifest.raw.Manifest}))))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(u.D),t.Y36(t.zs3))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-manifest"]],features:[t.qOj],decls:1,vars:1,consts:[[4,"ngIf"],[3,"manifestName","manifest"]],template:function(e,s){1&e&&t.YNc(0,ot,2,2,"div",0),2&e&&t.Q6J("ngIf",s.serviceManifest)},directives:[p.O5,at.p],styles:[""]}),i})();var ct=a(7506),C=a(1136),lt=a(8592),pt=a(7654),A=a(9079),ut=a(2999);function dt(i,n){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-action-collection-drop-down",3),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("actionCollection",e.actions)}}function ht(i,n){if(1&i&&(t.TgZ(0,"div",4)(1,"h4"),t._uU(2,"Service Backup Configuration"),t.qZA(),t._UZ(3,"app-detail-list",5),t.qZA()),2&i){const e=t.oxw();t.xp6(3),t.Q6J("list",e.service.serviceBackupConfigurationInfoCollection)("listSettings",e.serviceBackupConfigurationInfoListSettings)}}let vt=(()=>{class i extends h{constructor(e,s,o,c){super(e,s),this.data=e,this.settings=o,this.telemetry=c}setup(){this.serviceBackupConfigurationInfoListSettings=this.settings.getNewOrExistingListSettings("serviceBackupConfigurationInfoListSettings",["raw.PolicyName"],[new r.NL("raw.PolicyName","Policy Name",{enableFilter:!1,getDisplayHtml:(e,s)=>`<span class="link">${s}</span>`,clickEvent:e=>e.action.run()}),new r.NL("raw.Kind","Kind"),new r.NL("raw.PolicyInheritedFrom","Policy Inherited From"),new r.NL("raw.PartitionId","Partition Id"),new r.NL("raw.SuspensionInfo.IsSuspended","Is Suspended"),new r.NL("raw.SuspensionInfo.SuspensionInheritedFrom","Suspension Inherited From")])}refresh(e){return this.data.actionsEnabled()&&this.setupActions(),this.service.serviceBackupConfigurationInfoCollection.refresh(e),this.data.refreshBackupPolicies(e)}setupActions(){this.actions||(this.actions=new ct.w(this.telemetry),this.actions.add(new C.VJ(this.data.dialog,"enableServiceBackup","Enable/Update Service Backup","Enabling Service Backup",{enable:e=>this.data.restClient.enableServiceBackup(this.service,e).pipe((0,g.zg)(()=>this.service.serviceBackupConfigurationInfoCollection.refresh())),data:this},lt.y,()=>!0)),this.actions.add(new C.VJ(this.data.dialog,"disableApplicationBackup","Disable Service Backup","Disabling Service Backup",{enable:e=>this.data.restClient.disableServiceBackup(this.service,e).pipe((0,g.zg)(()=>this.service.serviceBackupConfigurationInfoCollection.refresh())),data:this},pt.U,()=>this.service.serviceBackupConfigurationInfoCollection.collection.length&&this.service.serviceBackupConfigurationInfoCollection.collection[0].raw&&"Service"===this.service.serviceBackupConfigurationInfoCollection.collection[0].raw.Kind&&"Service"===this.service.serviceBackupConfigurationInfoCollection.collection[0].raw.PolicyInheritedFrom)),this.actions.add(new C.et(this.data.dialog,"suspendServiceBackup","Suspend Service Backup","Suspending...",()=>this.data.restClient.suspendServiceBackup(this.service.id).pipe((0,v.U)(()=>this.service.serviceBackupConfigurationInfoCollection.refresh())),()=>this.service.serviceBackupConfigurationInfoCollection.collection.length&&this.service.serviceBackupConfigurationInfoCollection.collection[0].raw&&"Service"===this.service.serviceBackupConfigurationInfoCollection.collection[0].raw.Kind&&"Service"===this.service.serviceBackupConfigurationInfoCollection.collection[0].raw.PolicyInheritedFrom&&!1===this.service.serviceBackupConfigurationInfoCollection.collection[0].raw.SuspensionInfo.IsSuspended,"Confirm Service Backup Suspension",`Suspend Service backup for ${this.service.name} ?`,this.service.name)),this.actions.add(new C.et(this.data.dialog,"resumeServiceBackup","Resume Service Backup","Resuming...",()=>this.data.restClient.resumeApplicationBackup(this.service.id).pipe((0,v.U)(()=>this.service.serviceBackupConfigurationInfoCollection.refresh())),()=>this.service.serviceBackupConfigurationInfoCollection.collection.length&&this.service.serviceBackupConfigurationInfoCollection.collection[0].raw&&"Service"===this.service.serviceBackupConfigurationInfoCollection.collection[0].raw.Kind&&"Service"===this.service.serviceBackupConfigurationInfoCollection.collection[0].raw.PolicyInheritedFrom&&!0===this.service.serviceBackupConfigurationInfoCollection.collection[0].raw.SuspensionInfo.IsSuspended,"Confirm Service Backup Resumption",`Resume Service backup for ${this.service.name} ?`,this.service.name)))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(u.D),t.Y36(t.zs3),t.Y36(b.g),t.Y36(A.y))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-backup"]],features:[t.qOj],decls:3,vars:2,consts:[[1,"detail-pane","essen-pane"],[4,"ngIf"],["class","detail-pane",4,"ngIf"],["displayText","Backup Actions",2,"float","right",3,"actionCollection"],[1,"detail-pane"],[3,"list","listSettings"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t.YNc(1,dt,2,1,"div",1),t.YNc(2,ht,4,2,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",s.actions),t.xp6(1),t.Q6J("ngIf",s.service))},directives:[p.O5,ut.b,S.m],styles:[""]}),i})();var B=a(1836),R=a(3466),M=a(1086);class U extends R.F{constructor(n,e,s=new Date){super(n,e),this.dataService=n,this.raw=e,this.dateRef=s,this.updateInternal()}get id(){return this.raw.Id}updateInternal(){this.RepairTask=0!==this.raw.RepairTasks.length?new B.GF(this.raw.RepairTasks[0].TaskId,this.raw.RepairTasks[0].State):new B.GF("None","None");const n=this.data.repairCollection.collection.find(e=>e.id===this.RepairTask.TaskId);return this.VmImpact=[],this.NodeImpact=[],null!=n&&null!==n.raw.Impact&&n.raw.Impact.NodeImpactList.forEach(e=>this.NodeImpact.push(e.NodeName+":"+e.ImpactLevel)),("Approved"===this.RepairTask.State||"Executing"===this.RepairTask.State||"Completed"===this.RepairTask.State)&&(this.raw.AcknowledgementStatus="Acknowledged"),this.raw.CurrentlyImpactedRoleInstances.forEach(e=>this.VmImpact.push(e.Name+":"+e.ImpactTypes.toString())),(0,M.of)(null)}}class ft extends R.F{constructor(n,e,s=new Date){super(n,e),this.dataService=n,this.raw=e,this.dateRef=s,this.updateInternal()}get id(){return this.raw.Id}updateInternal(){return this.ImpactAction=this.raw.ImpactAction,(0,M.of)(null)}}var mt=a(8608),gt=a(2957),It=a(8139),bt=a(7191),f=a(322),St=a(3847),Ct=a(9342);function Tt(i,n){1&i&&t._UZ(0,"app-essential-item",20),2&i&&t.Q6J("item",n.$implicit)("underline",!1)}function xt(i,n){if(1&i&&(t.TgZ(0,"div",11)(1,"div")(2,"div",12),t._uU(3," Phase "),t.qZA(),t._UZ(4,"app-phase-diagram",13),t.qZA(),t.TgZ(5,"div",14)(6,"div",12),t._uU(7," Overview "),t.qZA(),t.YNc(8,Tt,1,2,"app-essential-item",15),t.qZA(),t.TgZ(9,"div")(10,"div")(11,"div",12)(12,"div"),t._uU(13,"Currently Impacted Nodes"),t.qZA()(),t.TgZ(14,"div"),t._UZ(15,"app-detail-list",16),t.qZA()()(),t.TgZ(16,"div",17)(17,"div",18),t._uU(18," Pending Repair Task "),t.qZA(),t._UZ(19,"app-detail-list",19),t.qZA()()),2&i){const e=t.oxw();t.xp6(4),t.Q6J("items",e.progress)("currentIndex",e.index)("vertical",!0),t.xp6(4),t.Q6J("ngForOf",e.essentialItems),t.xp6(7),t.Q6J("list",e.job.raw.CurrentlyImpactedRoleInstances)("listSettings",e.impactingNodes)("showTopOptions",!1),t.xp6(4),t.Q6J("list",e.repairTask)("listSettings",e.repairJobs)("showTopOptions",!1)}}function wt(i,n){if(1&i&&(t.TgZ(0,"div",21),t._UZ(1,"app-detail-view-part",22),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("data",e.job)}}let Jt=(()=>{class i{constructor(e,s){this.settings=e,this.dataService=s,this.essentialItems=[],this.progress=[],this.index=-1}ngOnInit(){this.impactingNodes=this.settings.getNewOrExistingListSettings("impactingNodes",[],[new r.NL("Name","Name"),new r.NL("UD","UD"),new r.II("ImpactTypes","Impact Types",3)]),this.repairJobs=this.settings.getNewOrExistingPendingRepairTaskListSettings()}ngOnChanges(){this.essentialItems=[{descriptionName:"Current UD",copyTextValue:this.job.raw.CurrentUD,displayText:this.job.raw.CurrentUD},{descriptionName:"Ack Status",copyTextValue:this.job.raw.AcknowledgementStatus,displayText:this.job.raw.AcknowledgementStatus},{descriptionName:"Impact Action",copyTextValue:this.job.VmImpact.join(","),displayText:this.job.VmImpact.join(",")}],this.index={Preparing:1,Executing:2,Completed:3}[this.job.raw.JobStatus],this.progress=[{name:"Preparing"},{name:"Executing"},{name:"Completed"}],this.dataService.getRepairJobById(this.job.RepairTask.TaskId).subscribe(s=>{this.repairTask=[s]})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(b.g),t.Y36(u.D))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-infrastructure-job-tile"]],inputs:{job:"job"},features:[t.TTD],decls:20,vars:8,consts:[[1,"essen-pane"],[2,"display","flex","justify-content","space-between"],["data-cy","job-id",1,"underline","title"],[3,"text"],["data-cy","job-status",1,"underline","title"],["ngbNav","",1,"nav-wrapper"],["nav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink","",2,"font-size","12pt"],["ngbNavContent",""],[3,"ngbNavOutlet"],[2,"display","flex","gap","10px","flex-wrap","wrap"],[1,"underline","title"],[3,"items","currentIndex","vertical"],["data-cy","overview",2,"max-width","300px"],[3,"item","underline",4,"ngFor","ngForOf"],[3,"list","listSettings","showTopOptions"],[2,"flex","1","min-width","600px"],["collapse-header","",1,"underline","title"],["collapse-body","",3,"list","listSettings","showTopOptions"],[3,"item","underline"],[2,"width","80%"],[3,"data"]],template:function(e,s){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3),t._UZ(4,"app-clip-board",3),t.qZA(),t.TgZ(5,"div",4),t._uU(6),t._UZ(7,"app-clip-board",3),t.qZA()(),t.TgZ(8,"div")(9,"div",5,6)(11,"div",7)(12,"a",8),t._uU(13," Condensed "),t.qZA(),t.YNc(14,xt,20,10,"ng-template",9),t.qZA(),t.TgZ(15,"div",7)(16,"a",8),t._uU(17," Full Description "),t.qZA(),t.YNc(18,wt,2,1,"ng-template",9),t.qZA()(),t._UZ(19,"div",10),t.qZA()()),2&e){const o=t.MAs(10);t.uIk("data-cy",s.job.id),t.xp6(3),t.hij(" Job : ",s.job.id," "),t.xp6(1),t.Q6J("text",s.job.id),t.xp6(2),t.hij(" Job Status : ",s.job.raw.JobStatus," "),t.xp6(1),t.Q6J("text",s.job.raw.JobStatus),t.xp6(4),t.Q6J("ngbNavItem",1),t.xp6(4),t.Q6J("ngbNavItem",2),t.xp6(4),t.Q6J("ngbNavOutlet",o)}},directives:[bt._,f.Pz,f.nv,f.Vx,f.uN,St.A,p.sg,Ct._,S.m,Z.d,f.tO],styles:[".title[_ngcontent-%COMP%]{text-align:center;font-size:16px;font-weight:400;font-weight:initial;padding-bottom:5px}"]}),i})();function yt(i,n){if(1&i&&t._UZ(0,"app-dashboard-text-tile",16),2&i){const e=t.oxw();t.Q6J("barClass",e.executingMRJobs.length>0?"badge-upgrade-active":"badge-upgrade-inactive")("count",e.executingMRJobs.length)}}function Nt(i,n){if(1&i&&t._UZ(0,"app-dashboard-text-tile",17),2&i){const e=t.oxw();t.Q6J("barClass",e.allPendingMRJobs.length>0?"badge-upgrade-active":"badge-upgrade-inactive")("count",e.allPendingMRJobs.length)}}function Zt(i,n){if(1&i&&(t.TgZ(0,"div",18),t._UZ(1,"app-warning",19),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("descriptionList",e.infrastructureJobsSuggestion)}}function At(i,n){1&i&&t._UZ(0,"app-infrastructure-job-tile",20),2&i&&t.Q6J("job",n.$implicit)}const Bt=[{path:"",component:L,children:[{path:"",component:tt},{path:"details",component:it},{path:"manifest",component:rt},{path:"events",component:nt},{path:"backup",component:vt},{path:"infrastructurejobs",component:(()=>{class i extends h{constructor(e,s,o,c){super(e,s),this.data=e,this.settings=o,this.telemetry=c,this.allPendingMRJobs=[],this.executingMRJobs=[],this.completedMRJobs=[],this.infrastructureJobsSuggestion=[]}setup(){this.allPendingMRJobsList=this.settings.getNewOrExistingListSettings("allMRJobs",["raw.CurrentUD"],[new r.NL("raw.Id","Job Id"),new r.v0("raw.CurrentUD","Current UD"),new r.NL("raw.AcknowledgementStatus","Acknowledgement Status"),new r.NL("raw.ImpactAction","Impact Action"),new r.NL("RepairTask.TaskId","Repair Task"),new r.II("raw.RoleInstancesToBeImpacted","Target Nodes",2),new r.NL("raw.IsThrottled","Throttled")]),this.data.versionCheck("9.1").then(e=>{e&&!this.allPendingMRJobsList.columnSettings.some(s=>"Throttled"===s.displayName)&&this.allPendingMRJobsList.columnSettings.push(new r.NL("raw.IsThrottled","Throttled"))}),this.completedMRJobsList=this.settings.getNewOrExistingListSettings("completedMRJobs",[],[new r.NL("raw.Id","Job Id"),new r.NL("raw.ImpactAction","Impact Action"),new r.NL("raw.RoleInstancesToBeImpacted","Impacted Nodes")]),this.infrastructureJobsSuggestion=[]}getInfrastructureData(e){const s=new Date;this.executingMRJobs=e.filter(o=>"Executing"===o.JobStatus&&Boolean(o.IsActive)).map(o=>new U(this.data,o,s)),this.allPendingMRJobs=e.filter(o=>"Completed"!==o.JobStatus&&!Boolean(o.IsActive)).map(o=>new U(this.data,o,s)),this.completedMRJobs=e.filter(o=>"Completed"===o.JobStatus).map(o=>new ft(this.data,o,s)),this.infrastructureJobsSuggestion=[],this.executingMRJobs.some(o=>{const c=this.data.repairCollection.collection.find(Pt=>Pt.id===o.RepairTask.TaskId);return!!(c&&c.raw.State===mt.IG.ExecutingStatus&&c.getPhase("Executing").durationMilliseconds>=l.gT.MaxExecutingInfraJobDuration)})&&this.infrastructureJobsSuggestion.push(l.gT.longExecutingInfraJobsSuggestion),this.executingMRJobs.some(o=>"Preparing"===o.RepairTask.State)&&this.infrastructureJobsSuggestion.push(l.gT.executingInfraJobsSuggestion),0!==this.allPendingMRJobs.length&&this.executingMRJobs.length>1&&this.infrastructureJobsSuggestion.push(l.gT.pendingInfraJobsSuggestion)}refresh(e){return(0,m.D)([this.data.repairCollection.refresh(e),this.data.restClient.getInfrastructureJobs(this.serviceId,e).pipe((0,v.U)(s=>this.getInfrastructureData(s)))])}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(u.D),t.Y36(t.zs3),t.Y36(b.g),t.Y36(A.y))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-infrastructurejobs"]],features:[t.qOj],decls:23,vars:8,consts:[[1,"tile-container"],["title","Active Infrastructure Jobs","style","display: block",3,"barClass","count",4,"ngIf"],["title","Pending Infrastrucutre Jobs ","style","display: block",3,"barClass","count",4,"ngIf"],["href","https://docs.microsoft.com/azure/service-fabric/infrastructure-service-faq#faqs","target","_blank",1,"essen-pane","info-box"],[1,"mif-info","link"],["class","essen-pane","style","margin-bottom: 10px;",4,"ngIf"],[1,"detail-pane"],["sectionName","Active Infrastructure Jobs"],["collapse-header",""],["collapse-body","",2,"margin-bottom","20px"],["style","margin-bottom: 15px;",3,"job",4,"ngFor","ngForOf"],[1,"detail-pane","essen-pane"],["sectionName","Pending Infrastructure Jobs"],["collapse-body","",3,"list","listSettings"],["collapsed","true","sectionName","Completed Infrastructure Jobs"],["collapse-header","","data-cy","completed"],["title","Active Infrastructure Jobs",2,"display","block",3,"barClass","count"],["title","Pending Infrastrucutre Jobs ",2,"display","block",3,"barClass","count"],[1,"essen-pane",2,"margin-bottom","10px"],[3,"descriptionList"],[2,"margin-bottom","15px",3,"job"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t.YNc(1,yt,1,2,"app-dashboard-text-tile",1),t.YNc(2,Nt,1,2,"app-dashboard-text-tile",2),t.qZA(),t.TgZ(3,"a",3),t._UZ(4,"span",4),t._uU(5," Click here to learn more about Infrastructure jobs.\n"),t.qZA(),t.YNc(6,Zt,2,1,"div",5),t.TgZ(7,"div",6)(8,"app-collapse-container",7)(9,"h4",8),t._uU(10," Active Infrastructure Jobs "),t.qZA(),t.TgZ(11,"div",9),t.YNc(12,At,1,1,"app-infrastructure-job-tile",10),t.qZA()()(),t.TgZ(13,"div",11)(14,"app-collapse-container",12)(15,"h4",8),t._uU(16," Pending Infrastructure Jobs "),t.qZA(),t._UZ(17,"app-detail-list",13),t.qZA()(),t.TgZ(18,"div",11)(19,"app-collapse-container",14)(20,"h4",15),t._uU(21," Recently Completed Infrastructure Jobs "),t.qZA(),t._UZ(22,"app-detail-list",13),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngIf",s.executingMRJobs.length>=0),t.xp6(1),t.Q6J("ngIf",s.allPendingMRJobs.length>=0),t.xp6(4),t.Q6J("ngIf",s.infrastructureJobsSuggestion.length>0),t.xp6(6),t.Q6J("ngForOf",s.executingMRJobs),t.xp6(5),t.Q6J("list",s.allPendingMRJobs)("listSettings",s.allPendingMRJobsList),t.xp6(5),t.Q6J("list",s.completedMRJobs)("listSettings",s.completedMRJobsList))},directives:[p.O5,gt.u,It.a,N.P,p.sg,Jt,S.m],styles:[".info-box[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-bottom:15px}.info-box[_ngcontent-%COMP%]   .mif-info[_ngcontent-%COMP%]{font-size:20px;margin-right:10px}"]}),i})()}]}];let Rt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[T.Bz.forChild(Bt)],T.Bz]}),i})();var k=a(4466),D=a(6461),Mt=a(3308),E=a(3075),Ut=a(7883),kt=a(1901),P=a(7412);let Dt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[p.ez,k.m,D.Q,P.ClusterModule,f.Oz]]}),i})(),Et=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[p.ez,Rt,k.m,D.Q,Mt.e,E.u5,E.UX,Ut.m,kt.c,Dt,P.ClusterModule]]}),i})()}}]);