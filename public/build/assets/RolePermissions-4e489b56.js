import{v,c as e,a,u as o,w as c,F as d,o as t,X as g,b as h,d as s,e as x,p as b,n as k,t as m,f as w,l as P,h as B}from"./app-f308fc3b.js";import{_ as C}from"./AuthenticatedLayout-d40c709b.js";const N={class:"p-4 bg-white rounded-lg shadow-lg"},V=["value"],j={class:"font-bold"},O={class:"grid mb-4 mt-2 md:grid-cols-2 xl:grid-cols-4"},F={class:"flex items-center dark:text-gray-400"},R=["value"],y={class:"ml-2"},D={key:0,class:"text-center"},M={class:"col-span-6 sm:col-span-3"},S=s("button",{type:"submit",class:"submitBtn mt-"},"Update",-1),L={__name:"RolePermissions",props:{categories:Object,role:Object,rolePermissions:Object,errors:Object},setup(r){const l=v({permissions:r.rolePermissions});return(u,n)=>(t(),e(d,null,[a(o(g),{title:"Role Permissions"}),a(C,null,{header:c(()=>[h(" Role Permissions ")]),default:c(()=>[s("div",N,[s("form",{onSubmit:n[1]||(n[1]=x(i=>o(l).post(u.route("roles.update-permissions",r.role.id)),["prevent"]))},[(t(!0),e(d,null,b(r.categories,(i,p)=>(t(),e("div",{value:p},[s("p",j,m(p+1)+". "+m(i.name),1),s("div",O,[(t(!0),e(d,null,b(i.permissions,_=>(t(),e("label",F,[w(s("input",{type:"checkbox",class:"customCheckbox","onUpdate:modelValue":n[0]||(n[0]=f=>o(l).permissions=f),value:_.id},null,8,R),[[P,o(l).permissions]]),s("span",y,m(_.name),1)]))),256)),i.permissions.length===0?(t(),e("p",D," No Permisions Found! ")):B("",!0)])],8,V))),256)),s("div",M,[S,a(o(k),{href:u.route("permissions.index"),class:"cancelBtn mt- ml-2"},{default:c(()=>[h(" Cancel ")]),_:1},8,["href"])])],32)])]),_:1})],64))}};export{L as default};
