"use strict";(self.webpackChunkSfxWeb=self.webpackChunkSfxWeb||[]).push([["default-src_app_modules_backup-restore_partition-disable-back-up_partition-disable-back-up_co-ba03b2"],{7654:(h,g,a)=>{a.d(g,{U:()=>p});var t=a(8966),n=a(5e3),r=a(7559),l=a(3075);const c=function(){return{standalone:!0}};let p=(()=>{class o{constructor(e,i,d){this.dialogRef=e,this.data=i,this.dataService=d,this.cleanBackup=!1}ok(){this.data.data.enable(this.cleanBackup).subscribe(()=>{this.dialogRef.close(!1)},e=>{console.log(e)})}cancel(){this.dialogRef.close(!1)}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(t.so),n.Y36(t.WI),n.Y36(r.D))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-partition-disable-back-up"]],decls:15,vars:3,consts:[[1,"action-modal"],[1,"modal-header"],[1,"modal-title"],[1,"modal-body"],[1,"dl-horizontal"],["type","checkbox",3,"ngModel","ngModelOptions","ngModelChange"],[1,"modal-footer"],["type","submit",1,"solid-button","bluey",3,"click"],["type","button",1,"flat-button",3,"click"]],template:function(e,i){1&e&&(n.TgZ(0,"form",0)(1,"div",1)(2,"h4",2),n._uU(3,"Disable Backup Policy"),n.qZA()(),n.TgZ(4,"div",3)(5,"dl",4)(6,"dt"),n._uU(7,"Clean Backup"),n.qZA(),n.TgZ(8,"dd")(9,"input",5),n.NdJ("ngModelChange",function(_){return i.cleanBackup=_}),n.qZA()()()(),n.TgZ(10,"div",6)(11,"button",7),n.NdJ("click",function(){return i.ok()}),n._uU(12,"Disable Backup"),n.qZA(),n.TgZ(13,"button",8),n.NdJ("click",function(){return i.cancel()}),n._uU(14,"Cancel"),n.qZA()()()),2&e&&(n.xp6(9),n.Q6J("ngModel",i.cleanBackup)("ngModelOptions",n.DdM(2,c)))},directives:[l._Y,l.JL,l.F,l.Wl,l.JJ,l.On],styles:[""]}),o})()},8592:(h,g,a)=>{a.d(g,{y:()=>s});var t=a(8966),n=a(5e3),r=a(7559),l=a(3075),c=a(9808);function p(e,i){if(1&e&&(n.TgZ(0,"option",10),n._uU(1),n.qZA()),2&e){const d=i.$implicit;n.Q6J("value",d.raw.Name),n.xp6(1),n.Oqu(d.raw.Name)}}const o=function(){return{standalone:!0}};let s=(()=>{class e{constructor(d,_,u){this.dialogRef=d,this.data=_,this.dataService=u,this.backupPolicyName=""}ngOnInit(){this.dataService.backupPolicies.ensureInitialized().subscribe()}ok(){this.data.data.enable(this.backupPolicyName).subscribe(()=>{this.dialogRef.close(!1)},d=>{console.log(d)})}cancel(){this.dialogRef.close(!1)}}return e.\u0275fac=function(d){return new(d||e)(n.Y36(t.so),n.Y36(t.WI),n.Y36(r.D))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-partition-enable-back-up"]],decls:16,vars:5,consts:[[1,"action-modal"],[1,"modal-header"],[1,"modal-title"],[1,"modal-body"],[1,"dl-horizontal"],[1,"input-flat",3,"ngModel","ngModelOptions","ngModelChange"],["class","input-flat",3,"value",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","submit",1,"solid-button","bluey",3,"disabled","click"],["type","button",1,"flat-button",3,"click"],[1,"input-flat",3,"value"]],template:function(d,_){1&d&&(n.TgZ(0,"form",0)(1,"div",1)(2,"h4",2),n._uU(3,"Enable / Update Backup Policy"),n.qZA()(),n.TgZ(4,"div",3)(5,"dl",4)(6,"dt"),n._uU(7,"Backup Policy Name"),n.qZA(),n.TgZ(8,"dd")(9,"select",5),n.NdJ("ngModelChange",function(b){return _.backupPolicyName=b}),n.YNc(10,p,2,2,"option",6),n.qZA()()()(),n.TgZ(11,"div",7)(12,"button",8),n.NdJ("click",function(){return _.ok()}),n._uU(13,"Enable Backup"),n.qZA(),n.TgZ(14,"button",9),n.NdJ("click",function(){return _.cancel()}),n._uU(15,"Cancel"),n.qZA()()()),2&d&&(n.xp6(9),n.Q6J("ngModel",_.backupPolicyName)("ngModelOptions",n.DdM(4,o)),n.xp6(1),n.Q6J("ngForOf",_.dataService.backupPolicies.collection),n.xp6(2),n.Q6J("disabled",0===_.backupPolicyName.length))},directives:[l._Y,l.JL,l.F,l.EJ,l.JJ,l.On,c.sg,l.YN,l.Kr],styles:[""]}),e})()},8855:(h,g,a)=>{a.d(g,{B:()=>r});var t=a(5e3);const n=["*"];let r=(()=>{class l{constructor(){}}return l.\u0275fac=function(p){return new(p||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-tile-wrapper"]],ngContentSelectors:n,decls:5,vars:0,consts:[[1,"dashboard-wrapper"],[1,"dashboard","dashboard-small"],[1,"dashboard-tile","flex-center",2,"height","100%"],[2,"height","100%"]],template:function(p,o){1&p&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.Hsn(4),t.qZA()()()())},styles:[".dashboard-container-small[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;width:270px}.chart-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0}.dashboard-wrapper[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;height:100%;width:100%}.dashboard-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--font-primary-color)!important}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]{box-shadow:var(--primary-box-shadow);border-radius:var(--primary-border-radius);color:var(--font-primary-color);padding:7px;background:var(--primary-background-color);text-align:center;height:100%;width:100%}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard.has-view-path[_ngcontent-%COMP%]{cursor:pointer}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .dashboard-tile[_ngcontent-%COMP%]{display:block;position:relative;text-align:left;width:100%;height:100%}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .dashboard-tile[_ngcontent-%COMP%]   .dashboard-tile-inner[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;padding-left:16px!important}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .dashboard-tile[_ngcontent-%COMP%]   .dashboard-tile-inner[_ngcontent-%COMP%]   .dashboard-tile-leftbar[_ngcontent-%COMP%]{width:6px;position:absolute;left:0;top:0;bottom:0}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .dashboard-tile[_ngcontent-%COMP%]   .dashboard-tile-inner[_ngcontent-%COMP%]   .dashboard-tile-leftbar.badge-upgrade-active[_ngcontent-%COMP%]{background:var(--accent-darkblue)}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .dashboard-tile[_ngcontent-%COMP%]   .dashboard-tile-inner[_ngcontent-%COMP%]   .dashboard-tile-leftbar.badge-upgrade-inactive[_ngcontent-%COMP%]{background:var(--accent-background-color)}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .dashboard-tile[_ngcontent-%COMP%]   .dashboard-tile-inner[_ngcontent-%COMP%]   .dashboard-tile-title[_ngcontent-%COMP%]{display:block;font-size:11pt;line-height:.9}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .dashboard-tile[_ngcontent-%COMP%]   .dashboard-tile-inner[_ngcontent-%COMP%]   .dashboard-tile-number[_ngcontent-%COMP%]{display:block;font-size:72px;line-height:1;margin:20px 0}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-large[_ngcontent-%COMP%]{padding:17px 7px;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-large[_ngcontent-%COMP%]   .dashboard-datapoints[_ngcontent-%COMP%]{margin:20px 5px 0;display:-ms-flexbox;display:flex;-ms-flex-pack:space-evenly;justify-content:space-evenly}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-large[_ngcontent-%COMP%]   .dashboard-datapoints[_ngcontent-%COMP%]   .dashboard-datapoint[_ngcontent-%COMP%]{-ms-flex:1;flex:1}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-large[_ngcontent-%COMP%]   .dashboard-datapoints[_ngcontent-%COMP%]   .dashboard-datapoint[_ngcontent-%COMP%]   .dashboard-datapoint-title[_ngcontent-%COMP%]{font-size:var(--font-size-default)}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-large[_ngcontent-%COMP%]   .dashboard-datapoints[_ngcontent-%COMP%]   .dashboard-datapoint[_ngcontent-%COMP%]   .dashboard-datapoint-number[_ngcontent-%COMP%]{font-size:24pt}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-small[_ngcontent-%COMP%]{padding:7px 12px;position:relative;height:100%;width:100%;overflow:hidden}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-small[_ngcontent-%COMP%]   .dashboard-datapoints[_ngcontent-%COMP%]{margin:0 0 0 20px;float:right}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-small[_ngcontent-%COMP%]   .dashboard-datapoints[_ngcontent-%COMP%]   .dashboard-datapoint[_ngcontent-%COMP%]{height:36px;padding:0 0 0 14px;margin:4px 0 8px}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-small[_ngcontent-%COMP%]   .dashboard-datapoints[_ngcontent-%COMP%]   .dashboard-datapoint[_ngcontent-%COMP%]   .dashboard-datapoint-title[_ngcontent-%COMP%]{font-size:11pt}.dashboard-wrapper[_ngcontent-%COMP%]   .dashboard-small[_ngcontent-%COMP%]   .dashboard-datapoints[_ngcontent-%COMP%]   .dashboard-datapoint[_ngcontent-%COMP%]   .dashboard-datapoint-number[_ngcontent-%COMP%]{font-size:16pt;width:54px}"]}),l})()},1901:(h,g,a)=>{a.d(g,{c:()=>p});var t=a(9808),n=a(4466),r=a(322),l=a(6461),c=a(5e3);let p=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=c.oAB({type:o}),o.\u0275inj=c.cJS({imports:[[t.ez,n.m,r.HK,l.Q,r.Oz]]}),o})()},8952:(h,g,a)=>{a.d(g,{f:()=>o});var t=a(5e3),n=a(4333),r=a(322),l=a(8833);function c(s,e){if(1&s&&t._UZ(0,"app-detail-list",6),2&s){const i=t.oxw();t.Q6J("list",i.unhealthyEvaluations)("listSettings",i.unhealthyEvaluationsListSettings)}}function p(s,e){if(1&s&&t._UZ(0,"app-detail-list",6),2&s){const i=t.oxw();t.Q6J("list",i.healthyEvaluations)("listSettings",i.healthEventsListSettings)}}let o=(()=>{class s{constructor(i){this.settings=i}ngOnInit(){this.unhealthyEvaluationsListSettings=this.settings.getNewOrExistingUnhealthyEvaluationsListSettings(),this.healthEventsListSettings=this.settings.getNewOrExistingHealthEventsListSettings()}}return s.\u0275fac=function(i){return new(i||s)(t.Y36(n.g))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-health-viewer"]],inputs:{unhealthyEvaluations:"unhealthyEvaluations",healthyEvaluations:"healthyEvaluations"},decls:11,vars:1,consts:[["ngbNav","",1,"nav-wrapper"],["nav","ngbNav"],["ngbNavItem",""],["ngbNavLink",""],["ngbNavContent",""],[3,"ngbNavOutlet"],[3,"list","listSettings"]],template:function(i,d){if(1&i&&(t.TgZ(0,"div",0,1)(2,"div",2)(3,"a",3),t._uU(4,"Unhealthy"),t.qZA(),t.YNc(5,c,1,2,"ng-template",4),t.qZA(),t.TgZ(6,"div",2)(7,"a",3),t._uU(8,"All"),t.qZA(),t.YNc(9,p,1,2,"ng-template",4),t.qZA()(),t._UZ(10,"div",5)),2&i){const _=t.MAs(1);t.xp6(10),t.Q6J("ngbNavOutlet",_)}},directives:[r.Pz,r.nv,r.Vx,r.uN,l.m,r.tO],styles:[""]}),s})()},8523:(h,g,a)=>{a.d(g,{H:()=>p});var t=a(5e3),n=a(9808);function r(o,s){1&o&&t._UZ(0,"span",7)}function l(o,s){if(1&o&&(t.TgZ(0,"div")(1,"div",8)(2,"div",9),t._uU(3),t.qZA(),t.TgZ(4,"div"),t._uU(5,"Minimum Replica Set Size"),t.qZA()(),t.TgZ(6,"div",2)(7,"div",9),t._uU(8),t.qZA(),t.TgZ(9,"div"),t._uU(10,"Target Replica Set Size"),t.qZA()()()),2&o){const e=t.oxw();t.xp6(3),t.hij(" ",e.data.MinReplicaSetSize," "),t.xp6(5),t.hij(" ",e.data.TargetReplicaSetSize," ")}}function c(o,s){if(1&o&&(t.TgZ(0,"div")(1,"div",8)(2,"div",9),t._uU(3),t.qZA(),t.TgZ(4,"div"),t._uU(5,"Instance Count"),t.qZA()(),t.TgZ(6,"div",2)(7,"div",9),t._uU(8),t.qZA(),t.TgZ(9,"div"),t._uU(10,"Minimum Instance Count"),t.qZA()()()),2&o){const e=t.oxw();t.xp6(3),t.hij(" ",e.data.InstanceCount," "),t.xp6(5),t.hij(" ",e.data.MinInstanceCount," ")}}let p=(()=>{class o{constructor(){this.stateful=!1}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-state-info"]],inputs:{stateful:"stateful",data:"data"},decls:10,vars:4,consts:[[2,"display","flex","flex-direction","column"],[1,"title-wrapper","top-seperator"],[1,"flex-center"],[1,"badge-container","flex-center",2,"position","relative"],[1,"mif-server","icon-item-middle"],["class","mif-database icon-item-left link",4,"ngIf"],[4,"ngIf"],[1,"mif-database","icon-item-left","link"],[1,"flex-center","line-item-seperator"],[1,"line-item-small"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2),t.qZA(),t.TgZ(3,"div",2)(4,"div",3),t._UZ(5,"span",4),t.YNc(6,r,1,0,"span",5),t.qZA(),t.TgZ(7,"div"),t.YNc(8,l,11,2,"div",6),t.YNc(9,c,11,2,"div",6),t.qZA()()()),2&e&&(t.xp6(2),t.hij(" ",i.stateful?"Stateful":"Stateless"," "),t.xp6(4),t.Q6J("ngIf",i.stateful),t.xp6(2),t.Q6J("ngIf",i.stateful),t.xp6(1),t.Q6J("ngIf",!i.stateful))},directives:[n.O5],styles:[".badge-container[_ngcontent-%COMP%]{margin-right:10px;width:40px;height:40px;-ms-flex-pack:center;justify-content:center}.line-item[_ngcontent-%COMP%], .line-item-large[_ngcontent-%COMP%], .line-item-small[_ngcontent-%COMP%]{line-height:1;margin-right:7px}.line-item-small[_ngcontent-%COMP%]{font-size:28px;width:30px;text-align:end}.line-item-large[_ngcontent-%COMP%]{font-size:33px}.title-wrapper[_ngcontent-%COMP%]{font-size:18pt;line-height:.9;color:#c9c9c9;font-weight:600;border-bottom:1px solid #4c4c4c;padding-bottom:8px;text-align:center}.icon-item[_ngcontent-%COMP%], .icon-item-right[_ngcontent-%COMP%], .icon-item-middle[_ngcontent-%COMP%], .icon-item-left[_ngcontent-%COMP%]{position:absolute}.icon-item-left[_ngcontent-%COMP%]{font-size:29px;left:20px;bottom:-11px}.icon-item-middle[_ngcontent-%COMP%]{bottom:-8px;font-size:40px}.icon-item-right[_ngcontent-%COMP%]{font-size:29px;left:21px}.top-seperator[_ngcontent-%COMP%]{border-bottom:5px solid #4c4c4c}.line-item-seperator[_ngcontent-%COMP%]{border-bottom:1px solid #4c4c4c;padding-bottom:4px;margin-bottom:3px}"],changeDetection:0}),o})()}}]);