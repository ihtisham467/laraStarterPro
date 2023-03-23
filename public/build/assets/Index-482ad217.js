import{_ as f}from"./AuthenticatedLayout-d40c709b.js";import{_}from"./Pagination-cd7c8b03.js";import{c as o,a as s,u as d,w as a,F as c,o as i,X as h,b as u,n as m,d as e,p as x,t as g,O as b}from"./app-f308fc3b.js";const y={class:"p-4 bg-white rounded-lg shadow-lg"},w={class:"overflow-hidden mb-8 w-full rounded-lg border shadow-xs"},v={class:"overflow-x-auto w-full"},k={class:"w-full whitespace-no-wrap"},C=e("thead",null,[e("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b"},[e("th",{class:"px-4 py-3"},"Name"),e("th",{class:"px-4 py-3"},"Action")])],-1),N={class:"bg-white divide-y"},A={class:"px-4 py-3 text-sm"},B={class:"px-4 py-3 text-sm"},O=e("i",{class:"fa fa-trash"},null,-1),V=[O],$={class:"px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9"},I={__name:"Index",props:{cities:Object},setup(r){function p(t){confirm("Are you sure?")&&b.delete(route("cities.destroy",t))}return(t,l)=>(i(),o(c,null,[s(d(h),{title:"Cities"}),s(f,null,{header:a(()=>[u(" Cities "),s(d(m),{href:t.route("cities.create"),class:"flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple float-right"},{default:a(()=>[u(" Add New City ")]),_:1},8,["href"])]),default:a(()=>[e("div",y,[e("div",w,[e("div",v,[e("table",k,[C,e("tbody",N,[(i(!0),o(c,null,x(r.cities.data,n=>(i(),o("tr",{key:n.id,class:"text-gray-700"},[e("td",A,g(n.name),1),e("td",B,[e("a",{href:"#",class:"ml-3",type:"button",onClick:l[0]||(l[0]=j=>p(t.role.id))},V)])]))),128))])])]),e("div",$,[s(_,{links:r.cities.links},null,8,["links"])])])])]),_:1})],64))}};export{I as default};
