import{v as c,c as m,a,u as s,w as n,F as p,o as l,X as u,b as d,d as e,e as _,f,g as h,t as g,h as v,n as x}from"./app-f308fc3b.js";import{_ as y}from"./AuthenticatedLayout-d40c709b.js";const C={class:"mt-10 sm:mt-0"},w={class:"mt-5 md:col-span-2 md:mt-0"},b={class:"overflow-hidden shadow sm:rounded-md"},N={class:"bg-white px-4 py-5 sm:p-6"},B={class:"grid grid-cols-6 gap-6"},V={class:"col-span-6 sm:col-span-3"},k=e("label",{for:"first-name",class:"block text-sm font-medium leading-6 text-gray-900"},"Permission Category Name",-1),P={key:0,class:"text-red-500 text-xs"},S={class:"col-span-6 sm:col-span-3"},D=e("button",{type:"submit",class:"submitBtn mt-8"}," Save ",-1),$={__name:"CreateCategory",setup(F){const t=c({name:null});return(r,o)=>(l(),m(p,null,[a(s(u),{title:"Create New Permission Category"}),a(y,null,{header:n(()=>[d(" Create New Permission Category ")]),default:n(()=>[e("div",C,[e("div",w,[e("form",{onSubmit:o[1]||(o[1]=_(i=>s(t).post(r.route("permission-categories.store")),["prevent"]))},[e("div",b,[e("div",N,[e("div",B,[e("div",V,[k,f(e("input",{type:"text",name:"name",placeholder:"Permission Category Name",autocomplete:"given-name",autofocus:"",class:"textInput","onUpdate:modelValue":o[0]||(o[0]=i=>s(t).name=i)},null,512),[[h,s(t).name]]),s(t).errors.name?(l(),m("p",P,g(s(t).errors.name),1)):v("",!0)]),e("div",S,[D,a(s(x),{href:r.route("permissions.index"),class:"cancelBtn mt-8 ml-2"},{default:n(()=>[d(" Cancel ")]),_:1},8,["href"])])])])])],32)])])]),_:1})],64))}};export{$ as default};
