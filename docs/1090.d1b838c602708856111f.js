(self.webpackChunkSergioNegreteVillegas=self.webpackChunkSergioNegreteVillegas||[]).push([[1090],{1090:(i,e,o)=>{"use strict";o.r(e),o.d(e,{LoginPageModule:()=>m});var n=o(8583),s=o(665),t=o(3083),r=o(2316),a=o(639),g=o(1628);let l=(()=>{class i{constructor(i){this.storage=i}login(i,e){console.log(this.storage.get("email"))}register(i,e,o){this.storage.set("email",i),this.storage.set("nombre",e),this.storage.set("password",o),console.log(this.storage.keys)}}return i.\u0275fac=function(e){return new(e||i)(a.LFG(g.K))},i.\u0275prov=a.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const c=["slidePrincipal"],d=function(i){return{"pick-avatar-seleccionado":i}};function Z(i,e){if(1&i){const i=a.EpF();a.TgZ(0,"ion-slide"),a.TgZ(1,"ion-img",15),a.NdJ("click",function(){const e=a.CHM(i).$implicit;return a.oxw().selecionarAvatar(e)}),a.qZA(),a.qZA()}if(2&i){const i=e.$implicit;a.xp6(1),a.MGl("src","/assets/avatars/",i.img,""),a.Q6J("ngClass",a.VKq(2,d,i.seleccionado))}}const u=[{path:"",component:(()=>{class i{constructor(i,e){this.usuarioService=i,this.storage=e,this.avatarSlide={slidesPerView:3.5},this.primerSlide={allowSlideNext:!1,allowSlidePrev:!1},this.loginUser={email:"",password:""},this.registerUser={email:"",nombre:"",password:""},this.avatars=[{img:"./av-1.png",seleccionado:!0},{img:"./av-2.png",seleccionado:!1},{img:"./av-3.png",seleccionado:!1},{img:"./av-4.png",seleccionado:!1},{img:"./av-5.png",seleccionado:!1},{img:"./av-6.png",seleccionado:!1},{img:"./av-7.png",seleccionado:!1},{img:"./av-8.png",seleccionado:!1}]}ngOnInit(){return i=this,void 0,o=function*(){yield this.storage.create()},new((e=void 0)||(e=Promise))(function(n,s){function t(i){try{a(o.next(i))}catch(e){s(e)}}function r(i){try{a(o.throw(i))}catch(e){s(e)}}function a(i){var o;i.done?n(i.value):(o=i.value,o instanceof e?o:new e(function(i){i(o)})).then(t,r)}a((o=o.apply(i,[])).next())});var i,e,o}login(i){this.usuarioService.login(this.loginUser.email,this.loginUser.password)}registro(i){this.usuarioService.register(this.registerUser.email,this.registerUser.nombre,this.registerUser.password)}selecionarAvatar(i){this.avatars.forEach(i=>i.seleccionado=!1),i.seleccionado=!0}mostrarRegistro(){this.slides1.lockSwipes(!1),this.slides1.slideTo(1),this.slides1.lockSwipes(!0)}mostrarLogin(){this.slides1.lockSwipes(!1),this.slides1.slideTo(0),this.slides1.lockSwipes(!0)}}return i.\u0275fac=function(e){return new(e||i)(a.Y36(l),a.Y36(g.K))},i.\u0275cmp=a.Xpm({type:i,selectors:[["app-login"]],viewQuery:function(i,e){if(1&i&&a.Gf(c,5),2&i){let i;a.iGM(i=a.CRH())&&(e.slides1=i.first)}},decls:65,vars:10,consts:[[1,"mainSlide",3,"options"],["slidePrincipal",""],[3,"ngSubmit"],["fLogin","ngForm"],["fixed",""],["src","./assets/avatars/av-2.png"],["name","email","type","email","required","",3,"ngModel","ngModelChange"],["name","password","type","password","required","",3,"ngModel","ngModelChange"],["type","submit","color","tertiary","shape","round",3,"disabled"],[3,"options"],[4,"ngFor","ngForOf"],["fRegistro","ngForm"],["name","nombre","type","text","required","",3,"ngModel","ngModelChange"],["no-border",""],["shape","round","expand","full","size","small","fill","outline","color","tertiary",3,"click"],[1,"pick-avatar",3,"src","ngClass","click"]],template:function(i,e){if(1&i){const i=a.EpF();a.TgZ(0,"ion-content"),a.TgZ(1,"ion-slides",0,1),a.TgZ(3,"ion-slide"),a.TgZ(4,"form",2,3),a.NdJ("ngSubmit",function(){a.CHM(i);const o=a.MAs(5);return e.login(o)}),a.TgZ(6,"ion-grid",4),a.TgZ(7,"ion-row"),a.TgZ(8,"ion-col"),a._UZ(9,"img",5),a.qZA(),a.qZA(),a.TgZ(10,"ion-row"),a.TgZ(11,"ion-col"),a.TgZ(12,"ion-list"),a.TgZ(13,"ion-item"),a.TgZ(14,"ion-label"),a._uU(15,"Email"),a.qZA(),a.TgZ(16,"ion-input",6),a.NdJ("ngModelChange",function(i){return e.loginUser.email=i}),a.qZA(),a.qZA(),a.TgZ(17,"ion-item"),a.TgZ(18,"ion-label"),a._uU(19,"Password"),a.qZA(),a.TgZ(20,"ion-input",7),a.NdJ("ngModelChange",function(i){return e.loginUser.password=i}),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(21,"ion-row"),a.TgZ(22,"ion-col"),a.TgZ(23,"ion-button",8),a._uU(24," Login "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(25,"ion-slide"),a.TgZ(26,"ion-grid",4),a.TgZ(27,"ion-row"),a.TgZ(28,"ion-col"),a.TgZ(29,"h3"),a._uU(30,"Seleccione Avatar"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(31,"ion-row"),a.TgZ(32,"ion-col"),a.TgZ(33,"ion-slides",9),a.YNc(34,Z,2,4,"ion-slide",10),a.qZA(),a.qZA(),a.qZA(),a.TgZ(35,"form",2,11),a.NdJ("ngSubmit",function(){a.CHM(i);const o=a.MAs(36);return e.registro(o)}),a.TgZ(37,"ion-row"),a.TgZ(38,"ion-col"),a.TgZ(39,"ion-list"),a.TgZ(40,"ion-item"),a.TgZ(41,"ion-label"),a._uU(42,"Email"),a.qZA(),a.TgZ(43,"ion-input",6),a.NdJ("ngModelChange",function(i){return e.registerUser.email=i}),a.qZA(),a.qZA(),a.TgZ(44,"ion-item"),a.TgZ(45,"ion-label"),a._uU(46,"Nombre"),a.qZA(),a.TgZ(47,"ion-input",12),a.NdJ("ngModelChange",function(i){return e.registerUser.nombre=i}),a.qZA(),a.qZA(),a.TgZ(48,"ion-item"),a.TgZ(49,"ion-label"),a._uU(50,"Password"),a.qZA(),a.TgZ(51,"ion-input",7),a.NdJ("ngModelChange",function(i){return e.registerUser.password=i}),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(52,"ion-row"),a.TgZ(53,"ion-col"),a.TgZ(54,"ion-button",8),a._uU(55," Crear usuario "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(56,"ion-footer",13),a.TgZ(57,"ion-toolbar"),a.TgZ(58,"ion-row"),a.TgZ(59,"ion-col"),a.TgZ(60,"ion-button",14),a.NdJ("click",function(){return e.mostrarLogin()}),a._uU(61," Ingresar "),a.qZA(),a.qZA(),a.TgZ(62,"ion-col"),a.TgZ(63,"ion-button",14),a.NdJ("click",function(){return e.mostrarRegistro()}),a._uU(64," Registrarme "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&i){const i=a.MAs(5),o=a.MAs(36);a.xp6(1),a.Q6J("options",e.primerSlide),a.xp6(15),a.Q6J("ngModel",e.loginUser.email),a.xp6(4),a.Q6J("ngModel",e.loginUser.password),a.xp6(3),a.Q6J("disabled",i.invalid),a.xp6(10),a.Q6J("options",e.avatarSlide),a.xp6(1),a.Q6J("ngForOf",e.avatars),a.xp6(9),a.Q6J("ngModel",e.registerUser.email),a.xp6(4),a.Q6J("ngModel",e.registerUser.nombre),a.xp6(4),a.Q6J("ngModel",e.registerUser.password),a.xp6(3),a.Q6J("disabled",o.invalid)}},directives:[t.W2,t.Hr,t.A$,s._Y,s.JL,s.F,t.jY,t.Nd,t.wI,t.q_,t.Ie,t.Q$,t.pK,t.j9,s.Q7,s.JJ,s.On,t.YG,n.sg,t.fr,t.sr,t.Xz,n.mk],styles:[".mainSlide[_ngcontent-%COMP%], .mainSlide[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{width:100%;height:100%}img[_ngcontent-%COMP%]{width:120px}.pick-avatar[_ngcontent-%COMP%]{width:80px;opacity:.3}.pick-avatar-seleccionado[_ngcontent-%COMP%]{transition:opacity .5s linear;opacity:1!important}"]}),i})()}];let p=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({imports:[[r.Bz.forChild(u)],r.Bz]}),i})(),m=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({imports:[[n.ez,s.u5,t.Pc,p]]}),i})()}}]);