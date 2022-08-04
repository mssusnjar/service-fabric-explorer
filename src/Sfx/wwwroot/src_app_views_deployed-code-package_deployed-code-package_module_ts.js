"use strict";(self.webpackChunkSfxWeb=self.webpackChunkSfxWeb||[]).push([["src_app_views_deployed-code-package_deployed-code-package_module_ts"],{5282:(O,g,n)=>{n.r(g),n.d(g,{DeployedCodePackageModule:()=>S});var c=n(9808),m=n(8555),u=n(4850),l=n(4286),y=n(2165),e=n(5e3),d=n(3240);let p=(()=>{class a extends y.J{constructor(t,o){super(o),this.data=t}common(t){return this.data.getDeployedCodePackage(this.nodeName,this.appId,this.serviceId,this.activationId,this.codePackageName,!0,t).pipe((0,u.U)(o=>{this.deployedCodePackage=o}))}getParams(t){this.nodeName=l.a.getNodeName(t),this.serviceId=l.a.getServiceId(t),this.activationId=l.a.getServicePackageActivationId(t),this.appId=l.a.getAppId(t),this.codePackageName=l.a.getCodePackageName(t)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d.D),e.Y36(e.zs3))},a.\u0275dir=e.lG2({type:a,features:[e.qOj]}),a})();var i=n(5237),f=n(5053),h=n(1086),v=n(2261),P=n(8118);let x=(()=>{class a extends p{constructor(t,o,r){super(t,o),this.data=t,this.tree=r,this.containerLogTabName="container logs",this.tabs=[{name:"essentials",route:"./"},{name:"details",route:"./details"}]}setup(){this.tree.selectTreeNode([i.R.cluster(),i.R.nodeGroup(),i.R.node(this.nodeName),i.R.deployedApp(this.appId),i.R.deployedServicePackage(this.serviceId,this.activationId),i.R.deployedCodePackageGroup(),i.R.deployedCodePackage(this.codePackageName)],!0)}refresh(t){return this.deployedCodePackage.raw.HostType===f.gT.ContainerHostTypeName?this.tabs.some(o=>o.name===this.containerLogTabName)||this.tabs.push({name:this.containerLogTabName,route:"./containerlogs"}):this.tabs=this.tabs.filter(o=>o.name!==this.containerLogTabName),(0,h.of)(null)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d.D),e.Y36(e.zs3),e.Y36(v.r))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-base"]],features:[e.qOj],decls:4,vars:3,consts:[["type","Deployed Code Package",3,"tabs","name","actions"],[1,"main-view"],[1,"flex-child"]],template:function(t,o){1&t&&(e._UZ(0,"app-navbar",0),e.TgZ(1,"div",1)(2,"div",2),e._UZ(3,"router-outlet"),e.qZA()()),2&t&&e.Q6J("tabs",o.tabs)("name",o.codePackageName)("actions",null==o.deployedCodePackage?null:o.deployedCodePackage.actions)},directives:[P.S,m.lC],styles:[""]}),a})();var C=n(4034),I=n(7895);function T(a,s){if(1&a&&e._UZ(0,"app-essential-health-tile",3),2&a){const t=e.oxw(2);e.Q6J("listItems",t.essentialItems)}}function k(a,s){if(1&a&&e._UZ(0,"app-status-resolver",5),2&a){const t=e.oxw(3);e.Q6J("status",t.deployedCodePackage.raw.Status)}}function N(a,s){if(1&a&&(e.TgZ(0,"app-essential-health-tile",3),e.YNc(1,k,1,1,"ng-template",4),e.qZA()),2&a){const t=e.oxw(2);e.Q6J("listItems",t.essentialItems2)}}function D(a,s){if(1&a&&(e.TgZ(0,"div",1),e.YNc(1,T,1,1,"app-essential-health-tile",2),e.YNc(2,N,2,1,"app-essential-health-tile",2),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.deployedCodePackage?null:t.deployedCodePackage.isInitialized),e.xp6(1),e.Q6J("ngIf",null==t.deployedCodePackage?null:t.deployedCodePackage.isInitialized)}}let w=(()=>{class a extends p{constructor(t,o){super(t,o),this.data=t,this.essentialItems=[],this.essentialItems2=[]}refresh(){return this.essentialItems=[{descriptionName:"Version",displayText:this.deployedCodePackage.raw.Version,copyTextValue:this.deployedCodePackage.raw.Version},{descriptionName:"Host Type",displayText:this.deployedCodePackage.raw.HostType,copyTextValue:this.deployedCodePackage.raw.HostType},{descriptionName:"Host Isolation Mode",displayText:this.deployedCodePackage.raw.HostIsolationMode,copyTextValue:this.deployedCodePackage.raw.HostIsolationMode}],this.essentialItems2=[{descriptionName:"Process Id",displayText:this.deployedCodePackage.raw.MainEntryPoint.ProcessId,copyTextValue:this.deployedCodePackage.raw.MainEntryPoint.ProcessId},{descriptionName:"Instance Id",displayText:this.deployedCodePackage.raw.MainEntryPoint.InstanceId,copyTextValue:this.deployedCodePackage.raw.MainEntryPoint.InstanceId},{descriptionName:"Status",copyTextValue:this.deployedCodePackage.raw.Status,selectorName:"status",displaySelector:!0}],this.deployedCodePackage.servicePackageActivationId&&this.essentialItems.push({descriptionName:"Service Package Activation Id",copyTextValue:this.deployedCodePackage.servicePackageActivationId,displayText:this.deployedCodePackage.servicePackageActivationId}),(0,h.of)(null)}setup(){this.essentialItems=[],this.essentialItems2=[]}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d.D),e.Y36(e.zs3))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-essentials"]],features:[e.qOj],decls:1,vars:1,consts:[["class","tile-container",4,"ngIf"],[1,"tile-container"],["class","long",3,"listItems",4,"ngIf"],[1,"long",3,"listItems"],["appEssentialTemplate","","id","status"],[3,"status"]],template:function(t,o){1&t&&e.YNc(0,D,3,2,"div",0),2&t&&e.Q6J("ngIf",o.deployedCodePackage)},directives:[c.O5,C.Q,C.W,I.u],styles:[""]}),a})();var L=n(1271);function Z(a,s){if(1&a&&e._UZ(0,"app-detail-view-part",2),2&a){const t=e.oxw();e.Q6J("data",t.deployedCodePackage)}}let M=(()=>{class a extends p{constructor(t,o){super(t,o),this.data=t}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d.D),e.Y36(e.zs3))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-details"]],features:[e.qOj],decls:2,vars:1,consts:[[1,"detail-pane","essen-pane"],[3,"data",4,"ngIf"],[3,"data"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.YNc(1,Z,1,1,"app-detail-view-part",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",o.deployedCodePackage))},directives:[c.O5,L.d],styles:[""]}),a})();var A=n(9040);function Y(a,s){if(1&a&&(e.TgZ(0,"div",5)(1,"pre",6)(2,"code",7),e._uU(3),e.qZA()()()),2&a){const t=e.oxw(2);e.xp6(3),e.Oqu(t.containerLogs)}}function J(a,s){if(1&a){const t=e.EpF();e.TgZ(0,"div")(1,"div",1)(2,"label"),e._uU(3,"Tail:"),e.qZA(),e.TgZ(4,"app-input",2),e.NdJ("modelChange",function(r){return e.CHM(t),e.oxw().deployedCodePackage.containerLogsTail=r}),e.qZA(),e.TgZ(5,"button",3),e.NdJ("click",function(){return e.CHM(t),e.oxw().getLogs()}),e._uU(6,"Get Logs"),e.qZA()(),e.YNc(7,Y,4,1,"div",4),e.qZA()}if(2&a){const t=e.oxw();e.xp6(4),e.Q6J("model",t.deployedCodePackage.containerLogsTail),e.xp6(3),e.Q6J("ngIf",t.containerLogs)}}const b=[{path:"",component:x,children:[{path:"",component:w},{path:"details",component:M},{path:"containerlogs",component:(()=>{class a extends p{constructor(t,o){super(t,o),this.data=t}refresh(t){return this.deployedCodePackage.containerLogs.refresh(t).pipe((0,u.U)(o=>{this.containerLogs=o.raw.Content}))}getLogs(){this.refresh().subscribe()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(d.D),e.Y36(e.zs3))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-container-logs"]],features:[e.qOj],decls:1,vars:1,consts:[[4,"ngIf"],["data-cy","container-logs",1,"tail-bar","detail-pane","essen-pane"],[3,"model","modelChange"],["data-cy","get-logs",1,"simple-button",3,"click"],["class","detail-pane essen-pane",4,"ngIf"],[1,"detail-pane","essen-pane"],["role","presentation","tabindex","0"],["aria-label","container logs"]],template:function(t,o){1&t&&e.YNc(0,J,8,2,"div",0),2&t&&e.Q6J("ngIf",o.deployedCodePackage)},directives:[c.O5,A.a],styles:[".tail-bar[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;gap:10px;margin-bottom:5px;-ms-flex-align:center;align-items:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.tail-bar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:var(--font-size-medium)}"]}),a})()}]}];let E=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[m.Bz.forChild(b)],m.Bz]}),a})();var Q=n(4466),_=n(6461),z=n(7883);let S=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[c.ez,E,Q.m,_.Q,z.m]]}),a})()}}]);