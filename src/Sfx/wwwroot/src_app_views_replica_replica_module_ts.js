"use strict";(self.webpackChunkSfxWeb=self.webpackChunkSfxWeb||[]).push([["src_app_views_replica_replica_module_ts"],{1901:(I,f,n)=>{n.d(f,{c:()=>g});var s=n(9808),u=n(4466),r=n(322),v=n(6461),_=n(5e3);let g=(()=>{class t{}return t.\u0275fac=function(d){return new(d||t)},t.\u0275mod=_.oAB({type:t}),t.\u0275inj=_.cJS({imports:[[s.ez,u.m,r.HK,v.Q,r.Oz]]}),t})()},8952:(I,f,n)=>{n.d(f,{f:()=>t});var s=n(5e3),u=n(4333),r=n(322),v=n(8833);function _(p,d){if(1&p&&s._UZ(0,"app-detail-list",6),2&p){const i=s.oxw();s.Q6J("list",i.unhealthyEvaluations)("listSettings",i.unhealthyEvaluationsListSettings)}}function g(p,d){if(1&p&&s._UZ(0,"app-detail-list",6),2&p){const i=s.oxw();s.Q6J("list",i.healthyEvaluations)("listSettings",i.healthEventsListSettings)}}let t=(()=>{class p{constructor(i){this.settings=i}ngOnInit(){this.unhealthyEvaluationsListSettings=this.settings.getNewOrExistingUnhealthyEvaluationsListSettings(),this.healthEventsListSettings=this.settings.getNewOrExistingHealthEventsListSettings()}}return p.\u0275fac=function(i){return new(i||p)(s.Y36(u.g))},p.\u0275cmp=s.Xpm({type:p,selectors:[["app-health-viewer"]],inputs:{unhealthyEvaluations:"unhealthyEvaluations",healthyEvaluations:"healthyEvaluations"},decls:11,vars:1,consts:[["ngbNav","",1,"nav-wrapper"],["nav","ngbNav"],["ngbNavItem",""],["ngbNavLink",""],["ngbNavContent",""],[3,"ngbNavOutlet"],[3,"list","listSettings"]],template:function(i,E){if(1&i&&(s.TgZ(0,"div",0,1)(2,"div",2)(3,"a",3),s._uU(4,"Unhealthy"),s.qZA(),s.YNc(5,_,1,2,"ng-template",4),s.qZA(),s.TgZ(6,"div",2)(7,"a",3),s._uU(8,"All"),s.qZA(),s.YNc(9,g,1,2,"ng-template",4),s.qZA()(),s._UZ(10,"div",5)),2&i){const y=s.MAs(1);s.xp6(10),s.Q6J("ngbNavOutlet",y)}},directives:[r.Pz,r.nv,r.Vx,r.uN,v.m,r.tO],styles:[""]}),p})()},8285:(I,f,n)=>{n.d(f,{P:()=>y});var s=n(5e3),u=n(5664),r=n(9808),v=n(322);function _(c,C){if(1&c&&s._UZ(0,"button",5),2&c){const m=s.oxw();s.Gre("mif-2x status-icon ",m.collapsed?"mif-arrow-drop-down":"mif-arrow-drop-up",""),s.uIk("aria-label",m.displayText)("aria-expanded",!m.collapsed)}}function g(c,C){1&c&&(s.TgZ(0,"div"),s.Hsn(1,1),s.qZA())}function t(c,C){1&c&&(s.TgZ(0,"div"),s.Hsn(1,2),s.qZA())}const p=[[["","collapse-header",""]],[["","collapse-body",""]],[["","closed-body",""]]],d=function(c){return{"base-header":c}},i=function(c){return{"margin-left":c}},E=["[collapse-header]","[collapse-body]","[closed-body]"];let y=(()=>{class c{constructor(m){this.liveAnnouncer=m,this.collapsed=!1,this.disabled=!1,this.hideTooltip=!1,this.sectionName="this",this.tooltipSouth=!1,this.collapsedChange=new s.vpe,this.displayText=""}ngOnChanges(){this.setText()}ngOnInit(){this.setText()}changeCollapseState(){this.disabled||(this.liveAnnouncer.announce(this.sectionName+" Section has been "+this.collapsed?"Opened":"Closed"),this.collapsed=!this.collapsed,this.collapsedChange.emit(this.collapsed)),this.setText()}setText(){this.displayText=(this.collapsed?"Open ":"Close ")+this.sectionName+" Section"}}return c.\u0275fac=function(m){return new(m||c)(s.Y36(u.Kd))},c.\u0275cmp=s.Xpm({type:c,selectors:[["app-collapse-container"]],inputs:{collapsed:"collapsed",disabled:"disabled",hideTooltip:"hideTooltip",sectionName:"sectionName",tooltipSouth:"tooltipSouth"},outputs:{collapsedChange:"collapsedChange"},features:[s.TTD],ngContentSelectors:E,decls:7,vars:13,consts:[[2,"position","relative"],["tooltipClass","styled-tooltip",1,"flex-center",3,"ngClass","ngbTooltip","placement","disableTooltip","click"],["tabindex","0",3,"class",4,"ngIf"],[1,"header-wrapper",3,"ngStyle"],[4,"ngIf"],["tabindex","0"]],template:function(m,h){1&m&&(s.F$t(p),s.TgZ(0,"div",0)(1,"div",1),s.NdJ("click",function(){return h.changeCollapseState()}),s.YNc(2,_,1,5,"button",2),s.TgZ(3,"div",3),s.Hsn(4),s.qZA()(),s.YNc(5,g,2,0,"div",4),s.YNc(6,t,2,0,"div",4),s.qZA()),2&m&&(s.xp6(1),s.Q6J("ngClass",s.VKq(9,d,!h.disabled))("ngbTooltip",h.displayText)("placement",h.tooltipSouth?"bottom":"top")("disableTooltip",h.disabled||h.hideTooltip),s.uIk("aria-expanded",!h.collapsed),s.xp6(1),s.Q6J("ngIf",!h.disabled),s.xp6(1),s.Q6J("ngStyle",s.VKq(11,i,h.disabled?"25px":"")),s.xp6(2),s.Q6J("ngIf",!h.collapsed),s.xp6(1),s.Q6J("ngIf",h.collapsed))},directives:[r.mk,v._L,r.O5,r.PC],styles:[".base-header[_ngcontent-%COMP%]{border-radius:var(--primary-border-radius);cursor:pointer}.base-header[_ngcontent-%COMP%]:hover, .base-header[_ngcontent-%COMP%]:focus-within{filter:brightness(100%);background-color:#ffffff1a}.header-wrapper[_ngcontent-%COMP%]{width:calc(100% - 25px);display:inline-block}.status-icon[_ngcontent-%COMP%]{width:25px}button[_ngcontent-%COMP%]{padding:0;background-color:transparent;border:0px;color:#fff}"]}),c})()},2425:(I,f,n)=>{n.r(f),n.d(f,{ReplicaModule:()=>G});var s=n(9808),u=n(8555),r=n(4850),v=n(4286),_=n(2165),g=n(5053),t=n(5e3),p=n(3240);let d=(()=>{class a extends _.J{constructor(e,l){super(l),this.data=e}common(e){return this.isSystem=this.appTypeName===g.gT.SystemAppTypeName,this.data.getReplicaOnPartition(this.appId,this.serviceId,this.partitionId,this.replicaId,!0,e).pipe((0,r.U)(l=>(this.replica=l,this.replica.health.refresh(e))))}getParams(e){this.appTypeName=v.a.getAppTypeName(e),this.appId=v.a.getAppId(e),this.serviceId=v.a.getServiceId(e),this.partitionId=v.a.getPartitionId(e),this.replicaId=v.a.getReplicaId(e)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.D),t.Y36(t.zs3))},a.\u0275dir=t.lG2({type:a,features:[t.qOj]}),a})();var i=n(5237),E=n(2261),y=n(8118);let c=(()=>{class a extends d{constructor(e,l,T){super(e,l),this.dataService=e,this.tree=T,this.tabs=[{name:"essentials",route:"./"},{name:"details",route:"./details"}]}setup(){this.dataService.clusterManifest.ensureInitialized().subscribe(()=>{this.data.clusterManifest.isEventStoreEnabled&&-1===this.tabs.indexOf(g.gT.EventsTab)&&(this.tabs=this.tabs.concat(g.gT.EventsTab))}),this.isSystem=this.appTypeName===g.gT.SystemAppTypeName,this.tree.selectTreeNode(this.isSystem?[i.R.cluster(),i.R.systemAppGroup(),i.R.service(this.serviceId),i.R.partition(this.partitionId),i.R.replica(this.replicaId)]:[i.R.cluster(),i.R.appGroup(),i.R.appType(this.appTypeName),i.R.app(this.appId),i.R.service(this.serviceId),i.R.partition(this.partitionId),i.R.replica(this.replicaId)])}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.D),t.Y36(t.zs3),t.Y36(E.r))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-base"]],features:[t.qOj],decls:4,vars:4,consts:[[3,"tabs","type","name","actions"],[1,"main-view"],[1,"flex-child"]],template:function(e,l){1&e&&(t._UZ(0,"app-navbar",0),t.TgZ(1,"div",1)(2,"div",2),t._UZ(3,"router-outlet"),t.qZA()()),2&e&&t.Q6J("tabs",l.tabs)("type",null!=l.replica&&l.replica.isStatelessService?"Instance":"Replica")("name",l.replicaId)("actions",null==l.replica?null:l.replica.actions)},directives:[y.S,u.lC],styles:[""]}),a})();var C=n(567),m=n(1763),h=n(4333),x=n(4034),S=n(7895),N=n(4080),O=n(8952);function D(a,o){if(1&a&&t._UZ(0,"app-status-resolver",9),2&a){const e=t.oxw(3);t.Q6J("status",e.replica.raw.ReplicaStatus)}}function Z(a,o){if(1&a&&(t.TgZ(0,"a",10),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.Q6J("routerLink",e.replica.nodeViewPath),t.xp6(1),t.Oqu(e.replica.raw.NodeName)}}function R(a,o){if(1&a&&(t.TgZ(0,"a",10),t._uU(1,"View on Node"),t.qZA()),2&a){const e=t.oxw(3);t.Q6J("routerLink",e.nodeView)}}function A(a,o){if(1&a&&(t.TgZ(0,"app-essential-health-tile",5),t.YNc(1,D,1,1,"ng-template",6),t.YNc(2,Z,2,2,"ng-template",7),t.YNc(3,R,2,1,"ng-template",8),t.qZA()),2&a){const e=t.oxw(2);t.Q6J("healthState",null==e.replica?null:e.replica.healthState)("listItems",e.essentialItems)}}function M(a,o){if(1&a&&(t.TgZ(0,"div",11),t._UZ(1,"app-replica-address",12),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("address",e.replica.address)}}function P(a,o){if(1&a&&(t.TgZ(0,"div",13)(1,"h4"),t._uU(2,"Health Evaluations"),t.qZA(),t._UZ(3,"app-health-viewer",14),t.qZA()),2&a){const e=t.oxw(2);t.xp6(3),t.Q6J("healthyEvaluations",e.replica.health.healthEvents)("unhealthyEvaluations",e.replica.health.unhealthyEvaluations)}}function U(a,o){if(1&a&&(t.TgZ(0,"div")(1,"div",1),t.YNc(2,A,4,2,"app-essential-health-tile",2),t.qZA(),t.YNc(3,M,2,1,"div",3),t.YNc(4,P,4,2,"div",4),t.qZA()),2&a){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.replica&&e.replica.isInitialized),t.xp6(1),t.Q6J("ngIf",e.replica.address),t.xp6(1),t.Q6J("ngIf",e.replica.health.isInitialized)}}let b=(()=>{class a extends d{constructor(e,l,T){super(e,l),this.data=e,this.settings=T,this.essentialItems=[]}setup(){this.essentialItems=[]}refresh(e){return(0,C.D)([this.replica.health.refresh(e),this.replica.detail.refresh(e).pipe((0,r.U)(()=>{if(!this.isSystem){const T=this.replica.detail.raw[this.replica.isStatefulService?"DeployedServiceReplica":"DeployedServiceReplicaInstance"];this.nodeView=m._.getDeployedReplicaViewPath(this.replica.raw.NodeName,this.appId,T.ServiceManifestName,T.ServicePackageActivationId||null,this.partitionId,this.replicaId)}}))]).pipe((0,r.U)(()=>{this.essentialItems=[{descriptionName:"Node Name",copyTextValue:this.replica.raw.NodeName,selectorName:"nodeName",displaySelector:!0},{descriptionName:"Process Id",displayText:this.replica.detail.processID,copyTextValue:this.replica.detail.processID},{descriptionName:"Status",displayText:this.replica.raw.ReplicaStatus,copyTextValue:this.replica.raw.ReplicaStatus,selectorName:"status",displaySelector:!0}],this.isSystem||this.essentialItems.push({selectorName:"viewNode",displaySelector:!0})}))}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.D),t.Y36(t.zs3),t.Y36(h.g))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-essentials"]],features:[t.qOj],decls:1,vars:1,consts:[[4,"ngIf"],[1,"tile-container"],["class","long",3,"healthState","listItems",4,"ngIf"],["class","detail-pane essen-pane","data-cy","address",4,"ngIf"],["class","detail-pane essen-pane",4,"ngIf"],[1,"long",3,"healthState","listItems"],["appEssentialTemplate","","id","status"],["appEssentialTemplate","","id","nodeName"],["appEssentialTemplate","","id","viewNode"],[3,"status"],[3,"routerLink"],["data-cy","address",1,"detail-pane","essen-pane"],[3,"address"],[1,"detail-pane","essen-pane"],[3,"healthyEvaluations","unhealthyEvaluations"]],template:function(e,l){1&e&&t.YNc(0,U,5,3,"div",0),2&e&&t.Q6J("ngIf",l.replica)},directives:[s.O5,x.Q,x.W,S.u,u.yS,N.z,O.f],styles:[""]}),a})();var J=n(8285),w=n(1271);function Y(a,o){if(1&a&&(t.TgZ(0,"div")(1,"div",1)(2,"app-collapse-container",2)(3,"div",3)(4,"h4"),t._uU(5,"General"),t.qZA()(),t.TgZ(6,"div",4),t._UZ(7,"app-detail-view-part",5),t.qZA()()(),t.TgZ(8,"div",1)(9,"app-collapse-container",6)(10,"div",3)(11,"h4"),t._uU(12," Details "),t.qZA()(),t.TgZ(13,"div",4),t._UZ(14,"app-detail-view-part",7),t.qZA()()()()),2&a){const e=t.oxw();t.xp6(7),t.Q6J("data",e.replica),t.xp6(7),t.Q6J("data",e.replica.detail.raw)("parent",e.replica.detail)}}let B=(()=>{class a extends d{constructor(e,l){super(e,l),this.data=e}refresh(e){return this.replica.detail.refresh(e)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.D),t.Y36(t.zs3))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-details"]],features:[t.qOj],decls:1,vars:1,consts:[[4,"ngIf"],[1,"detail-pane","essen-pane"],["sectionName","General"],["collapse-header",""],["collapse-body",""],[3,"data"],["sectionName","Details"],[3,"data","parent"]],template:function(e,l){1&e&&t.YNc(0,Y,15,3,"div",0),2&e&&t.Q6J("ngIf",l.replica)},directives:[s.O5,J.P,w.d],styles:[""]}),a})();var Q=n(5893);const L=[{path:"",component:c,children:[{path:"",component:b},{path:"details",component:B},{path:"events",component:(()=>{class a extends d{constructor(e,l){super(e,l),this.data=e}setup(){this.listEventStoreData=[this.data.getReplicaEventData(this.partitionId,this.replicaId)]}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.D),t.Y36(t.zs3))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-events"]],features:[t.qOj],decls:2,vars:1,consts:[[3,"listEventStoreData"]],template:function(e,l){1&e&&(t.TgZ(0,"div"),t._UZ(1,"app-event-store",0),t.qZA()),2&e&&(t.xp6(1),t.Q6J("listEventStoreData",l.listEventStoreData))},directives:[Q.h],styles:[""]}),a})()}]}];let K=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[u.Bz.forChild(L)],u.Bz]}),a})();var V=n(4466),W=n(6461),z=n(3308),H=n(322),F=n(7883),j=n(1901);let G=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[s.ez,K,V.m,W.Q,z.e,H.HK,F.m,j.c]]}),a})()}}]);