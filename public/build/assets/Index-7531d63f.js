import{_ as g}from"./AuthenticatedLayout-d40c709b.js";import{c as e,a as r,u as i,w as o,F as l,o as t,X as b,b as u,n as m,d as s,p as f,t as a,h as x}from"./app-f308fc3b.js";const w=s("i",{class:"fa fa-plus mr-1"},null,-1),v=s("i",{class:"fa fa-plus mr-1"},null,-1),N={class:"p-4 bg-white rounded-lg shadow-lg"},y=["value"],P={class:"font-bold"},V={class:"grid mb-4 mt-2 md:grid-cols-2 xl:grid-cols-4"},j=["value"],k={key:0,class:"text-center"},D={__name:"Index",props:{categories:Object},setup(h){return(d,B)=>(t(),e(l,null,[r(i(b),{title:"Permissions"}),r(g,null,{header:o(()=>[u(" Permissions "),r(i(m),{href:d.route("permissions.create"),class:"flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple float-right"},{default:o(()=>[w,u(" New Permission ")]),_:1},8,["href"]),r(i(m),{href:d.route("permission-categories.create"),class:"flex items-center justify-between px-4 py-2 mr-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple float-right"},{default:o(()=>[v,u(" New Category ")]),_:1},8,["href"])]),default:o(()=>[s("div",N,[(t(!0),e(l,null,f(h.categories,(n,c)=>(t(),e("div",{value:c},[s("p",P,a(c+1)+". "+a(n.name),1),s("div",V,[(t(!0),e(l,null,f(n.permissions,(_,p)=>(t(),e("label",{class:"flex items-center dark:text-gray-400",value:p},a(p+1)+". "+a(_.name),9,j))),256)),n.permissions.length===0?(t(),e("p",k," No Permisions Found! ")):x("",!0)])],8,y))),256))])]),_:1})],64))}};export{D as default};
