import{r as c,a as f,o as l,c as a,f as r,F as d,b as e,V as s,d as n,u as x,n as v}from"./index.1386b267.js";import{c as p}from"./vue-contenteditable.umd.min.be9b0619.js";const y={class:"flex justify-between items-center"},b={class:"flex justify-start items-center"},w=e("div",{class:"h-10 w-10 bg-secondary rounded-full"},null,-1),g={class:"flex flex-col justify-center items-start ml-5"},k={class:"text-left"},z={class:"text-left"},C={class:"my-5"},j={class:"mb-3 text-left"},S=e("div",{class:"h-44 bg-background rounded-2xl"},null,-1),B={class:"flex"},V=["onClick"],$=e("div",{class:"flex justify-center items-center absolute -top-3 -right-3 text-[11px] rounded-full border border-white border-solid w-6 h-6 p-1 bg-primary-500 text-white"}," 99+ ",-1),F={class:"text-title-500 text-left my-4"},K={class:"py-2 flex justify-between items-start"},N={class:"flex w-full"},D=e("div",{class:"rounded-full w-6 h-6 bg-secondary mt-2"},null,-1),E={class:"flex w-full"},I=e("div",{class:"rounded-full w-6 h-6 bg-primary-700 mt-2"},null,-1),J={class:"flex flex-col justify-start items-start mx-3 text-xs color-title"},L={class:"opacity-50"},T={class:"text-base my-2"},O={setup(q){const m=c([{avatar:"",name:"Karim Saif",time:"2022.06.01 17:58",content:"hihihihi",img:"",likes:2300,comments:99,showComment:!1}]),h=c([{avatar:"",name:"Steve Jobs",time:"2022.05.31 12:00",comment:"It is Cool!!!!"},{avatar:"",name:"Karim Saif",time:"2022.05.31 13:06",comment:"Thank you~"}]);return(A,G)=>{const o=f("icon");return l(!0),a(d,null,r(m.value,(t,u)=>(l(),a("div",{class:"bg-white rounded-2xl p-4",key:`post-${u}`},[e("div",y,[e("div",b,[w,e("div",g,[e("span",k,s(t.name),1),e("span",z,s(t.time),1)])]),n(o,{name:"dot",class:"opacity-40"})]),e("div",C,[e("div",j,s(t.content),1),S]),e("div",B,[e("div",null,[n(o,{name:"heart",class:"mr-7",size:{width:"1.5rem",height:"1.5rem"}},null,8,["size"])]),e("div",{class:"relative cursor-pointer",onClick:i=>t.showComment=!t.showComment},[$,n(o,{name:"chat",size:{width:"1.5rem",height:"1.5rem"}},null,8,["size"])],8,V)]),e("p",F,s(t.likes)+" likes",1),e("div",K,[e("div",N,[D,n(x(p),{tag:"p",contenteditable:!0,class:"w-11/12 mx-3 px-3 py-2 appearance-none bg-background rounded-2xl text-left focus:outline-none"})]),n(o,{name:"send",size:{width:"1.5rem",height:"1.5rem"},class:"mt-2 cursor-pointer hover:text-primary-500"},null,8,["size"])]),e("div",{class:v(["mt-3 ease-in duration-300",{hidden:!t.showComment}])},[(l(!0),a(d,null,r(h.value,(i,_)=>(l(),a("div",{class:"flex w-full justify-between mt-3",key:`comment-${_}`},[e("div",E,[I,e("div",J,[e("span",null,s(i.name),1),e("span",L,s(i.time),1),e("div",T,s(i.comment),1)])]),n(o,{name:"cross",size:{width:"0.8rem",height:"0.8rem"},class:"opacity-50"},null,8,["size"])]))),128))],2)]))),128)}}};export{O as default};
