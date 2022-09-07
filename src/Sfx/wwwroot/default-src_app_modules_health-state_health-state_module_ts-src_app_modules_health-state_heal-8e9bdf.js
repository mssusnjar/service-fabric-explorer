"use strict";(self.webpackChunkSfxWeb=self.webpackChunkSfxWeb||[]).push([["default-src_app_modules_health-state_health-state_module_ts-src_app_modules_health-state_heal-8e9bdf"],{1901:(y,h,a)=>{a.d(h,{c:()=>c});var t=a(9808),p=a(4466),e=a(322),m=a(6461),d=a(5e3);let c=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=d.oAB({type:o}),o.\u0275inj=d.cJS({imports:[[t.ez,p.m,e.HK,m.Q,e.Oz]]}),o})()},8952:(y,h,a)=>{a.d(h,{f:()=>o});var t=a(5e3),p=a(4333),e=a(322),m=a(8833);function d(i,r){if(1&i&&t._UZ(0,"app-detail-list",6),2&i){const s=t.oxw();t.Q6J("list",s.unhealthyEvaluations)("listSettings",s.unhealthyEvaluationsListSettings)}}function c(i,r){if(1&i&&t._UZ(0,"app-detail-list",6),2&i){const s=t.oxw();t.Q6J("list",s.healthyEvaluations)("listSettings",s.healthEventsListSettings)}}let o=(()=>{class i{constructor(s){this.settings=s}ngOnInit(){this.unhealthyEvaluationsListSettings=this.settings.getNewOrExistingUnhealthyEvaluationsListSettings(),this.healthEventsListSettings=this.settings.getNewOrExistingHealthEventsListSettings()}}return i.\u0275fac=function(s){return new(s||i)(t.Y36(p.g))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-health-viewer"]],inputs:{unhealthyEvaluations:"unhealthyEvaluations",healthyEvaluations:"healthyEvaluations"},decls:11,vars:1,consts:[["ngbNav","",1,"nav-wrapper"],["nav","ngbNav"],["ngbNavItem",""],["ngbNavLink",""],["ngbNavContent",""],[3,"ngbNavOutlet"],[3,"list","listSettings"]],template:function(s,_){if(1&s&&(t.TgZ(0,"div",0,1)(2,"div",2)(3,"a",3),t._uU(4,"Unhealthy"),t.qZA(),t.YNc(5,d,1,2,"ng-template",4),t.qZA(),t.TgZ(6,"div",2)(7,"a",3),t._uU(8,"All"),t.qZA(),t.YNc(9,c,1,2,"ng-template",4),t.qZA()(),t._UZ(10,"div",5)),2&s){const f=t.MAs(1);t.xp6(10),t.Q6J("ngbNavOutlet",f)}},directives:[e.Pz,e.nv,e.Vx,e.uN,m.m,e.tO],styles:[""]}),i})()},1627:(y,h,a)=>{a.d(h,{L:()=>T});var t=a(655),p=a(6174),e=a(5e3),m=a(5529),d=a(2684),c=a(1763),o=a(7559),i=a(4515);let r=(()=>{class l{constructor(n,g,C){this.dataService=n,this.restClientService=g,this.messageService=C,this.partitions={},this.partitionDataChanges=new m.xQ}checkCache(n){return n in this.partitions}ensureInitialCache(n){this.checkCache(n.SafetyCheck.PartitionId)||(this.partitions[n.SafetyCheck.PartitionId]=Object.assign({loading:"unstarted"},n))}getPartitionInfo(n,g){return(0,t.mG)(this,void 0,void 0,function*(){this.partitions[n].loading="inflight";try{const C=yield this.restClientService.getPartitionById(n).toPromise(),x=yield this.restClientService.getServiceNameInfo(n).toPromise(),v=yield this.restClientService.getApplicationNameInfo(x.Id).toPromise();let P;P="System"===v.Id?yield this.dataService.getSystemApp().toPromise():yield this.dataService.getApp(v.Id).toPromise();const D=c._.getPartitionViewPath(P.raw.TypeName,v.Id,x.Id,C.PartitionInformation.Id);this.partitions[n]=Object.assign(Object.assign({},g),{serviceName:x.Id,applicationName:v.Id,partition:C.PartitionInformation.Id,link:D,applicationLink:c._.getAppViewPath(P.raw.TypeName,v.Id),serviceLink:c._.getServiceViewPath(P.raw.TypeName,v.Id,x.Id),loading:"loaded"})}catch(C){this.messageService.showMessage("There was an issue getting partition info",d.C.Err),this.partitions[n]=Object.assign(Object.assign({},g),{loading:"failed"})}return this.partitionDataChanges.next(n),this.partitions[n]})}}return l.\u0275fac=function(n){return new(n||l)(e.LFG(o.D),e.LFG(i.j),e.LFG(d.e))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var s=a(9808);function _(l,u){if(1&l){const n=e.EpF();e.TgZ(0,"button",2),e.NdJ("click",function(){return e.CHM(n),e.oxw().load()}),e._uU(1,"Load"),e.qZA()}}function f(l,u){1&l&&(e.TgZ(0,"div",3),e._UZ(1,"span",4),e.qZA())}let O=(()=>{class l{constructor(n){this.cacheService=n}load(){this.cacheService.getPartitionInfo(this.item.SafetyCheck.PartitionId,this.item)}}return l.\u0275fac=function(n){return new(n||l)(e.Y36(r))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-load-cell"]],decls:2,vars:2,consts:[["class","simple-button",3,"click",4,"ngIf"],["class","loader",4,"ngIf"],[1,"simple-button",3,"click"],[1,"loader"],[1,"mif-spinner4","rotate"]],template:function(n,g){1&n&&(e.YNc(0,_,2,0,"button",0),e.YNc(1,f,2,0,"div",1)),2&n&&(e.Q6J("ngIf",g.item.SafetyCheck.PartitionId&&("unstarted"===g.item.loading||"failed"===g.item.loading)),e.xp6(1),e.Q6J("ngIf","inflight"===g.item.loading))},directives:[s.O5],styles:[".loader[_ngcontent-%COMP%]{width:50px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}"]}),l})();var I=a(2654),S=a(4333),E=a(8833);function M(l,u){1&l&&(e.TgZ(0,"div"),e._uU(1," Safety Check information is not loaded by default when there are more then 5 safey checks. "),e.qZA())}let T=(()=>{class l{constructor(n,g,C){this.partitionCache=n,this.cdr=g,this.settingsService=C,this.safetyChecksWithData=[],this.tooManySafetyChecks=!1,this.sub=new I.w}ngOnInit(){this.settings=this.settingsService.getNewOrExistingListSettings("safety-checks",null,[new p.mP(O),new p.NL("SafetyCheck.Kind","Kind"),new p.a7("SafetyCheck.PartitionId","Partition",n=>n.link),new p.a7("applicationName","Application",n=>n.applicationLink),new p.a7("serviceName","service",n=>n.serviceLink)]),this.sub.add(this.partitionCache.partitionDataChanges.subscribe(n=>{this.setSafetyChecks(),this.cdr.detectChanges()}))}ngOnDestroy(){this.sub.unsubscribe()}ngOnChanges(){this.tooManySafetyChecks=this.safetyChecks.length>5,this.safetyChecks.forEach(n=>{n.SafetyCheck.PartitionId&&(this.partitionCache.ensureInitialCache(n),!this.tooManySafetyChecks&&"unstarted"===this.partitionCache.partitions[n.SafetyCheck.PartitionId].loading&&this.getPartitionInfo(n.SafetyCheck.PartitionId,n))}),this.setSafetyChecks()}getPartitionInfo(n,g){return(0,t.mG)(this,void 0,void 0,function*(){yield this.partitionCache.getPartitionInfo(n,g),this.setSafetyChecks(),this.cdr.detectChanges()})}safetyCheck(n,g){return g.SafetyCheck.PartitionId||g.SafetyCheck.Kind}setSafetyChecks(){this.safetyChecksWithData=this.safetyChecks.map(n=>n.SafetyCheck.PartitionId?this.partitionCache.partitions[n.SafetyCheck.PartitionId]:n)}}return l.\u0275fac=function(n){return new(n||l)(e.Y36(r),e.Y36(e.sBO),e.Y36(S.g))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-safety-checks"]],inputs:{safetyChecks:"safetyChecks"},features:[e.TTD],decls:3,vars:3,consts:[[2,"border-top","1px solid gray"],[4,"ngIf"],[3,"list","listSettings"]],template:function(n,g){1&n&&(e.TgZ(0,"div",0),e.YNc(1,M,2,0,"div",1),e._UZ(2,"app-detail-list",2),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngIf",g.tooManySafetyChecks),e.xp6(1),e.Q6J("list",g.safetyChecksWithData)("listSettings",g.settings))},directives:[s.O5,E.m],styles:[""]}),l})()},1926:(y,h,a)=>{a.d(h,{m:()=>c});var t=a(9808),p=a(4466),e=a(322),m=a(6461),d=a(5e3);let c=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=d.oAB({type:o}),o.\u0275inj=d.cJS({imports:[[t.ez,p.m,e.HK,m.Q]]}),o})()},3847:(y,h,a)=>{a.d(h,{A:()=>o});var t=a(5e3),p=a(9808);function e(i,r){1&i&&t.GkF(0)}function m(i,r){1&i&&t._UZ(0,"div",9)}const d=function(i){return{data:i}};function c(i,r){if(1&i&&(t.ynx(0),t.TgZ(1,"div",2)(2,"div",3),t._uU(3),t.qZA(),t.TgZ(4,"div")(5,"span",4),t._uU(6),t.qZA(),t._UZ(7,"span",5),t.qZA()(),t.TgZ(8,"div",6),t.YNc(9,e,1,0,"ng-container",7),t.qZA(),t.YNc(10,m,1,0,"div",8),t.BQk()),2&i){const s=r.$implicit,_=r.last,f=t.oxw();t.xp6(1),t.Q6J("ngClass",f.cssClass[s.state]),t.uIk("data-cy",f.cssClass[s.state]+"phase"),t.xp6(2),t.hij("",s.name," "),t.xp6(3),t.Oqu(s.textRight),t.xp6(1),t.Q6J("ngClass",f.iconMap[s.state]),t.xp6(2),t.Q6J("ngTemplateOutlet",f.middleItem)("ngTemplateOutletContext",t.VKq(8,d,s)),t.xp6(1),t.Q6J("ngIf",!_)}}let o=(()=>{class i{constructor(){this.currentIndex=0,this.vertical=!1,this.failed=!1,this.progress=[],this.wrapperClass="",this.iconMap={"-1":"mif-checkmark",0:"mif-spinner4 rotate"},this.cssClass={"-1":"done",0:"in-progress","-2":"failed",1:"pending"}}ngOnChanges(){this.progress=this.items.map((s,_)=>Object.assign(Object.assign({},s),{name:s.name,state:this.getPhaseReference(this.currentIndex,_+1),textRight:s.textRight})),this.wrapperClass=this.vertical?"vertical":""}getPhaseReference(s,_){const f=_-s;return f>=1?1:f<=-1?-1:this.failed?-2:0}}return i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-phase-diagram"]],inputs:{middleItem:"middleItem",items:"items",currentIndex:"currentIndex",vertical:"vertical",failed:"failed"},features:[t.TTD],decls:2,vars:2,consts:[[1,"flex-center",3,"ngClass"],[4,"ngFor","ngForOf"],[1,"progress-item","hover-row",3,"ngClass"],[1,"text-description"],[2,"margin-right","5px"],[3,"ngClass"],[2,"width","fit-content"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","mif-arrow-right arrow",4,"ngIf"],[1,"mif-arrow-right","arrow"]],template:function(s,_){1&s&&(t.TgZ(0,"div",0),t.YNc(1,c,11,10,"ng-container",1),t.qZA()),2&s&&(t.Q6J("ngClass",_.wrapperClass),t.xp6(1),t.Q6J("ngForOf",_.progress))},directives:[p.mk,p.sg,p.tP,p.O5],styles:[".progress-item[_ngcontent-%COMP%]{position:relative;padding:0 5px 5px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-bottom:3px solid;margin-left:5px;margin-right:5px;text-align:center;-ms-flex-pack:justify;justify-content:space-between}.progress-item[_ngcontent-%COMP%]   .text-description[_ngcontent-%COMP%]{margin-right:5px}.progress-indicator[_ngcontent-%COMP%]{display:block;border-radius:50%;border:3px solid white;width:15px;height:15px}.pending[_ngcontent-%COMP%]{border-color:gray}.in-progress[_ngcontent-%COMP%]{border-color:var(--accent-darkblue)}.done[_ngcontent-%COMP%]{border-color:green}.failed[_ngcontent-%COMP%]{border-color:var(--badge-error)}.vertical[_ngcontent-%COMP%]{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}.vertical[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{-ms-flex:1;flex:1}.vertical[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{-ms-flex-item-align:center;align-self:center;-ms-transform:rotate(90deg);transform:rotate(90deg)}"]}),i})()},8139:(y,h,a)=>{a.d(h,{a:()=>d});var t=a(5e3),p=a(9808);function e(c,o){if(1&c&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&c){const i=o.$implicit;t.xp6(1),t.hij(" ",i," ")}}function m(c,o){if(1&c&&(t.TgZ(0,"div",3)(1,"a",4),t._uU(2),t.qZA()()),2&c){const i=t.oxw();t.xp6(1),t.Q6J("href",i.link,t.LSH),t.xp6(1),t.Oqu(i.linkText)}}let d=(()=>{class c{constructor(){this.description="",this.iconSize="mif-4x",this.descriptionList=[]}}return c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-warning"]],inputs:{description:"description",iconSize:"iconSize",descriptionList:"descriptionList",link:"link",linkText:"linkText"},decls:9,vars:6,consts:[[1,"warning-message"],[4,"ngFor","ngForOf"],["class","warning-link",4,"ngIf"],[1,"warning-link"],["target","_blank",1,"link",3,"href"]],template:function(i,r){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"span"),t.TgZ(2,"div")(3,"div"),t._uU(4),t.qZA(),t.TgZ(5,"div")(6,"ul"),t.YNc(7,e,2,1,"li",1),t.qZA()(),t.YNc(8,m,3,2,"div",2),t.qZA()()),2&i&&(t.xp6(1),t.Gre("",r.iconSize," mif-notification warning-icon"),t.xp6(3),t.hij(" ",r.description," "),t.xp6(3),t.Q6J("ngForOf",r.descriptionList),t.xp6(1),t.Q6J("ngIf",r.linkText))},directives:[p.sg,p.O5],styles:[".warning-message[_ngcontent-%COMP%]{width:100%;display:-ms-flexbox;display:flex;border:1px solid var(--badge-warning);padding:5px 5px 5px 0;border-radius:10px;box-shadow:var(--heavy-box-shadow)}.warning-message[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%]{padding:10px;border-right:2px solid var(--accent-underline);margin-right:10px}.warning-message[_ngcontent-%COMP%]   .warning-link[_ngcontent-%COMP%]{text-align:center;margin-top:5px}ul[_ngcontent-%COMP%]{-webkit-padding-start:20px;padding-inline-start:20px}"],changeDetection:0}),c})()}}]);