"use strict";(self.webpackChunkprojeto=self.webpackChunkprojeto||[]).push([[642],{2642:(u,i,r)=>{r.r(i),r.d(i,{ContatoModule:()=>f});var s=r(6895),m=r(9541),n=r(433),o=r(1571);const c=[{path:"",component:(()=>{class e{constructor(a){this.fb=a,this.formContato=this.fb.group({nome:["",[n.kI.minLength(4),n.kI.required]],assunto:["",[n.kI.minLength(10),n.kI.required]],telefone:["",[n.kI.minLength(11),n.kI.required]],email:["",[n.kI.email,n.kI.required]],mensagem:["",[n.kI.minLength(10),n.kI.required]]})}ngOnInit(){}enviar(){alert("Formul\xe1rio enviado com sucesso!"),this.formContato.reset()}}return e.\u0275fac=function(a){return new(a||e)(o.Y36(n.qu))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-contato"]],decls:13,vars:22,consts:[[1,"contact__title"],[1,"contact__container"],[1,"contact-form",3,"formGroup"],["type","text","placeholder","Digite seu nome","formControlName","nome"],["type","text","placeholder","Digite o assunto","formControlName","assunto"],["type","tel","placeholder","(00) 00000-0000","formControlName","telefone"],["type","email","placeholder","Digite seu email","formControlName","email"],["maxlength","300","placeholder","Digite a sua mensagem...","formControlName","mensagem"],[3,"disabled","click"],["src","","frameborder","0"]],template:function(a,t){1&a&&(o.TgZ(0,"h2",0),o._uU(1,"Entre em contato"),o.qZA(),o.TgZ(2,"section",1)(3,"form",2),o._UZ(4,"input",3)(5,"input",4)(6,"input",5)(7,"input",6)(8,"textarea",7),o.TgZ(9,"button",8),o.NdJ("click",function(){return t.enviar()}),o._uU(10,"Enviar"),o.qZA()(),o.TgZ(11,"address"),o._UZ(12,"iframe",9),o.qZA()()),2&a&&(o.xp6(3),o.Q6J("formGroup",t.formContato),o.xp6(1),o.ekj("valid",t.formContato.controls.nome.valid)("invalid",t.formContato.controls.nome.invalid&&(t.formContato.controls.nome.touched||t.formContato.controls.nome.dirty)),o.xp6(1),o.ekj("valid",t.formContato.controls.assunto.valid)("invalid",t.formContato.controls.assunto.invalid&&(t.formContato.controls.assunto.touched||t.formContato.controls.assunto.dirty)),o.xp6(1),o.ekj("valid",t.formContato.controls.telefone.valid)("invalid",t.formContato.controls.telefone.invalid&&(t.formContato.controls.telefone.touched||t.formContato.controls.telefone.dirty)),o.xp6(1),o.ekj("valid",t.formContato.controls.email.valid)("invalid",t.formContato.controls.email.invalid&&(t.formContato.controls.email.touched||t.formContato.controls.email.dirty)),o.xp6(1),o.ekj("valid",t.formContato.controls.mensagem.valid)("invalid",t.formContato.controls.mensagem.invalid&&(t.formContato.controls.mensagem.touched||t.formContato.controls.mensagem.dirty)),o.xp6(1),o.Q6J("disabled",t.formContato.invalid))},dependencies:[n._Y,n.Fj,n.JJ,n.JL,n.nD,n.sg,n.u],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]}),e})()}];let d=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[m.Bz.forChild(c),m.Bz]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[s.ez,d,n.UX]}),e})()}}]);