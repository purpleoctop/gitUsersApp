(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{r9Cd:function(n,t,e){"use strict";e.r(t),e.d(t,"UserModule",(function(){return h}));var o=e("ofXK"),i=e("NFeN"),c=e("3Pt+"),s=e("tyNb"),r=e("cp0P"),a=e("lJxs"),g=e("fXoL"),b=e("6Qg2");function l(n,t){if(1&n&&(g.Nb(0,"div"),g.Nb(1,"a",12),g.jc(2),g.Mb(),g.Mb()),2&n){const n=t.$implicit;g.zb(1),g.ac("href",n.url,g.fc),g.zb(1),g.kc(n.name)}}function M(n,t){if(1&n&&(g.Nb(0,"div"),g.hc(1,l,3,2,"div",11),g.Mb()),2&n){const n=g.Wb(2);g.zb(1),g.Zb("ngForOf",n.user.repos)}}function u(n,t){1&n&&(g.Nb(0,"p"),g.jc(1,"no repositories to display"),g.Mb())}function p(n,t){if(1&n&&(g.Nb(0,"div"),g.Nb(1,"div",13),g.Lb(2,"img",14),g.Nb(3,"a",15),g.jc(4),g.Mb(),g.Mb(),g.Mb()),2&n){const n=t.$implicit;g.zb(2),g.ac("src",n.avatar_url,g.fc),g.zb(1),g.ac("href",n.url,g.fc),g.zb(1),g.kc(n.login)}}function f(n,t){if(1&n&&(g.Nb(0,"div"),g.Nb(1,"div",6),g.hc(2,p,5,3,"div",11),g.Mb(),g.Mb()),2&n){const n=g.Wb(2);g.zb(2),g.Zb("ngForOf",n.user.orgs)}}function d(n,t){1&n&&(g.Nb(0,"p"),g.jc(1,"no organisations to display"),g.Mb())}function O(n,t){if(1&n&&(g.Nb(0,"div",1),g.Nb(1,"h2"),g.jc(2),g.Mb(),g.Lb(3,"hr"),g.Nb(4,"div",2),g.Nb(5,"section"),g.Nb(6,"div",3),g.Lb(7,"img",4),g.Mb(),g.Nb(8,"div",5),g.Nb(9,"h5"),g.jc(10,"user repos"),g.Mb(),g.Lb(11,"hr"),g.Nb(12,"div",6),g.hc(13,M,2,1,"div",7),g.hc(14,u,2,0,"ng-template",null,8,g.ic),g.Mb(),g.Mb(),g.Mb(),g.Nb(16,"section"),g.Nb(17,"div",9),g.Nb(18,"h5"),g.jc(19,"user organisations"),g.Mb(),g.Lb(20,"hr"),g.hc(21,f,3,1,"div",7),g.hc(22,d,2,0,"ng-template",null,10,g.ic),g.Mb(),g.Mb(),g.Mb(),g.Mb()),2&n){const n=g.dc(15),t=g.dc(23),e=g.Wb();g.zb(2),g.kc(e.user.info.login),g.zb(5),g.ac("src",e.user.info.avatar_url,g.fc),g.zb(6),g.Zb("ngIf",0!==e.user.repos.length)("ngIfElse",n),g.zb(8),g.Zb("ngIf",0!==e.user.orgs.length)("ngIfElse",t)}}let _=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=g.Eb({type:n,selectors:[["app-user-details"]],inputs:{user:"user"},decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"details"],[1,"avatar"],["alt","avatar",3,"src"],[1,"repos"],[1,"list"],[4,"ngIf","ngIfElse"],["noRepos",""],[1,"orgs"],["noOrgs",""],[4,"ngFor","ngForOf"],[3,"href"],[1,"org"],["alt","organisation avatar",3,"src"],[1,"name",3,"href"]],template:function(n,t){1&n&&g.hc(0,O,24,6,"div",0),2&n&&g.Zb("ngIf",t.user)},directives:[o.i,o.h],styles:[".container[_ngcontent-%COMP%]{width:700px;height:600px;padding:20px}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .repos[_ngcontent-%COMP%]{width:450px;align-self:flex-end}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .repos[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{height:100px;display:flex;flex-direction:column;justify-content:space-between}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .orgs[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .orgs[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .orgs[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .org[_ngcontent-%COMP%]{position:relative;margin-left:10px}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .orgs[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .org[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .orgs[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .org[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{position:absolute;visibility:hidden;font-weight:bolder;color:#fff;top:30px;left:10px;width:100%;background:#285e61;font-size:20px;opacity:0;text-decoration:none}.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .orgs[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .org[_ngcontent-%COMP%]:hover   .name[_ngcontent-%COMP%]{visibility:visible;opacity:1}"]}),n})();const C=[{path:"",component:(()=>{class n{constructor(n,t,e){this.route=n,this.router=t,this.usersService=e}ngOnInit(){this.route.paramMap.subscribe(n=>this.userName=n.get("user")),this.getfullUser(this.userName).subscribe(n=>{this.fullUser=n,console.log(this.fullUser)})}getUser(n){return this.usersService.getUser(n)}getRepos(n){return this.usersService.getUserRepos(n)}getOrgs(n){return this.usersService.getOrgs(n)}getfullUser(n){return this.fullUser$=Object(r.a)({info:this.getUser(n),repos:this.getRepos(n).pipe(Object(a.a)(n=>n.slice(0,3))),orgs:this.getOrgs(n)}),this.fullUser$}}return n.\u0275fac=function(t){return new(t||n)(g.Kb(s.a),g.Kb(s.b),g.Kb(b.a))},n.\u0275cmp=g.Eb({type:n,selectors:[["app-user-main"]],decls:8,vars:1,consts:[[1,"container"],[1,"user"],[3,"user"],[1,"back"],[1,"animate__animated","animate__bounce","animate__infinite"],["src","../../../assets/images/icon.png","alt",""],["routerLink","../"]],template:function(n,t){1&n&&(g.Nb(0,"div",0),g.Nb(1,"div",1),g.Lb(2,"app-user-details",2),g.Mb(),g.Nb(3,"div",3),g.Nb(4,"div",4),g.Lb(5,"img",5),g.Mb(),g.Nb(6,"p",6),g.jc(7,"back"),g.Mb(),g.Mb(),g.Mb()),2&n&&(g.zb(2),g.Zb("user",t.fullUser))},directives:[_,s.c],styles:[".container[_ngcontent-%COMP%]{height:100%;width:100%;background-image:url(bg-02.5f31256bbba6ab62fb81.png);background-size:cover;background-repeat:no-repeat;background-attachment:fixed}.container[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{position:absolute}.container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{position:relative;left:90%;top:50%;width:50px}.container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px;width:40px}.container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-size:20px;font-weight:500;cursor:pointer}.container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:focus{outline:0}"]}),n})()}];let P=(()=>{class n{}return n.\u0275mod=g.Ib({type:n}),n.\u0275inj=g.Hb({factory:function(t){return new(t||n)},imports:[[s.d.forChild(C)],s.d]}),n})(),h=(()=>{class n{}return n.\u0275mod=g.Ib({type:n}),n.\u0275inj=g.Hb({factory:function(t){return new(t||n)},imports:[[o.b,P,i.b,c.e,c.h]]}),n})()}}]);