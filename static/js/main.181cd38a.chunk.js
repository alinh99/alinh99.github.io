(this.webpackJsonpalinhtodos=this.webpackJsonpalinhtodos||[]).push([[0],Array(46).concat([function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,c){},,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),i=c(35),r=c.n(i),o=(c(46),c(47),c(9)),l=c(10),j=c(12),u=c(11),d=(c(48),function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"Background",children:this.props.children})}}]),c}(n.Component)),b=function(e){return e.children},h=(c(49),c(50),c(51),function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).changeHandler=function(t){var c=t.target.value;e.props.setData(c)},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)(b,{children:Object(s.jsx)("div",{className:"Input",children:Object(s.jsxs)("div",{className:"Block",children:[Object(s.jsx)("label",{children:this.props.label}),Object(s.jsx)("input",{type:this.props.type,onChange:this.changeHandler})]})})})}}]),c}(n.Component)),O=(c(52),c(53),function(e){return Object(s.jsx)(b,{children:Object(s.jsx)("button",{className:e.className,onClick:e.clicked,children:e.title})})}),p=c(36),f=c.n(p),x=c(8),m=c.n(x),v=m.a.get("access_token"),k=m.a.get("client"),g=m.a.get("uid"),y=f.a.create({baseURL:"https://herokutuan.herokuapp.com",headers:{Authorization:"Bearer ya29.a0AfH6SMC3w1tXe7lCUECmZhkZZ1tRIaeYTrcF1B9_Bk7PFJcfbuxds7nEqowZQNqBs4_JBrnA9a2dDuY_r58jnUl0zgtBUZz95iTKwlVhvVzWgpaJzsiqD7045KO-NdLCa1TT7ZhZcP6npf_Ofb_Y-fkN9ZVgGjG",uid:"".concat(g),"access-token":"".concat(v),client:"".concat(k),"Content-Type":"application/json"}}),w=(c(81),function(){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"Spinner",children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})})}),N=c(37),S=Object(N.a)({forceRefresh:!0}),C=c(19),T=c.n(C),L=c(4),_=c.n(L),B=c(7),D=c(2),I=(c(85),c(86),c(87),c(5)),A=function(e){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"Item",onClick:e.click,children:[Object(s.jsx)("div",{className:"Icon",children:Object(s.jsx)(I.a,{icon:e.icon,color:e.color})}),Object(s.jsx)("p",{className:"Label",children:e.label}),Object(s.jsx)("p",{className:"Number",children:e.number})]})})},E=c(3),M=(c(90),function(e){return Object(s.jsx)(b,{children:Object(s.jsx)("div",{className:"Logo",onClick:e.clickedLogo,children:Object(s.jsx)("div",{className:"text-icon-sidebar",children:"alinh'stodos"})})})});c(91);var P=function(e){var t=Object(n.useState)(e.check),c=Object(D.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),o=Object(D.a)(r,2),l=o[0],j=o[1],u=Object(n.useState)(e.name),d=Object(D.a)(u,2),h=d[0],O=d[1],p=Object(n.useState)(e.name),f=Object(D.a)(p,2),x=f[0],m=f[1],v=Object(n.useState)(!1),k=Object(D.a)(v,2),g=k[0],w=k[1];return Object(n.useEffect)((function(){function t(){return(t=Object(B.a)(_.a.mark((function t(){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.patch("/task_lists/".concat(e.tasklistId,"/todos/").concat(e.id),{done:"".concat(a)});case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[a]),Object(s.jsx)(b,{children:g?"":Object(s.jsxs)("div",{className:"TodoMain",children:[Object(s.jsx)("div",{className:"TodoMainCheckbox",children:l?Object(s.jsx)("input",{type:"text",value:x,onChange:function(e){var t=e.target.value;m(t)},className:"TodoCheck"}):Object(s.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around"},children:[Object(s.jsx)("input",{type:"checkbox",checked:a,onChange:function(){return i(!a)}}),Object(s.jsx)("label",{style:{fontFamily:"inherit",fontWeight:"100"},children:h})]})}),Object(s.jsxs)("div",{className:"TodoMainIcon",children:[l?Object(s.jsx)(I.a,{icon:E.c,style:{cursor:"pointer"},onClick:function(){y.patch("/task_lists/".concat(e.tasklistId,"/todos/").concat(e.id),{name:"".concat(x)}).then((function(e){j(!1),O(x)})).catch((function(e){console.log(e)}))}}):Object(s.jsx)(I.a,{icon:E.e,style:{cursor:"pointer"},onClick:function(){j(!0)}}),l?Object(s.jsx)(I.a,{icon:E.l,style:{cursor:"pointer"},onClick:function(){j(!1),m(h)}}):Object(s.jsx)(I.a,{icon:E.l,style:{cursor:"pointer"},onClick:function(){y.delete("/task_lists/".concat(e.tasklistId,"/todos/").concat(e.id)).then((function(e){w(!0)})).catch((function(e){console.log(e)}))}})]})]})})};c(92),c(93);var H=function(e){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"AddTodoMain",children:[Object(s.jsx)(I.a,{icon:E.g,onClick:e.click,className:"AddTodoMainBtn"}),Object(s.jsx)("input",{className:"inputAdd",type:"text",placeholder:"Add todo",onChange:function(t){var c=t.target.value;e.setData(c)},value:e.value})]})})};c(94);var R=function(e){var t=Object(n.useState)([]),c=Object(D.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),o=Object(D.a)(r,2),l=o[0],j=o[1],u=Object(n.useState)(e.name),d=Object(D.a)(u,2),h=d[0],O=d[1],p=Object(n.useState)(e.name),f=Object(D.a)(p,2),x=f[0],m=f[1],v=Object(n.useState)(!1),k=Object(D.a)(v,2),g=k[0],w=k[1],N=Object(n.useState)([]),S=Object(D.a)(N,2),C=(S[0],S[1],Object(n.useState)("")),T=Object(D.a)(C,2),L=T[0],A=T[1],M=Object(n.useState)(""),R=Object(D.a)(M,2),F=R[0],q=R[1],J=Object(n.useState)(!1),U=Object(D.a)(J,2),Y=U[0],W=(U[1],Object(n.useState)(!1)),z=Object(D.a)(W,2),K=(z[0],z[1],Object(n.useState)("")),Z=Object(D.a)(K,2),G=(Z[0],Z[1],Object(n.useState)([])),V=Object(D.a)(G,2),Q=(V[0],V[1]);Object(n.useEffect)((function(){function t(){return(t=Object(B.a)(_.a.mark((function t(){var c;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.request("/task_lists/".concat(e.id,"/todos"));case 3:c=t.sent,i(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[l]),Object(n.useEffect)((function(){function e(){return(e=Object(B.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/users");case 3:t=e.sent,Q(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function t(){return(t=Object(B.a)(_.a.mark((function t(){var c;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.request("/users");case 3:c=t.sent,c.data.map((function(t){t.id===e.user_id&&q(t.email)})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var X=function(e){w(!1),O(x)},$=function(e){""!==L&&(j(!0),y.post("/task_lists/".concat(e,"/todos"),JSON.stringify({name:"".concat(L)})).then((function(e){A(""),j(!1)})).catch((function(e){console.log(e)})))};return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"TaskListMain",children:[Object(s.jsxs)("div",{className:"TaskListMainName",children:[g?Object(s.jsx)("input",{type:"text",style:{opacity:"1"},value:h,onChange:function(e){var t=e.target.value;O(t)}}):Object(s.jsx)("h2",{style:{opacity:"1"},children:x}),Object(s.jsxs)("div",{className:"TaskListMainNameIcon",children:[g?Object(s.jsx)(I.a,{icon:E.c,onClick:function(){y.patch("/task_lists/".concat(e.id),{name:"".concat(h)}).then((function(e){w(!1),m(h)})).catch((function(e){console.log(e)}))}}):Object(s.jsx)(I.a,{icon:E.e,onClick:function(){w(!0)}}),g?Object(s.jsx)(I.a,{icon:E.l,onClick:X}):Object(s.jsx)(I.a,{icon:E.l,onClick:X,style:{display:"none"}}),g?Object(s.jsx)(I.a,{icon:E.l,color:"red",style:{display:"none"}}):Object(s.jsx)(I.a,{icon:E.l,onClick:e.clickDeleteBtn})]})]}),Object(s.jsx)("di",{v:!0,className:"TodosMain",children:a.map((function(t){return Object(s.jsx)(P,{check:t.done,name:t.name,id:t.id+t.name,tasklistId:e.id},e.id)}))}),e.edit?Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(H,{setData:A,click:function(){return $(e.id)},value:L})}),Object(s.jsx)("h6",{style:{opacity:"0"},children:"You do not have edit permission"})]}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{style:{opacity:"0"},children:[Object(s.jsx)(H,{setData:A,click:function(){return $(e.id)},value:L}),Object(s.jsx)("div",{className:"DeleteBtn",children:Object(s.jsx)(I.a,{icon:E.m,color:"red",onClick:e.clickDeleteBtn})})]}),Object(s.jsx)("h6",{style:{opacity:"1"},children:"You do not have edit permission"})]}),e.user_id?Object(s.jsxs)("h6",{style:{textAlign:"center",color:"black"},children:["Shared by ",F]}):null,Y?Object(s.jsxs)("h6",{style:{textAlign:"center",color:"black"},children:["Sharing with ",Y]}):null]})})},F=(c(95),c(113)),q=c(114);var J=function(e){var t=Object(n.useState)([e.tasklists]),c=Object(D.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),o=Object(D.a)(r,2),l=o[0],j=o[1];Object(n.useEffect)((function(){function e(){return(e=Object(B.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/task_lists");case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[l]),Object(n.useEffect)((function(){function t(){return(t=Object(B.a)(_.a.mark((function t(){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i(e.tasklists);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.tasklists]);var u=a.map((function(e){return Object(s.jsx)(F.a,{lg:3,children:Object(s.jsx)(R,{name:e.name,id:e.id,clickDeleteBtn:function(){return t=e.id,j(!0),void y.delete("/task_lists/".concat(t)).then((function(e){j(!1)})).catch((function(e){console.log(e)}));var t},edit:!0},e.id+e.name)},e.id)}));return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"MainDisplay",children:[e.children,Object(s.jsx)("div",{className:"TaskListArea",children:Object(s.jsx)(q.a,{children:u})})]})})};c(96);var U=function(e){var t=e.tasklists.map((function(e){return Object(s.jsxs)("div",{className:"SBTasklistView",children:[Object(s.jsx)("div",{style:{fontSize:"8px",marginRight:"20px"},children:Object(s.jsx)(I.a,{icon:E.d,color:"red"})}),Object(s.jsx)("p",{children:e.name})]})}));return Object(s.jsxs)("div",{className:"SBTasklist",children:[t,Object(s.jsxs)("div",{className:"SBAddBtn",onClick:e.clicked,children:[Object(s.jsx)("div",{style:{fontSize:"15px",marginRight:"15px"},children:Object(s.jsx)(I.a,{icon:E.g})}),Object(s.jsx)("p",{children:"Add new"})]})]})},Y=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).sideBar=function(e){return function(){0===e?(!0,!1):1===e?(!1,!0):(!1,!1)}},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props,t=e.op1,c=e.op2,n=e.op3;return Object(s.jsx)(b,{children:Object(s.jsx)("div",{className:"SideBar",children:Object(s.jsx)("div",{className:"content",children:Object(s.jsxs)("div",{className:"sticky-content",children:[Object(s.jsx)(M,{clickedLogo:this.props.clickedLogo}),t?Object(s.jsx)(A,{icon:E.b,label:"Tasks",number:this.props.tasklists,color:"#fff",click:this.props.clickTodo}):Object(s.jsx)(A,{icon:E.b,label:"Tasks",number:this.props.tasklists,color:"white",click:this.props.clickTodo}),c?Object(s.jsx)(A,{icon:E.f,label:"Support",number:this.props.shared,color:"#fff",click:this.clickInBox}):Object(s.jsx)(A,{icon:E.f,label:"Support",number:this.props.shared,color:"white",click:this.props.clickInBox}),n?Object(s.jsx)(A,{icon:E.i,label:"Share",number:this.props.share,color:"#fff",click:this.props.clickShare}):Object(s.jsx)(A,{icon:E.i,label:"Share",number:this.props.share,color:"white",click:this.props.clickShare}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("hr",{style:{backgroundColor:"#000",border:"0.1px solid #000",margin:"0 auto",lineHeight:"0.2px",width:"70%"}}),Object(s.jsx)(U,{tasklists:this.props.taskListItem,clicked:this.props.addTasklist})]})})})})}}]),c}(n.Component),W=(c(97),c(98),c(99),function(e){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"DropMenuItem",onClick:e.clicked,children:[Object(s.jsx)(I.a,{icon:e.icon}),Object(s.jsx)("p",{children:e.label})]})})}),z=function(e){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"DropMenu",children:[Object(s.jsx)(W,{label:"Profile",icon:E.a}),Object(s.jsx)(W,{label:"Log Out",icon:E.k,clicked:e.clickedSignOutButton})]})})},K=(c(100),function(e){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"Search",children:[Object(s.jsx)(I.a,{icon:E.h,color:"black"}),Object(s.jsx)("input",{type:"text",placeholder:"Name of Tasklist..."})]})})}),Z=(c(101),function(e){return Object(s.jsx)(b,{children:Object(s.jsx)("div",{className:"Sayhi",children:Object(s.jsx)("div",{className:"user",onClick:e.clickedDropDown,children:e.name})})})}),G=(c(102),function(e){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"DrawerToggle",onClick:e.clicked,children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})})}),V=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={showDropMenu:!1},e.showDropMenu=function(){e.setState({showDropMenu:!e.state.showDropMenu})},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"NavigationBar",children:[Object(s.jsx)(G,{}),Object(s.jsx)(K,{}),Object(s.jsx)("span",{className:"hi",children:"Hi, "}),Object(s.jsx)(Z,{clickedDropDown:this.showDropMenu}),this.state.showDropMenu?Object(s.jsx)(z,{clickedSignOutButton:this.props.clickedSignOutButton}):""]})})}}]),c}(n.Component),Q=(c(103),c(104),function(e){return Object(s.jsx)(b,{children:e.show?Object(s.jsx)("div",{className:"BackDrop",onClick:e.cancel}):null})}),X=function(e){return Object(s.jsxs)(b,{children:[Object(s.jsx)(Q,{show:e.show,cancel:e.cancel}),Object(s.jsx)("div",{className:"Modal",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},children:e.children})]})};c(105),c(106);var $=function(e){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"InputTaskListArea",children:[Object(s.jsx)("label",{children:e.name}),Object(s.jsx)("input",{type:"text",onChange:function(t){var c=t.target.value;e.setData(c)}})]})})},ee=(c(107),function(e){return Object(s.jsx)("p",{className:"AddButtonSubmit",onClick:e.click,children:"Submit"})});var te=function(e){return Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"AddTaskListPanel",children:[Object(s.jsx)("h2",{children:"Add Task List"}),e.message?Object(s.jsx)("p",{style:{color:"red"},children:"You need to enter tasklist name"}):null,Object(s.jsx)($,{name:"TaskList",setData:e.setTaskListName}),Object(s.jsx)($,{name:"Todo 1",setData:e.setTodo1Name}),Object(s.jsx)($,{name:"Todo 2",setData:e.setTodo2Name}),Object(s.jsx)(ee,{click:e.submitHandler}),e.loading?Object(s.jsx)("div",{className:"SpinnerContainer",children:Object(s.jsx)(w,{})}):null]})})};c(108);var ce=function(e){var t=Object(n.useState)([e.tasklists]),c=Object(D.a)(t,2),a=c[0],i=c[1];Object(n.useEffect)((function(){function e(){return(e=Object(B.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/shared");case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var r=a.map((function(e){return Object(s.jsx)(F.a,{lg:3,children:Object(s.jsx)(R,{name:e.name,id:e.id,edit:e.is_write,user_id:e.user_id},e.id+e.name)},e.id)}));return Object(s.jsx)(b,{children:Object(s.jsx)("div",{className:"MainDisplay",children:Object(s.jsx)("div",{className:"TaskListArea",children:Object(s.jsx)(q.a,{children:r})})})})},se=c(25);var ne=function(e){var t=Object(n.useState)(e.is_write),c=Object(D.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),o=Object(D.a)(r,2),l=o[0],j=o[1],u=Object(n.useState)([]),d=Object(D.a)(u,2),b=d[0],h=d[1],O=e.user;Object(n.useEffect)((function(){function t(){return(t=Object(B.a)(_.a.mark((function t(){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.put("/task_lists/".concat(e.taskListId,"/share/").concat(e.user_id),{share_task:{is_write:"".concat(a)}});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[a]),Object(n.useEffect)((function(){function t(){return(t=Object(B.a)(_.a.mark((function t(){var c;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.request("/task_lists/".concat(e.taskListId,"/todos"));case 3:c=t.sent,h(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.taskListId]);var p=Object(s.jsxs)("div",{className:"TaskListMain",style:{width:"250px",margin:"10px"},children:[Object(s.jsx)("div",{className:"TaskListMainName",children:Object(s.jsxs)("h2",{children:[e.name,"  ",Object(s.jsxs)("span",{style:{color:"black",fontSize:"10px"},children:["(",b.length,")"]})]})}),Object(s.jsx)("div",{className:"TodosMain",children:b.map((function(t){return Object(s.jsx)(P,{check:t.done,name:t.name,id:t.id,tasklistId:e.id},e.id)}))}),Object(s.jsx)("span",{style:{color:"red",marginBottom:"20px"},children:O[e.id]}),Object(s.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around",width:"150px"},children:[Object(s.jsx)("input",{type:"checkbox",checked:a,onChange:function(){return i(!a)}}),Object(s.jsx)("label",{style:{fontFamily:"inherit",fontWeight:"100"},children:"Edit Permission"})]}),Object(s.jsx)("div",{className:"DeleteBtn",children:Object(s.jsx)(I.a,{icon:E.m,color:"red",onClick:function(){try{y.delete("task_lists/".concat(e.taskListId,"/share/").concat(e.user_id)),j(!0)}catch(t){console.log(t)}}})})]});return l?null:p};var ae=function(e){var t=Object(n.useState)({}),c=Object(D.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)([]),o=Object(D.a)(r,2),l=o[0],j=o[1];Object(n.useEffect)((function(){function t(){return(t=Object(B.a)(_.a.mark((function t(){var c;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.request("/task_lists/".concat(e.id,"/share"));case 3:c=t.sent,j(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(B.a)(_.a.mark((function e(){var t,c,s,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/users");case 3:t=e.sent,c=t.data,s=c.map((function(e){var t=e.id,c={id:e.email};return u(c,"id",t),c})),n=s.reduce((function(e,t){return Object(se.a)(Object(se.a)({},e),t)})),i(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var u=function(e,t,c){t!==c&&(Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(e,t)),delete e[t])},d=l.map((function(t){return Object(s.jsx)(ne,{user:a,id:t.user_id,taskListId:t.task_list_id,is_write:t.is_write,name:e.name,user_id:t.user_id},t.user_id)}));return Object(s.jsx)(b,{children:Object(s.jsx)("div",{style:{marginBottom:"15px",padding:"10px",display:"flex",overflow:"scroll",maxWidth:"1200px"},children:d})})};var ie=function(e){var t=Object(n.useState)([e.tasklists]),c=Object(D.a)(t,2),a=c[0],i=(c[1],a.reduce((function(e){return e})).map((function(e){return Object(s.jsx)("div",{children:Object(s.jsx)(ae,{name:e.name,id:e.id},e.id+e.name)},e.id)})));return Object(s.jsx)(b,{children:Object(s.jsx)("div",{className:"MainDisplay",children:Object(s.jsx)("div",{className:"TaskListArea",children:i})})})};c(109);var re=function(e){var t=!1;return e.correctEmail&&e.correctTaskList&&(t=!0),Object(s.jsx)(b,{children:Object(s.jsxs)("div",{className:"AddTaskListPanel ShareTaskListPanel",children:[Object(s.jsx)("h2",{children:"Share Task List"}),e.message?Object(s.jsx)("p",{style:{color:"red"},children:"You need to enter tasklist name"}):null,Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(s.jsx)($,{name:"User Email",setData:e.setUserEmail}),e.correctEmail?Object(s.jsx)(I.a,{icon:E.c,color:"#00ff00"}):Object(s.jsx)(I.a,{icon:E.l,color:"#ff0000"})]}),Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(s.jsx)($,{name:"TaskList Name",setData:e.setTasklistName}),e.correctTaskList?Object(s.jsx)(I.a,{icon:E.c,color:"#00ff00"}):Object(s.jsx)(I.a,{icon:E.l,color:"#ff0000"})]}),Object(s.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},onChange:function(t){var c=t.target.value;e.setData(c)}.bind(this),children:[Object(s.jsx)("label",{children:"Edit Permission"}),Object(s.jsx)("input",{type:"radio",value:"editor",name:"name"}),"Editor",Object(s.jsx)("input",{type:"radio",value:"watcher",name:"name"}),"Watcher"]}),Object(s.jsx)("button",{onClick:e.submitHandler,disabled:!t,style:{width:"30%",padding:"5px",backgroundColor:"#5cb85c",color:"white",outline:"none",border:"none"},children:"Submit"}),e.loading?Object(s.jsx)("div",{className:"SpinnerContainer",children:Object(s.jsx)(w,{})}):null]})})};var oe=function(e){var t=Object(n.useState)([]),c=Object(D.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),o=Object(D.a)(r,2),l=o[0],j=o[1],u=Object(n.useState)(!1),d=Object(D.a)(u,2),h=d[0],O=d[1],p=Object(n.useState)(""),f=Object(D.a)(p,2),x=f[0],v=f[1],k=Object(n.useState)(""),g=Object(D.a)(k,2),w=g[0],N=g[1],S=Object(n.useState)(""),C=Object(D.a)(S,2),T=C[0],L=C[1],A=Object(n.useState)(!1),M=Object(D.a)(A,2),P=M[0],H=M[1],R=Object(n.useState)(""),F=Object(D.a)(R,2),q=(F[0],F[1],Object(n.useState)([])),U=Object(D.a)(q,2),W=U[0],z=U[1],K=Object(n.useState)([]),Z=Object(D.a)(K,2),G=Z[0],Q=Z[1],$=Object(n.useState)(0),ee=Object(D.a)($,2),se=ee[0],ne=ee[1],ae=Object(n.useState)(!1),oe=Object(D.a)(ae,2),le=oe[0],je=oe[1],ue=Object(n.useState)(""),de=Object(D.a)(ue,2),be=(de[0],de[1],Object(n.useState)("")),he=Object(D.a)(be,2),Oe=he[0],pe=he[1],fe=Object(n.useState)(!1),me=Object(D.a)(fe,2),ve=me[0],ke=me[1],ge=Object(n.useState)(!1),ye=Object(D.a)(ge,2),we=ye[0],Ne=ye[1],Se=Object(n.useState)([]),Ce=Object(D.a)(Se,2),Te=Ce[0],Le=Ce[1],_e=Object(n.useState)(!1),Be=Object(D.a)(_e,2),De=Be[0],Ie=Be[1],Ae=Object(n.useState)(""),Ee=Object(D.a)(Ae,2),Me=Ee[0],Pe=Ee[1],He=Object(n.useState)(!1),Re=Object(D.a)(He,2),Fe=(Re[0],Re[1],Object(n.useState)(!1)),qe=Object(D.a)(Fe,2),Je=qe[0],Ue=qe[1];Object(n.useEffect)((function(){function e(){return(e=Object(B.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/task_lists");case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h]),Object(n.useEffect)((function(){function e(){return(e=Object(B.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/task_lists");case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(B.a)(_.a.mark((function e(){var t,c,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/task_lists");case 3:t=e.sent,c=t.data,s=[],c.map((function(e){if(0!==e.share_count){var t={id:e.id,name:e.name};s.push(t)}})),Q(s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h]),Object(n.useEffect)((function(){function e(){return(e=Object(B.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/shared");case 3:t=e.sent,z(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(B.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.request("/users");case 3:t=e.sent,Le(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var Ye=function(){H(!0)};return Object(s.jsx)(b,{children:Je?Object(s.jsx)(xe,{}):Object(s.jsxs)("div",{className:"WorkPlace",children:[Object(s.jsx)(Y,{clickTodo:function(){ne(0)},clickInBox:function(){ne(1)},clickShare:function(){ne(2)},tasklists:a.length,share:G.length,shared:W.length,controller:se,clickedLogo:function(){},taskListItem:a,addTasklist:Ye}),Object(s.jsxs)("div",{className:"ActionArea",children:[Object(s.jsx)(V,{clickedSignOutButton:function(){m.a.set("isLoggedIn",!1),m.a.set("access_token",""),m.a.set("uid",""),m.a.set("client",""),Ue(!0)}}),0===se?Object(s.jsxs)(J,{tasklists:a,children:[Object(s.jsx)(X,{show:P,cancel:function(){O(!1),j(!1),H(!1)},children:Object(s.jsx)(te,{setTaskListName:function(e){v(e.trim())},setTodo1Name:function(e){N(e.trim())},setTodo2Name:function(e){L(e.trim())},submitHandler:function(){O(!0),""===x?(j(!0),O(!1)):y.post("/task_lists",JSON.stringify({name:"".concat(x)})).then((function(e){var t=e.data.id;if(""===w){if(""===T)return O(!1),j(!1),void H(!1);y.post("/task_lists/".concat(t,"/todos"),JSON.stringify({name:"".concat(T)})).then((function(e){O(!1),j(!1),H(!1)})).catch((function(e){console.log(e)}))}else y.post("/task_lists/".concat(t,"/todos"),JSON.stringify({name:"".concat(w)})).then((function(e){if(""===T)return O(!1),j(!1),void H(!1);y.post("/task_lists/".concat(t,"/todos"),JSON.stringify({name:"".concat(T)})).then((function(e){O(!1),j(!1),H(!1)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},loading:h,message:l})}),Object(s.jsx)(X,{show:le,cancel:function(){O(!1),j(!1),je(!1),Ne(!1),Ie(!1),pe(""),ke(!1),Pe("")},children:Object(s.jsx)(re,{setUserEmail:function(e){!0===De&&Ie(!1),Te.map((function(t){t.email===e&&(Ie(!0),pe(t.id))}))},setTasklistName:function(e){var t=e;!0===we&&Ne(!1),a.map((function(e){if(e.name===t)return Ne(!0),void Pe(e.id)}))},submitHandler:function(){O(!0),y.post("/task_lists/".concat(Me,"/share"),{user_id:"".concat(Oe),is_write:"".concat(ve)}).then((function(e){O(!1),je(!1)})).catch((function(e){console.log(e)}))},loading:h,correctTaskList:we,correctEmail:De,setData:function(e){"editor"===e?ke(!0):"watcher"===e&&ke(!1)}})}),Object(s.jsxs)("div",{className:"TaskListOption",children:[Object(s.jsxs)("div",{className:"addIconB",children:[Object(s.jsx)("p",{className:"icon-text-add",children:"Add todos"}),Object(s.jsx)(I.a,{icon:E.g,onClick:Ye})]}),Object(s.jsxs)("div",{className:"shareIconB",children:[Object(s.jsx)("p",{className:"icon-text-share",children:"Share todos"}),Object(s.jsx)(I.a,{icon:E.j,onClick:function(){je(!0)}})]})]})]}):null,1===se?Object(s.jsx)(ce,{tasklists:W}):null,2===se?Object(s.jsx)(ie,{tasklists:G}):null]})]})})},le=m.a.get("isLoggedIn"),je=function(){return!1===le?Object(s.jsx)(xe,{}):Object(s.jsx)("div",{className:"HomePage",children:Object(s.jsx)(oe,{})})},ue=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={email:"",password:"",message:!1,loading:!1,logined:!1},e.setEmail=function(t){e.setState({email:t})},e.setPassword=function(t){e.setState({password:t})},e.loginHandler=function(){e.setState({loading:!0}),y.post("/auth/sign_in",e.state).then((function(t){e.setState({loading:!1});var c=t.headers;m.a.set("isLoggedIn",!0),m.a.set("access_token",c["access-token"]),m.a.set("client",c.client),m.a.set("uid",c.uid),S.push({pathname:"/"})})).catch((function(t){e.setState({loading:!1}),e.setState({message:t.response.data.errors})}))},e.keyPress=function(){e.loginHandler()},e}return Object(l.a)(c,[{key:"render",value:function(){return!0===m.a.get("isLoggedIn")?Object(s.jsx)(je,{}):Object(s.jsxs)(b,{children:[Object(s.jsx)(T.a,{handleKeys:["enter"],onKeyEvent:this.keyPress,children:Object(s.jsx)("div",{className:"main-w3layouts wrapper",children:Object(s.jsx)("div",{className:"main-agileinfo",children:Object(s.jsx)("div",{className:"agileits-top",children:Object(s.jsxs)("div",{className:"LoginForm",children:[Object(s.jsx)("h2",{className:"Title",children:"Sign In"}),this.state.message?this.state.message.map((function(e){return Object(s.jsx)("p",{style:{color:"red",textAlign:"center"},children:e},e)})):"",this.props.isRegistered?Object(s.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:"3px"},children:"You had signed up successfully!"}):"",Object(s.jsx)(h,{className:"text email",label:"Email",type:"email",setData:this.setEmail}),Object(s.jsx)(h,{className:"password",label:"Password",type:"password",setData:this.setPassword}),Object(s.jsxs)("div",{className:"ButtonGroup",children:[Object(s.jsx)(O,{className:"LoginButton",title:"Sign In",clicked:this.loginHandler}),Object(s.jsx)(O,{className:"RegisterButton",title:"Sign Up",clicked:this.props.clickedRegisterButton})]}),this.state.loading?Object(s.jsx)("div",{className:"SpinnerContainer",children:Object(s.jsx)(w,{})}):""]})})})})}),Object(s.jsxs)("ul",{className:"colorlib-bubbles",children:[Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{})]})]})}}]),c}(n.Component),de=c(38),be=(c(110),function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).changeHandler=function(t){var c=t.target.value;e.props.setData(c)},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)(b,{children:Object(s.jsx)("div",{className:"Input",children:Object(s.jsxs)("div",{className:"Block",children:[Object(s.jsx)("label",{children:this.props.label}),this.props.message?Object(s.jsx)("p",{}):Object(s.jsx)("p",{style:{color:"red"},children:"Password does not match"}),Object(s.jsx)("input",{type:this.props.type,onChange:this.changeHandler})]})})})}}]),c}(n.Component)),he=(c(111),function(e){return Object(s.jsx)(b,{children:Object(s.jsx)("button",{className:e.className,onClick:e.clicked,disabled:e.disabled,children:e.title})})}),Oe=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={firstName:"",lastName:"",email:"",password:"",rightPassword:!0,loading:!1,message:!1,done:!1},e.setFirstname=function(t){e.setState({firstName:t})},e.setLastname=function(t){e.setState({lastName:t})},e.setEmail=function(t){e.setState({email:t})},e.setPassword=function(t){e.setState({password:t})},e.checkConfirm=function(t){0!==t.length&&e.setState({rightPassword:t===e.state.password})},e.registerHandler=function(){if(e.setState({loading:!0}),e.state.rightPassword){var t={name:e.state.firstName+e.state.lastName,email:e.state.email,password:e.state.password};y.post("/auth",t).then((function(t){e.setState({loading:!1}),m.a.set("successfulRegister",!0),e.setState({done:!0}),e.props.done(e.state.done)})).catch((function(t){e.setState({loading:!1});var c=t.response.data.errors.full_messages,n=Object.keys(c).map((function(e){return Number(e)})).map((function(e){return Object(de.a)(Array(c[e]))})).reduce((function(e,t){return e.concat(t)})).map((function(e){return Object(s.jsx)("p",{keys:e,style:{color:"red",textAlign:"center",marginTop:"3px"},children:e})}));e.setState({message:n})}))}},e.pressKey=function(){e.registerHandler()},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsxs)(b,{children:[Object(s.jsx)(T.a,{handleKeys:["enter"],onKeyEvent:this.pressKey,children:Object(s.jsx)("div",{className:"main-w3layouts wrapper",children:Object(s.jsx)("div",{className:"main-agileinfo",children:Object(s.jsxs)("div",{className:"agileits-top",children:[Object(s.jsx)("h2",{className:"Title",children:"Sign Up"}),Object(s.jsxs)("div",{className:"RegisterForm",children:[Object(s.jsx)(be,{className:"text email",label:"First Name",type:"text",setData:this.setFirstname,message:!0}),Object(s.jsx)(be,{className:"text email",label:"Last Name",type:"text",setData:this.setLastname,message:!0}),Object(s.jsx)(be,{className:"text email",label:"Email",type:"email",setData:this.setEmail,message:!0}),Object(s.jsx)(be,{className:"text",label:"Password",type:"password",setData:this.setPassword,message:!0}),Object(s.jsx)(be,{className:"text w3lpass",label:"Confirm Password",type:"password",setData:this.checkConfirm,message:this.state.rightPassword}),Object(s.jsxs)("div",{className:"ButtonGroup",children:[Object(s.jsx)(he,{className:"RegisterButton",title:"Sign Up Now",clicked:this.registerHandler}),Object(s.jsxs)("p",{children:["Have an Account?",Object(s.jsx)(he,{className:"LoginButton",clicked:this.props.clickedLoginButton,title:"Login now!"})]})]}),this.state.message,this.state.loading?Object(s.jsx)("div",{className:"SpinnerContainer",children:Object(s.jsx)(w,{})}):""]})]})})})}),Object(s.jsxs)("ul",{className:"colorlib-bubbles",children:[Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{}),Object(s.jsx)("li",{})]})]})}}]),c}(n.Component),pe=function(e){return Object(s.jsx)("div",{className:"Main",children:e.show?Object(s.jsx)(ue,{clickedRegisterButton:e.showRegisterForm,isRegistered:e.registered}):Object(s.jsx)(Oe,{clickedLoginButton:e.showLoginForm,done:e.successfulRegister})})},fe=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={show:!0,successfulRegister:!1},e.showRegisterFormHandler=function(){e.setState({show:!1})},e.showLoginFormHandler=function(){e.setState({show:!0})},e.loginStep=function(t){t&&e.setState({show:!0,successfulRegister:!0})},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(s.jsx)(b,{children:Object(s.jsx)("div",{className:"Welcome",children:Object(s.jsx)(pe,{show:this.state.show,showRegisterForm:this.showRegisterFormHandler,showLoginForm:this.showLoginFormHandler,successfulRegister:this.loginStep,registered:this.state.successfulRegister})})})}}]),c}(n.Component);var xe=function(){return m.a.get("isLoggedIn")?Object(s.jsx)(je,{}):Object(s.jsx)(d,{children:Object(s.jsx)(fe,{})})};var me=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(xe,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(me,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[112,1,2]]]);
//# sourceMappingURL=main.181cd38a.chunk.js.map