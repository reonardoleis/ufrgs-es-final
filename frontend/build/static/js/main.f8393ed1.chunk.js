(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},53:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(26),r=a.n(c),i=(a(31),a(3)),o=a(4),l=a(6),d=a(5),u=(a(32),a(0)),h=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).selectFeature=function(e){s.props.setSelectedFeature(e.target.id)},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)("span",{className:"navbar-brand",children:"Smart Day"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(u.jsxs)("ul",{className:"navbar-nav",children:[Object(u.jsx)("li",{className:"nav-item pointer",children:Object(u.jsx)("a",{className:"nav-link",id:"morning",onClick:this.selectFeature,children:"Smart Morning"})}),Object(u.jsx)("li",{className:"nav-item pointer",children:Object(u.jsx)("a",{className:"nav-link",id:"afternoon",onClick:this.selectFeature,children:"Smart Afternoon"})}),Object(u.jsx)("li",{className:"nav-item pointer",children:Object(u.jsx)("a",{className:"nav-link",id:"night",onClick:this.selectFeature,children:"Smart Night"})})]})})]})})}}]),a}(s.Component),b=a(1),p=a.n(b),j=a(7),m=a(14),f=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,null,[{key:"getRobots",value:function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("http://localhost:3000/afternoon/robot");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"startCleaning",value:function(){var e=Object(j.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.post("http://localhost:3000/afternoon/robot/start",t);case 2:return e.next=4,m.get("http://localhost:3000/afternoon/robot/"+t.robotId);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAirDiffusers",value:function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("http://localhost:3000/afternoon/air-diffuser");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"startDiffusing",value:function(){var e=Object(j.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.post("http://localhost:3000/afternoon/air-diffuser/start",t);case 2:return e.next=4,m.get("http://localhost:3000/afternoon/air-diffuser/"+t.airDiffuserId);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"scheduleDiffusing",value:function(){var e=Object(j.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.post("http://localhost:3000/afternoon/air-diffuser/schedule",t);case 2:return e.next=4,m.get("http://localhost:3000/afternoon/air-diffuser/"+t.airDiffuserId);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),O=f,x=a(9),v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).changeTimestamp=function(e){s.setState({startTimestamp:e.target.value})},s.scheduleCleaning=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("scheduleCleaning called."),e.next=3,O.scheduleCleaning({robotId:s.props.id,startTimestamp:s.state.startTimestamp});case 3:t=e.sent,s.updateData(t);case 5:case"end":return e.stop()}}),e)}))),s.updateData=function(e){console.log("scheduleCleaning.updateData called."),s.props.updateData(e)},s.state={startTimestamp:"07:30"},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"modal",tabindex:"-1",id:"robot_"+this.props.id,children:Object(u.jsx)("div",{className:"modal-dialog",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h5",{className:"modal-title",children:"Agendar Limpeza"}),Object(u.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:this.resetState})]}),Object(u.jsx)("div",{className:"modal-body",children:Object(u.jsxs)("div",{class:"input-group mb-3",children:[Object(u.jsx)("span",{class:"input-group-text",id:"coffee-machine-schedule",children:"Hor\xe1rio"}),Object(u.jsx)("input",{type:"time",class:"form-control","aria-label":"CoffeeMachine Schedule","aria-describedby":"coffee-machine-schedule",value:this.state.startTimestamp,onChange:this.changeTimestamp})]})}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:this.resetState,children:"Fechar"}),Object(u.jsx)("button",{type:"button",className:"btn btn-success","data-bs-dismiss":"modal",onClick:this.scheduleCoffee,children:"Agendar"})]})]})})})}}]),a}(s.Component),g=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).updateData=function(e){s.props.updateData(e)},s.startCleaning=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("startCleaning called."),e.next=3,O.startCleaning({robotId:s.props.id});case 3:t=e.sent,s.updateData(t);case 5:case"end":return e.stop()}}),e)}))),s}return Object(o.a)(a,[{key:"render",value:function(){var e="btn btn-icon btn-outline-primary float-right";return"IDLE"!=this.props.status&&(e+=" invisible"),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"mid-align",children:"Rob\xf4 "+this.props.id}),Object(u.jsx)("td",{className:"mid-align",children:"IDLE"==this.props.status?"Parado":"Limpando"}),Object(u.jsxs)("td",{children:[Object(u.jsx)("button",{type:"button",className:"btn btn-icon btn-outline-info float-right","data-bs-toggle":"modal","data-bs-target":"#robot_"+this.props.id,children:Object(u.jsx)(x.a,{})}),Object(u.jsx)(v,{updateData:this.updateData,id:this.props.id}),Object(u.jsx)("button",{type:"button",className:e,onClick:this.startCleaning,children:Object(u.jsx)(x.d,{})})]})]})}}]),a}(s.Component),N=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).updateData=function(e){var t=Array.from(s.state.robots).filter((function(t){return t.id==e.id}))[0],a=s.state.robots.indexOf(t),n=s.state.robots;n.splice(a,1,e),s.setState({robots:n})},s.state={robots:[]},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getRobots();case 2:t=e.sent,console.log(t),this.setState({robots:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.robots.map((function(t){return Object(u.jsx)(g,{status:t.state,id:String(t.id),schedules:t.schedule,updateData:e.updateData})}));return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h3",{children:"Rob\xf4s de Limpeza"}),Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Nome"}),Object(u.jsx)("th",{scope:"col",children:"Status"}),Object(u.jsx)("th",{scope:"col",className:"col-md-2 text-right",children:"A\xe7\xf5es"})]})}),Object(u.jsx)("tbody",{children:t})]})]})}}]),a}(s.Component),y=N,C=a(14),k=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,null,[{key:"getCourtains",value:function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("http://localhost:3000/morning/courtain");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getCoffeeMachines",value:function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("http://localhost:3000/morning/coffee-machine");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"scheduleCourtain",value:function(){var e=Object(j.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("sending request..."),e.next=3,C.post("http://localhost:3000/morning/courtain/schedule",t);case 3:return console.log("request has responded."),e.abrupt("return");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"prepareCoffee",value:function(){var e=Object(j.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post("http://localhost:3000/morning/coffee-machine/make",t);case 2:return e.next=4,C.get("http://localhost:3000/morning/coffee-machine/"+t.coffeeMachineId);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"scheduleCoffee",value:function(){var e=Object(j.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post("http://localhost:3000/morning/coffee-machine/schedule",t);case 2:return e.next=4,C.get("http://localhost:3000/morning/coffee-machine/"+t.coffeeMachineId);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),D=k,S=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).changeSlot=function(e){s.setState({slot:e.target.value})},s.changeTimestamp=function(e){s.setState({startTimestamp:e.target.value})},s.scheduleCoffee=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("scheduleCoffee called."),e.next=3,D.scheduleCoffee({coffeeMachineId:s.props.id,startTimestamp:s.state.startTimestamp,slot:s.state.slot});case 3:t=e.sent,s.updateData(t);case 5:case"end":return e.stop()}}),e)}))),s.updateData=function(e){console.log("prepareCoffee.updateData called."),s.props.updateData(e)},s.state={startTimestamp:"07:30",slot:1},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({slot:1})}},{key:"render",value:function(){var e=this.props.capsules.map((function(e,t){return Object(u.jsx)("option",{value:t+1,children:e.name})}));return Object(u.jsx)("div",{className:"modal",tabindex:"-1",id:"coffee_schedule_"+this.props.id,children:Object(u.jsx)("div",{className:"modal-dialog",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h5",{className:"modal-title",children:"Agendar Preparo de Caf\xe9"}),Object(u.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:this.resetState})]}),Object(u.jsxs)("div",{className:"modal-body",children:[Object(u.jsxs)("div",{class:"input-group mb-3",children:[Object(u.jsx)("span",{class:"input-group-text",id:"coffee-machine-schedule",children:"Hor\xe1rio"}),Object(u.jsx)("input",{type:"time",class:"form-control","aria-label":"CoffeeMachine Schedule","aria-describedby":"coffee-machine-schedule",value:this.state.startTimestamp,onChange:this.changeTimestamp})]}),Object(u.jsxs)("div",{class:"input-group mb-3",children:[Object(u.jsx)("span",{class:"input-group-text",for:"coffee-machine-speed",children:"C\xe1psula"}),Object(u.jsx)("select",{value:this.state.slot,class:"form-select",id:"coffee-machine-speed",onChange:this.changeSlot,children:e})]})]}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:this.resetState,children:"Fechar"}),Object(u.jsx)("button",{type:"button",className:"btn btn-success","data-bs-dismiss":"modal",onClick:this.scheduleCoffee,children:"Agendar"})]})]})})})}}]),a}(s.Component),w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).changeSlot=function(e){s.setState({slot:e.target.value})},s.prepareCoffee=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("prepareCoffee called."),e.next=3,D.prepareCoffee({coffeeMachineId:s.props.id,slot:s.state.slot});case 3:t=e.sent,s.updateData(t);case 5:case"end":return e.stop()}}),e)}))),s.updateData=function(e){console.log("prepareCoffee.updateData called."),s.props.updateData(e)},s.state={slot:1},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({slot:1})}},{key:"render",value:function(){var e=this.props.capsules.map((function(e,t){return Object(u.jsx)("option",{value:t+1,children:e.name})}));return Object(u.jsx)("div",{className:"modal",tabindex:"-1",id:"coffee_machine_"+this.props.id,children:Object(u.jsx)("div",{className:"modal-dialog",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h5",{className:"modal-title",children:"Preparar Caf\xe9"}),Object(u.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:this.resetState})]}),Object(u.jsx)("div",{className:"modal-body",children:Object(u.jsxs)("div",{class:"input-group mb-3",children:[Object(u.jsx)("span",{class:"input-group-text",for:"courtain-speed",children:"C\xe1psula"}),Object(u.jsx)("select",{value:this.state.slot,class:"form-select",id:"courtain-speed",onChange:this.changeSlot,children:e})]})}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:this.resetState,children:"Fechar"}),Object(u.jsx)("button",{type:"button",className:"btn btn-success","data-bs-dismiss":"modal",onClick:this.prepareCoffee,children:"Preparar"})]})]})})})}}]),a}(s.Component),T=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).updateData=function(e){s.props.updateData(e)},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"mid-align",children:this.props.name}),Object(u.jsx)("td",{className:"mid-align",children:this.props.capsules.map((function(e){return e.name})).join(", ")}),Object(u.jsx)("td",{className:"mid-align",children:null!=this.props.currentCapsule?this.props.currentCapsule[0].name:"Nenhuma"}),Object(u.jsxs)("td",{children:[Object(u.jsx)("button",{type:"button",className:"btn btn-icon btn-outline-primary float-right","data-bs-toggle":"modal","data-bs-target":"#coffee_machine_"+this.props.id,children:Object(u.jsx)(x.b,{})}),Object(u.jsx)(w,{capsules:this.props.capsules,id:this.props.id,updateData:this.updateData}),Object(u.jsx)("button",{type:"button",className:"btn btn-icon btn-outline-info float-right","data-bs-toggle":"modal","data-bs-target":"#coffee_schedule_"+this.props.id,children:Object(u.jsx)(x.a,{})}),Object(u.jsx)(S,{capsules:this.props.capsules,id:this.props.id,updateData:this.updateData})]})]})}}]),a}(s.Component),M=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).updateData=function(e){console.log("Called update data on ",e);var t=Array.from(s.state.coffeeMachines).filter((function(t){return t.id==e.id}))[0],a=s.state.coffeeMachines.indexOf(t);console.log("the index of item ",t," on array ",s.state.coffeeMachines," is ",a);var n=s.state.coffeeMachines;n.splice(a,1,e),s.setState({coffeeMachines:n})},s.state={coffeeMachines:[]},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getCoffeeMachines();case 2:t=e.sent,this.setState({coffeeMachines:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.coffeeMachines.map((function(t){return Object(u.jsx)(T,{name:t.name,capsules:t.capsules,currentCapsule:t.currentCapsule,id:String(t.id),schedule:t.schedule.scheduleItems,updateData:e.updateData})}));return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h3",{children:"M\xe1quinas de Caf\xe9"}),Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Nome"}),Object(u.jsx)("th",{scope:"col",children:"C\xe1psulas"}),Object(u.jsx)("th",{scope:"col",children:"C\xe1psula Selecionada"}),Object(u.jsx)("th",{scope:"col",className:"col-md-2 text-right",children:"A\xe7\xf5es"})]})}),Object(u.jsx)("tbody",{children:t})]})]})}}]),a}(s.Component),_=M,A=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).changeTimestamp=function(e){s.setState({startTimestamp:e.target.value})},s.changeStatus=function(e){s.setState({status:e.target.value})},s.changeSpeed=function(e){s.setState({speed:e.target.value})},s.resetState=function(){s.setState({startTimestamp:"07:00",status:s.props.status,speed:s.props.speed})},s.scheduleCourtain=function(){D.scheduleCourtain({id:parseInt(s.props.id),startTimestamp:s.state.startTimestamp,state:s.state.status,speed:s.props.speed})},s.state={startTimestamp:"07:00",speed:"SLOW"},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({startTimestamp:"07:00",status:this.props.status,speed:this.props.speed})}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"modal",tabindex:"-1",id:"courtain_schedule_"+this.props.id,children:Object(u.jsx)("div",{className:"modal-dialog",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h5",{className:"modal-title",children:"Agendar Abertura de Cortina"}),Object(u.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:this.resetState})]}),Object(u.jsxs)("div",{className:"modal-body",children:[Object(u.jsxs)("div",{class:"input-group mb-3",children:[Object(u.jsx)("span",{class:"input-group-text",id:"courtain-name",children:"Nome"}),Object(u.jsx)("input",{type:"text",class:"form-control","aria-label":"Courtain Name","aria-describedby":"courtain-name",value:this.props.name,disabled:!0})]}),Object(u.jsxs)("div",{class:"input-group mb-3",children:[Object(u.jsx)("label",{class:"input-group-text",for:"courtain-status",children:"Status"}),Object(u.jsxs)("select",{value:this.state.status,class:"form-select",id:"courtain-status",onChange:this.changeStatus,children:[Object(u.jsx)("option",{value:"OPENED",children:"Abrir"}),Object(u.jsx)("option",{value:"CLOSED",children:"Fechar"})]})]}),Object(u.jsxs)("div",{class:"input-group mb-3",children:[Object(u.jsx)("span",{class:"input-group-text",for:"courtain-speed",children:"Velocidade"}),Object(u.jsxs)("select",{value:this.state.speed,class:"form-select",id:"courtain-speed",onChange:this.changeSpeed,children:[Object(u.jsx)("option",{value:"SLOW",children:"Lenta"}),Object(u.jsx)("option",{value:"MEDIUM",children:"M\xe9dia"}),Object(u.jsx)("option",{value:"FAST",children:"R\xe1pida"})]})]}),Object(u.jsxs)("div",{class:"input-group mb-3",children:[Object(u.jsx)("span",{class:"input-group-text",id:"courtain-schedule",children:"Hor\xe1rio"}),Object(u.jsx)("input",{type:"time",class:"form-control","aria-label":"Courtain Schedule","aria-describedby":"courtain-schedule",value:this.state.startTimestamp,onChange:this.changeTimestamp})]})]}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:this.resetState,children:"Fechar"}),Object(u.jsx)("button",{type:"button",className:"btn btn-success",onClick:this.scheduleCourtain,children:"Agendar"})]})]})})})}}]),a}(s.Component),F=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.schedules.map((function(e){e.startTimestamp,e.state,e.speed}));return Object(u.jsx)("div",{className:"modal",tabindex:"-1",id:"courtain_view_"+this.props.id,children:Object(u.jsx)("div",{className:"modal-dialog",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsxs)("h5",{className:"modal-title",children:["Agendados em ",this.props.name]}),Object(u.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:this.resetState})]}),Object(u.jsx)("div",{className:"modal-body",children:Object(u.jsxs)("table",{class:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Hor\xe1rio"}),Object(u.jsx)("th",{scope:"col",children:"A\xe7\xe3o"}),Object(u.jsx)("th",{scope:"col",children:"Velocidade"})]})}),Object(u.jsx)("tbody",{children:e})]})}),Object(u.jsx)("div",{className:"modal-footer",children:Object(u.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:this.resetState,children:"Fechar"})})]})})})}}]),a}(s.Component),E=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"mid-align",children:this.props.name}),Object(u.jsx)("td",{className:"mid-align",children:"OPENED"==this.props.status?"Aberta":"Fechada"}),Object(u.jsxs)("td",{children:[Object(u.jsx)("button",{type:"button",className:"btn btn-icon btn-outline-secondary float-right","data-bs-toggle":"modal","data-bs-target":"#courtain_view_"+this.props.id,children:Object(u.jsx)(x.c,{})}),Object(u.jsx)(F,{name:this.props.name,schedules:this.props.schedules,id:this.props.id}),Object(u.jsx)("button",{type:"button",className:"btn btn-icon btn-outline-info float-right","data-bs-toggle":"modal","data-bs-target":"#courtain_schedule_"+this.props.id,children:Object(u.jsx)(x.a,{})}),Object(u.jsx)(A,{name:this.props.name,status:this.props.status,speed:this.props.speed,id:this.props.id})]})]})}}]),a}(s.Component),I=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={courtains:[]},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getCourtains();case 2:t=e.sent,this.setState({courtains:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.courtains.map((function(e){return Object(u.jsx)(E,{name:e.name,status:e.state,id:String(e.id),schedules:e.schedule})}));return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h3",{children:"Cortinas"}),Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Nome"}),Object(u.jsx)("th",{scope:"col",children:"Status"}),Object(u.jsx)("th",{scope:"col",className:"col-md-2 text-right",children:"A\xe7\xf5es"})]})}),Object(u.jsx)("tbody",{children:e})]})]})}}]),a}(s.Component),L=I,P=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).changeSlot=function(e){s.setState({slot:e.target.value})},s.diffuseEssence=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("diffuseEssence called."),e.next=3,O.startDiffusing({airDiffuserId:s.props.id,slot:s.state.slot});case 3:t=e.sent,s.updateData(t);case 5:case"end":return e.stop()}}),e)}))),s.updateData=function(e){console.log("diffuseEssence.updateData called."),s.props.updateData(e)},s.state={slot:1},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({slot:1})}},{key:"render",value:function(){var e=this.props.essences.map((function(e,t){return Object(u.jsx)("option",{value:t+1,children:e.name})}));return Object(u.jsx)("div",{className:"modal",tabindex:"-1",id:"air_diffuser_"+this.props.id,children:Object(u.jsx)("div",{className:"modal-dialog",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h5",{className:"modal-title",children:"Realizar Difus\xe3o"}),Object(u.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:this.resetState})]}),Object(u.jsx)("div",{className:"modal-body",children:Object(u.jsxs)("div",{class:"input-group mb-3",children:[Object(u.jsx)("span",{class:"input-group-text",for:"courtain-speed",children:"Ess\xeancia"}),Object(u.jsx)("select",{value:this.state.slot,class:"form-select",id:"courtain-speed",onChange:this.changeSlot,children:e})]})}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:this.resetState,children:"Fechar"}),Object(u.jsx)("button",{type:"button",className:"btn btn-success","data-bs-dismiss":"modal",onClick:this.diffuseEssence,children:"Confirmar"})]})]})})})}}]),a}(s.Component),R=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).changeSlot=function(e){s.setState({slot:e.target.value})},s.changeTimestamp=function(e){s.setState({startTimestamp:e.target.value})},s.diffuseEssence=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("diffuseEssence called."),e.next=3,O.scheduleDiffusing({airDiffuserId:s.props.id,slot:s.state.slot,startTimestamp:s.state.startTimestamp});case 3:t=e.sent,s.updateData(t);case 5:case"end":return e.stop()}}),e)}))),s.updateData=function(e){console.log("diffuseEssence.updateData called."),s.props.updateData(e)},s.state={startTimestamp:"17:00",slot:1},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({startTimestamp:"17:00",slot:1})}},{key:"render",value:function(){var e=this.props.essences.map((function(e,t){return Object(u.jsx)("option",{value:t+1,children:e.name})}));return Object(u.jsx)("div",{className:"modal",tabindex:"-1",id:"air_diffuser_schedule_"+this.props.id,children:Object(u.jsx)("div",{className:"modal-dialog",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h5",{className:"modal-title",children:"Agendar Difus\xe3o"}),Object(u.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:this.resetState})]}),Object(u.jsxs)("div",{className:"modal-body",children:[Object(u.jsxs)("div",{class:"input-group mb-3",children:[Object(u.jsx)("span",{class:"input-group-text",id:"air-diffuser-schedule",children:"Hor\xe1rio"}),Object(u.jsx)("input",{type:"time",class:"form-control","aria-label":"CoffeeMachine Schedule","aria-describedby":"air-diffuser-schedule",value:this.state.startTimestamp,onChange:this.changeTimestamp})]}),Object(u.jsxs)("div",{class:"input-group mb-3",children:[Object(u.jsx)("span",{class:"input-group-text",for:"air-diffuser-speed",children:"Ess\xeancia"}),Object(u.jsx)("select",{value:this.state.slot,class:"form-select",id:"air-diffuser-speed",onChange:this.changeSlot,children:e})]})]}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:this.resetState,children:"Fechar"}),Object(u.jsx)("button",{type:"button",className:"btn btn-success","data-bs-dismiss":"modal",onClick:this.diffuseEssence,children:"Agendar"})]})]})})})}}]),a}(s.Component),H=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).updateData=function(e){s.props.updateData(e)},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"mid-align",children:this.props.name}),Object(u.jsx)("td",{className:"mid-align",children:this.props.essences.map((function(e){return e.name})).join(", ")}),Object(u.jsx)("td",{className:"mid-align",children:null==this.props.currentDiffusion?"Nenhuma":this.props.currentDiffusion[0].name}),Object(u.jsxs)("td",{children:[Object(u.jsx)("button",{type:"button",className:"btn btn-icon btn-outline-info float-right","data-bs-toggle":"modal","data-bs-target":"#air_diffuser_schedule_"+this.props.id,children:Object(u.jsx)(x.a,{})}),Object(u.jsx)(R,{essences:this.props.essences,id:this.props.id,updateData:this.updateData}),Object(u.jsx)("button",{type:"button",className:"btn btn-icon btn-outline-primary float-right","data-bs-toggle":"modal","data-bs-target":"#air_diffuser_"+this.props.id,children:Object(u.jsx)(x.e,{})}),Object(u.jsx)(P,{essences:this.props.essences,id:this.props.id,updateData:this.updateData})]})]})}}]),a}(s.Component),z=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).updateData=function(e){var t=Array.from(s.state.airDiffusers).filter((function(t){return t.id==e.id}))[0],a=s.state.airDiffusers.indexOf(t),n=s.state.airDiffusers;n.splice(a,1,e),s.setState({airDiffusers:n})},s.state={airDiffusers:[]},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getAirDiffusers();case 2:t=e.sent,this.setState({airDiffusers:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.airDiffusers.map((function(t){return Object(u.jsx)(H,{name:t.name,essences:t.essences,id:String(t.id),currentDiffusion:t.currentDiffusion,updateData:e.updateData})}));return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h3",{children:"Rob\xf4s de Limpeza"}),Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Nome"}),Object(u.jsx)("th",{scope:"col",children:"Ess\xeancias"}),Object(u.jsx)("th",{scope:"col",children:"Ess\xeancia Selecionada"}),Object(u.jsx)("th",{scope:"col",className:"col-md-2 text-right",children:"A\xe7\xf5es"})]})}),Object(u.jsx)("tbody",{children:t})]})]})}}]),a}(s.Component),q=z,B=(a(53),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e=null,t=null;switch(this.props.feature){case"morning":e=Object(u.jsx)(L,{}),t=Object(u.jsx)(_,{});break;case"afternoon":e=Object(u.jsx)(y,{}),t=Object(u.jsx)(q,{});break;case"night":e=Object(u.jsx)("h1",{children:"TODO"}),t=Object(u.jsx)("h1",{children:"TODO"})}return Object(u.jsxs)("div",{children:[e,t]})}}]),a}(s.Component)),J=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).setSelectedFeature=function(e){s.setState({selectedFeature:e})},s.state={selectedFeature:"morning"},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"App",children:[Object(u.jsx)(h,{setSelectedFeature:this.setSelectedFeature}),Object(u.jsx)("div",{className:"container top-padded",children:Object(u.jsx)(B,{feature:this.state.selectedFeature})})]})}}]),a}(s.Component),V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,80)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};a(54),a(55);r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root")),V()}},[[77,1,2]]]);
//# sourceMappingURL=main.f8393ed1.chunk.js.map