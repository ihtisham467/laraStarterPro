import{v as d,c as l,a,u as t,w as n,F as p,o as c,X as u,b as m,d as e,e as _,f as v,g as f,t as h,h as x,n as g}from"./app-f308fc3b.js";import{_ as w}from"./AuthenticatedLayout-d40c709b.js";const b={class:"mt-10 sm:mt-0"},N={class:"mt-5 md:col-span-2 md:mt-0"},y={class:"overflow-hidden shadow sm:rounded-md"},C={class:"bg-white px-4 py-5 sm:p-6"},B={class:"grid grid-cols-6 gap-6"},V={class:"col-span-6 sm:col-span-3"},k=e("label",{for:"first-name",class:"block text-sm font-medium leading-6 text-gray-900"},"Province Name",-1),P={key:0,class:"text-red-500 text-xs"},S={class:"col-span-6 sm:col-span-3"},D=e("button",{type:"submit",class:"submitBtn mt-8"}," Save ",-1),$={__name:"Create",props:{},setup(F){const s=d({name:null});return(r,o)=>(c(),l(p,null,[a(t(u),{title:"Create New Province"}),a(w,null,{header:n(()=>[m(" Create New Province ")]),default:n(()=>[e("div",b,[e("div",N,[e("form",{onSubmit:o[1]||(o[1]=_(i=>t(s).post(r.route("provinces.store")),["prevent"]))},[e("div",y,[e("div",C,[e("div",B,[e("div",V,[k,v(e("input",{type:"text",name:"name",placeholder:"Province Name",autocomplete:"given-name",autofocus:"",class:"textInput","onUpdate:modelValue":o[0]||(o[0]=i=>t(s).name=i)},null,512),[[f,t(s).name]]),t(s).errors.name?(c(),l("p",P,h(t(s).errors.name),1)):x("",!0)]),e("div",S,[D,a(t(g),{href:r.route("provinces.index"),class:"cancelBtn mt-8 ml-2"},{default:n(()=>[m(" Cancel ")]),_:1},8,["href"])])])])])],32)])])]),_:1})],64))}};export{$ as default};