import{v as l,J as c,c as m,a as o,u as t,w as n,F as _,o as i,X as u,b as r,d as e,e as f,f as h,g as v,t as g,h as x,n as b}from"./app-f308fc3b.js";import{_ as w}from"./AuthenticatedLayout-d40c709b.js";const y={class:"mt-10 sm:mt-0"},N={class:"mt-5 md:col-span-2 md:mt-0"},S={class:"overflow-hidden shadow sm:rounded-md"},B={class:"bg-white px-4 py-5 sm:p-6"},V={class:"grid grid-cols-6 gap-6"},k={class:"col-span-6 sm:col-span-3"},A=e("label",{for:"first-name",class:"block text-sm font-medium leading-6 text-gray-900"},"App Name",-1),C={key:0,class:"text-red-500 text-xs"},D={class:"col-span-6 sm:col-span-3"},F=e("button",{type:"submit",class:"submitBtn mt-8"}," Save ",-1),$={__name:"Index",props:{},setup(I){const s=l({app_name:c().props.appSetting.app_name});return(p,a)=>(i(),m(_,null,[o(t(u),{title:"App Setting"}),o(w,null,{header:n(()=>[r(" App Setting ")]),default:n(()=>[e("div",y,[e("div",N,[e("form",{onSubmit:a[1]||(a[1]=f(d=>t(s).post(p.route("app-setting.update")),["prevent"]))},[e("div",S,[e("div",B,[e("div",V,[e("div",k,[A,h(e("input",{type:"text",name:"app_name",placeholder:"App Name",autocomplete:"given-name",autofocus:"",class:"textInput","onUpdate:modelValue":a[0]||(a[0]=d=>t(s).app_name=d)},null,512),[[v,t(s).app_name]]),t(s).errors.app_name?(i(),m("p",C,g(t(s).errors.app_name),1)):x("",!0)]),e("div",D,[F,o(t(b),{href:p.route("dashboard"),class:"cancelBtn mt-8 ml-2"},{default:n(()=>[r(" Cancel ")]),_:1},8,["href"])])])])])],32)])])]),_:1})],64))}};export{$ as default};
