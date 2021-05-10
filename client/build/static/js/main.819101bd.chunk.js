(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{112:function(e,t,a){e.exports=a(152)},137:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(36),r=a.n(c),o=a(14),i=a(8),s=a(43),m=a(44),u=a(55),d=a(52),E=a(16),p=a.n(E),v=a(135),h={saveEvent:function(e){return p.a.post("/api/event",e)},getEvent:function(e){return p.a.get("/api/event/"+e)},getEvents:function(){return p.a.get("/api/event/")},saveCheckin:function(e,t){return p.a.put("/api/event/"+e,t)},searchCheckinEvent:function(e){return p.a.get("/api/event/name/"+e.name+"/city/"+e.city)},saveBookmark:function(e){var t=e.map((function(e){return v.Types.ObjectId(e)}));return p.a.post("/api/Bookmark/",{events:t[0],name:t[1]})},updateBookmark:function(e){return p.a.put("/api/Bookmark/",{events:e[0],name:e[1]})},getBookmark:function(e){return p.a.post("/api/Bookmark/user",e)},getBookmarksForUser:function(e){return p.a.post("/api/Bookmark/all/user",e)},removeBookmark:function(e,t){return p.a.delete("/api/Bookmark/"+e+"/"+t)},login:function(e){return p.a.post("/api/user/login",e)},signup:function(e){return p.a.post("/api/user/signup",e)},getLocationList:function(e){return p.a.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyAASHUvtgIzAHEr6NyyZA9J4X0zo0GKYc4&libraries=places")},deleteEvent:function(e){return p.a.delete("/api/event/"+e)}},g=a(83),f=a.n(g),b=a(100),N=a(12),k=(a(137),a(101)),y=a.n(k);var w=function(e){return l.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)};var C=function(e){return l.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)};var S=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return l.a.createElement("div",{className:t},e.children)};a(58);function O(e){var t=l.a.useState(""),a=Object(N.a)(t,2),n=a[0],c=a[1],r=l.a.useState(""),i=Object(N.a)(r,2),s=i[0],m=i[1],u=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var d=function(e){e.preventDefault(),h.getEvents().then((function(e){console.log(e.data),m(e.data)})).catch((function(e){return console.log(e)})),console.log("handleFormSubmit",n)};return l.a.createElement("div",null,l.a.createElement(w,null,l.a.createElement(C,null,l.a.createElement(S,{size:"12"},l.a.createElement("div",{className:"home-feature"},l.a.createElement(y.a,{value:n,onChange:c,onSelect:u,handleFormSubmit:d},(function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,c=e.loading;return l.a.createElement("div",null,l.a.createElement("input",Object.assign({className:"form-input"},t({placeholder:"Search A Location!"}))),l.a.createElement("div",{className:"autocomplete-dropdown-container"},c?l.a.createElement("div",null,"...loading"):null,a.map((function(e){var t={backgroundColor:e.active?"#D5AACD":"#ECE1EA"};return l.a.createElement("div",n(e,{style:t}),e.description)}))))})),l.a.createElement("button",{className:"button",type:"submit",style:{margin:"0"},onClick:d},"Search"))))),l.a.createElement("div",{className:"results-box"},l.a.createElement(C,null,l.a.createElement(S,{size:"12"},s?s.filter((function(e){return n.includes(e.city)})).map((function(e){return l.a.createElement(o.b,{to:"/event/"+e._id,specific:e},l.a.createElement("div",{className:"eventCard"},l.a.createElement("p",{style:{fontSize:"30px",textDecoration:"underline"}},e.name),l.a.createElement("p",null,e.description),l.a.createElement("p",null,"Where: ",e.city),l.a.createElement("p",null,"When: ",new Date(e.date).toDateString()),l.a.createElement("hr",null)))})):l.a.createElement("p",{style:{fontSize:"30px",color:"white"}},"What's The Move?")))))}a(62);var j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={search:"",results:[],description:[]},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),h.getDescriptionOfLocation(e.state.search)},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.getLocationList().then((function(t){return e.setState({description:t.data.message})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"homepage"},l.a.createElement("div",{className:"home-container"},l.a.createElement("div",{className:"home-feature"},l.a.createElement(o.b,{to:"/create"},l.a.createElement("button",{className:"button"},"Create Event"))),l.a.createElement("div",{className:"home-feature"},l.a.createElement(o.b,{className:"checkinLink",to:"/searchCheck-in"},l.a.createElement("button",{className:"button"},"Check-In to Event"))),l.a.createElement("div",{className:"home-feature"},l.a.createElement(O,null))))}}]),a}(n.Component);a(146);var x=function(e){function t(){window.location.reload()}return l.a.createElement("nav",{className:"navbar "},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Home"),l.a.createElement("a",{className:"navbar-brand",href:"/Event"},"Events"),l.a.createElement("a",{className:"navbar-brand",href:"/Bookmark"},"Bookmark"),localStorage.getItem("user")?l.a.createElement("a",{className:"navbar-brand",href:"/",onClick:function(){localStorage.clear().then(t)}},"Logout"):l.a.createElement("a",{className:"navbar-brand",href:"/"},"Login/Signup"),l.a.createElement("div",{className:"locationField"}))};a(147);var I=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"footer-box"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-6"},l.a.createElement("h6",null,"About"),l.a.createElement("p",{className:"text-justify"},l.a.createElement("i",null," Whats The Move? "),"Don't know what to do? Want to meet new friends? ",l.a.createElement("i",null,"The Move")," is here for you! This is an easy to use site where you can search and create events in your city and post live-real-time comments and photos for the event.")),l.a.createElement("div",{className:"footer-section col-xs-6 col-md-3"},l.a.createElement("ul",{className:"footer-links"},l.a.createElement("h6",null,"Contributors"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/cmorris91"},"Chelsey Morris")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/ginavargas1"},"Gina Vargas")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/AFF321"},"Andres Fajardo")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/jbeans12"},"Jennifer Vereecken")))),l.a.createElement("div",{className:"footer-section col-xs-6 col-md-3"},l.a.createElement("ul",{class:"footer-links"},l.a.createElement("h6",null,"Quick Links"),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"/Event"},"Events")),l.a.createElement("li",null,l.a.createElement("a",{href:"/Bookmark"},"Bookmarked Events")),l.a.createElement("li",null,l.a.createElement("a",{href:"/Login"},"Log-In")),l.a.createElement("li",null,l.a.createElement("a",{href:"/Login"},"Sign-up")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("p",{className:"copyright-text"},"Copyright \xa9 2020 All Rights Reserved by",l.a.createElement("a",{href:"https://github.com/cmorris91/the-move"},"The Move"),"."))))))},D=a(15);var B=function(e){return l.a.createElement("div",{className:"rating-container"},l.a.createElement("h1",{className:"input-title"},"Rate the Event "),l.a.createElement("input",{type:"number",className:"form-input",onChange:e.handleInputChange,id:"rating",value:e.value,name:e.name,min:"0",max:"5",style:{textAlign:"center"}}))},A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).showWidget=function(){window.cloudinary.createUploadWidget({cloudName:"dy1duzvrr",uploadPreset:"the-move",cropping:!0},(function(e,t){!e&&t&&"success"===t.event&&n.props.updateImageState(t.info.url)})).open()},n.state={},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"photo-input"},l.a.createElement("h1",{className:"input-title"},"Add Photos of your experience!"),l.a.createElement("button",{className:"button",onClick:this.showWidget},"Upload Photos"))}}]),a}(l.a.Component);var M=function(){var e=Object(n.useState)({comments:[],images:[],rating:0}),t=Object(N.a)(e,2),a=t[0],c=t[1],r=Object(i.g)().id;function o(e){var t=e.target,n=t.name,l=t.value;c(Object(D.a)(Object(D.a)({},a),{},{[n]:l}))}return Object(n.useEffect)((function(){h.getEvent(r).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",{className:"check-in-container"},l.a.createElement("h2",{className:"page-title"},"Let people know what you think of the event here!"),l.a.createElement("div",{className:"comment-input"},l.a.createElement("input",{className:"form-input",onChange:o,name:"comments",placeholder:"enter comments here"})),l.a.createElement("div",{className:"comment-input"},l.a.createElement(B,{handleInputChange:o,name:"rating",value:a.rating})),l.a.createElement("div",{className:"comment-input"},l.a.createElement(A,{updateImageState:function(e){c(Object(D.a)(Object(D.a)({},a),{},{images:e}))}})),l.a.createElement("div",null,l.a.createElement("button",{className:"button",onClick:function(e){e.preventDefault(),console.log(a),h.saveCheckin(r,{feedback:a.comments,images:a.images,rating:a.rating}).then((function(e){alert("Thanks for checking in!"),window.location.replace("/event/"+r)})).catch((function(e){return console.log(e)}))},type:"submit"}," Check In!")))};var _=function(){var e=Object(n.useState)({name:"",host_name:"",category:"",description:"",date:"",address:"",city:"",state:"",zipcode:"",user:0}),t=Object(N.a)(e,2),a=t[0],c=t[1],r=localStorage.getItem("user").split("/")[1];function o(e){var t=e.target,n=t.name,l=t.value;c(Object(D.a)(Object(D.a)({},a),{},{[n]:l}))}return l.a.createElement("div",{className:"create"},l.a.createElement("div",null,l.a.createElement("h1",{className:"page-title",id:"event-title"},"Create Your Event"),l.a.createElement("p",{style:{textAlign:"center",color:"white"}},"*Please fill out all fields")),l.a.createElement("section",{className:"event-form"},l.a.createElement("form",{className:"row g-3",id:"create-form"},l.a.createElement("div",{className:"col-md-12  inputs",id:"eventDate"},l.a.createElement("label",{for:"eventDate",style:{marginRight:"10px",padding:"10px",color:"rgb(146 143 143)",fontSize:"22px"}},"Event Date"),l.a.createElement("input",{type:"date",id:"eventDate",name:"date",className:"drop-down",onChange:o})),l.a.createElement("div",{className:"col-md-10 inputs"},l.a.createElement("input",{type:"text",className:"form-input",id:"inputEventName",placeholder:"Event Name",name:"name",onChange:o})),l.a.createElement("div",{className:"col-md-10 inputs"},l.a.createElement("input",{type:"text",className:"form-input",id:"inputHostName",placeholder:"Host Name",name:"host_name",onChange:o})),l.a.createElement("div",{className:"col-md-10 inputs"},l.a.createElement("select",{id:"inputEventType",className:"form-select drop-down",style:{width:"100%"},name:"category",onChange:o},l.a.createElement("option",null,"Type of Event"),l.a.createElement("option",{value:"sports"},"Sports"),l.a.createElement("option",{value:"Arts&Crafts"},"Arts & Cratfs"),l.a.createElement("option",{value:"Music"},"Music"),l.a.createElement("option",{value:"Dinig"},"Dining"),l.a.createElement("option",{value:"Recreaction"},"Recreation"),l.a.createElement("option",{value:"Social"},"Social"),l.a.createElement("option",{value:"Business"},"Business"))),l.a.createElement("div",{className:"form-floating col-md-10 inputs"},l.a.createElement("textarea",{className:"form-input",placeholder:"Tell Us About Your Event!",id:"eventDescription",style:{height:"100px"},name:"description",onChange:o})),l.a.createElement("div",{className:"col-md-10 inputs"},l.a.createElement("input",{type:"text",className:"form-input",id:"inputStreetAddress",placeholder:"Enter Street Address",name:"address",onChange:o})),l.a.createElement("div",{className:"col-md-10 inputs"},l.a.createElement("input",{type:"text",className:"form-input",id:"inputCity",placeholder:"City",name:"city",onChange:o})),l.a.createElement("div",{className:"col-md-10 inputs"},l.a.createElement("select",{id:"inputState",className:"form-select drop-down",placeholder:"State",style:{width:"100%"},name:"state",onChange:o},l.a.createElement("option",null,"State"),l.a.createElement("option",{value:"Alabama"},"Alabama"),l.a.createElement("option",{value:"Alaska"},"Alaska"),l.a.createElement("option",{value:"Arizona"},"Arizona"),l.a.createElement("option",{value:"Arkansas"},"Arkansas"),l.a.createElement("option",{value:"California"},"California"),l.a.createElement("option",{value:"Colorado"},"Colorado"),l.a.createElement("option",{value:"Connecticut"},"Connecticut"),l.a.createElement("option",{value:"Delaware"},"Delaware"),l.a.createElement("option",{value:"Florida"},"Florida"),l.a.createElement("option",{value:"Georgia"},"Georgia"),l.a.createElement("option",{value:"Hawaii"},"Hawaii"),l.a.createElement("option",{value:"Idaho"},"Idaho"),l.a.createElement("option",{value:"Illinois"},"Illinios"),l.a.createElement("option",{value:"Indiana"},"Indiana"),l.a.createElement("option",{value:"Iowa"},"Iowa"),l.a.createElement("option",{value:"Kansas"},"Kansas"),l.a.createElement("option",{value:"Kentucky"},"Kentucky"),l.a.createElement("option",{value:"Lousiana"},"Louisiana"),l.a.createElement("option",{value:"Maine"},"Maine"),l.a.createElement("option",{value:"Maryland"},"Maryland"),l.a.createElement("option",{value:"Massachusetts"},"Massachusetts"),l.a.createElement("option",{value:"Michigan"},"Michigan"),l.a.createElement("option",{value:"Minnesota"},"Minnesota"),l.a.createElement("option",{value:"Mississippi"},"Mississippi"),l.a.createElement("option",{value:"Missouri"},"Missouri"),l.a.createElement("option",{value:"Montana"},"Montana"),l.a.createElement("option",{value:"Nebraska"},"Nebraska"),l.a.createElement("option",{value:"Nevada"},"Nevada"),l.a.createElement("option",{value:"NewHampshire"},"New Hampshire"),l.a.createElement("option",{value:"NewJersey"},"New Jersey"),l.a.createElement("option",{value:"NewMexico"},"New Mexico"),l.a.createElement("option",{value:"NewYork"},"New York"),l.a.createElement("option",{value:"NorthCarolina"},"North Carolina"),l.a.createElement("option",{value:"NorthDakota"},"North Dakota"),l.a.createElement("option",{value:"Ohio"},"Ohio"),l.a.createElement("option",{value:"Oklahoma"},"Oklahoma"),l.a.createElement("option",{value:"Oregon"},"Oregon"),l.a.createElement("option",{value:"Pennsylvania"},"Pennsylvania"),l.a.createElement("option",{value:"RhodeIsland"},"Rhode Island"),l.a.createElement("option",{value:"SouthCarolina"},"South Carolina"),l.a.createElement("option",{value:"SouthDakota"},"South Dakota"),l.a.createElement("option",{value:"Tennesee"},"Tennesee"),l.a.createElement("option",{value:"Texas"},"Texas"),l.a.createElement("option",{value:"Utah"},"Utah"),l.a.createElement("option",{value:"Vermont"},"Vermont"),l.a.createElement("option",{value:"Virginia"},"Virginia"),l.a.createElement("option",{value:"Washington"},"Washington"),l.a.createElement("option",{value:"WestVirginia"},"West Virginia"),l.a.createElement("option",{value:"Wisconsin"},"Wisconsin"),l.a.createElement("option",{value:"Wyoming"},"Wyoming"))),l.a.createElement("div",{className:"col-md-10 inputs"},l.a.createElement("input",{type:"text",className:"form-input",id:"inputZip",placeholder:"Zip Code",name:"zipcode",onChange:o})),l.a.createElement("div",{class:"col-10",id:"create-submit-btn"},l.a.createElement("button",{type:"submit",class:"button btn-primary",onClick:function(e){e.preventDefault(),h.saveEvent({name:a.name,host_name:a.host_name,category:a.category,description:a.description,date:a.date,address:a.address,city:a.city,state:a.state,zipcode:a.zipcode,user_id:r}).then((function(e){alert("Your Event Has Been Created"),window.location.replace("/event"),console.log(e)})).catch((function(e){return console.log(e)}))}},"Submit")))))},W=a(166),z=a(170),L=a(168),H=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={search:"",eventResults:[],bookmark:[]},n.handleInputChange=function(e){n.setState({search:e.target.value})},n.handleRouter=function(e){n.props.history.push("/event/".concat(e))},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.getEvents().then((function(t){console.log(t),e.setState({eventResults:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",{className:"page-title"},"What's the Move?"),l.a.createElement(W.a,null,l.a.createElement(z.a,null,l.a.createElement(L.a,{fixed:!0},l.a.createElement(L.a.Header,null,l.a.createElement(L.a.Row,null,l.a.createElement(L.a.HeaderCell,null,"Date"),l.a.createElement(L.a.HeaderCell,null,"Event Name"),l.a.createElement(L.a.HeaderCell,null,"City"),l.a.createElement(L.a.HeaderCell,null,"Description"))),l.a.createElement(L.a.Body,null,this.state.eventResults.map((function(t){return l.a.createElement(L.a.Row,{className:"table-row",key:t._id,onClick:function(){return e.handleRouter(t._id)}},l.a.createElement(L.a.Cell,null,new Date(t.date).toDateString()),l.a.createElement(L.a.Cell,null,t.name),l.a.createElement(L.a.Cell,null,t.city),l.a.createElement(L.a.Cell,{textAlign:"left"},t.description))})))))))}}]),a}(n.Component),R=Object(i.h)(H);function T(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-input"},e)))}function F(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"button"}),e.name)}function P(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function U(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}var V=function(e){var t=Object(n.useState)({name:"",email:"",password:""}),a=Object(N.a)(t,2),c=a[0],r=a[1];function o(){window.location.reload()}function i(e){var t=e.target,a=t.name,n=t.value;r(Object(D.a)(Object(D.a)({},c),{},{[a]:n})),console.log(c.password)}function s(e){e.preventDefault();var t=e.target.name;"login"===t?h.login({name:c.name,email:c.email,password:c.password}).then((function(e){return localStorage.setItem("user",e.data.dbModel[0].name+"/"+e.data.dbModel[0]._id)})).then(alert("login successful")).then(o).catch((function(e){return console.log(e)})):"signup"===t&&h.signup({name:c.name,email:c.email,password:c.password}).then((function(e){return localStorage.setItem("user",e.data.dbModel.name+"/"+e.data.dbModel._id)})).then(alert("signup successful")).then(o).catch((function(e){return alert("signup failed error")}))}return l.a.createElement("div",null,l.a.createElement(P,null,l.a.createElement("div",{class:"login-card"},l.a.createElement("h2",{class:"page-title"},"Login"),l.a.createElement("form",null,l.a.createElement(T,{onChange:i,name:"email",placeholder:"Email (required)"}),l.a.createElement(T,{onChange:i,name:"password",placeholder:"Password (required)"}),l.a.createElement(F,{name:"login",placeholder:"Login",disabled:!(c.password&&c.email),onClick:s}))),l.a.createElement("div",{class:"Signup-card"},l.a.createElement("h2",{class:"page-title"},"Signup"),l.a.createElement("form",null,l.a.createElement(T,{onChange:i,name:"email",placeholder:"Email (required)"}),l.a.createElement(T,{onChange:i,name:"name",placeholder:"Username (required)"}),l.a.createElement(T,{onChange:i,name:"password",placeholder:"Password (required)"}),l.a.createElement(F,{name:"signup",placeholder:"Signup",disabled:!(c.password&&c.email&&c.name),onClick:s})))))};var J=function(e){return l.a.createElement("div",{className:"event-results"},l.a.createElement(o.b,{to:"/check-in/".concat(e.id)},l.a.createElement("h2",null," ",e.event_name),l.a.createElement("p",null,"Hosted By: ",e.event_host),l.a.createElement("p",null," When: ",e.event_date)))};a(148);var Y=function(){var e=Object(n.useState)({name:"",city:"",results:[]}),t=Object(N.a)(e,2),a=t[0],c=t[1];function r(e){var t=e.target,n=t.name,l=t.value;c(Object(D.a)(Object(D.a)({},a),{},{[n]:l}))}return l.a.createElement("div",{className:"checkin-container"},l.a.createElement("div",{className:"checkin-search-title"},l.a.createElement("h1",{className:"page-title"},"Which Event would you like to check in to?")),l.a.createElement("form",{className:"searchCheckinForm"},l.a.createElement("div",{className:"inputs"},l.a.createElement("input",{className:"form-input",name:"name",onChange:r,placeholder:"Enter Event Name"})),l.a.createElement("div",{className:"inputs"},l.a.createElement("input",{className:"form-input",name:"city",onChange:r,placeholder:"Enter Event City"})),l.a.createElement("div",{className:"submit-button-container"},l.a.createElement("button",{className:"button",onClick:function(e){e.preventDefault(),h.searchCheckinEvent({name:a.name,city:a.city}).then((function(e){console.log(e),c(Object(D.a)(Object(D.a)({},a),{},{results:e.data}))})).then(console.log(a)).catch((function(e){return console.log(e)}))},type:"submit"},"Search ",l.a.createElement("i",{class:"fas fa-search"})))),l.a.createElement("section",{className:"searchEventsContainer"},l.a.createElement("p",{style:{fontSize:"30px",color:"white"}},"What's the Move?"),a.results.map((function(e){return l.a.createElement(J,{key:e._id,id:e._id,event_name:e.name,event_host:e.host_name,event_date:new Date(e.date).toDateString()})}))))},q=a(171),K=a(61);var G=function(e){return l.a.createElement("div",null,l.a.createElement("button",{className:"button",onClick:e.onClick,type:"submit"},"Delete Event"))};var Z=function(e){return e.allfeedback,l.a.createElement("div",{className:"feedbackBox"},l.a.createElement("h1",{className:"text-center",style:{fontSize:"45px",color:"white"}},"What People Are Saying"),l.a.createElement("div",null,e.allfeedback?e.allfeedback.map((function(e){return l.a.createElement("p",{className:"feedback-list",key:e},l.a.createElement("strong",null,'"',e,'"'))})):l.a.createElement("div",null)))},Q=a(167);var X=function(e){return console.log("images2",e.images),l.a.createElement("div",{className:"event-images row"},e.images?e.images.map((function(e){return l.a.createElement(Q.a,{style:{height:"min-content"},className:"images-array col-md-6 ",key:e,src:e,size:"small",centered:!0})})):l.a.createElement("div",null))};var $=function(e){return l.a.createElement("div",{className:"row imageBtn"},l.a.createElement("button",{type:"button",className:"button col",onClick:e.handleBtnClick},"See Photos"))};var ee=function(){var e=Object(n.useState)({event:[]}),t=Object(N.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({isBookmark:!1}),i=Object(N.a)(r,2),s=i[0],m=i[1],u=Object(n.useState)({isImage:!1}),d=Object(N.a)(u,2),E=d[0],p=d[1],v=window.location.pathname,g=v.substring(v.lastIndexOf("/")+1),f=localStorage.getItem("user").split("/")[1],b=(g+"/"+f).split("/");return Object(n.useEffect)((function(){h.getEvent(g).then((function(e){c(e.data)})).catch((function(e){return console.log(e)})).then(h.getBookmark({name:f}).then((function(e){m({isBookmark:e.data})})).catch((function(e){return console.log(e)})))}),[]),l.a.createElement("div",null,l.a.createElement(W.a,{textAlign:"center"},l.a.createElement("h1",{className:"event-title"},a.name),l.a.createElement(q.a.Column,{width:9},l.a.createElement("div",{className:"eventDetail-box"},l.a.createElement("div",{className:"row"},l.a.createElement("p",{className:"event-detail col",style:{margin:"40px",fontSize:"33px"}},a.description)),l.a.createElement("div",{className:"detail row"},l.a.createElement("p",{className:"label col"},"Hosted By  "),l.a.createElement("p",{className:"event-detail col"},a.host_name)),l.a.createElement("div",{className:"detail row"},l.a.createElement("p",{className:"label col"},"When "),l.a.createElement("p",{className:"event-detail col"},new Date(a.date).toDateString())),l.a.createElement("div",{className:"detail row"},l.a.createElement("p",{className:"label col"},"Where  "),l.a.createElement("p",{className:"event-detail col"},a.address," ",l.a.createElement("br",null),a.city," ",a.state,", ",a.zipcode)),l.a.createElement("div",{className:"detail row"},l.a.createElement("p",{className:"label col"},"Type of Event  "),l.a.createElement("p",{className:"event-detail col"},a.category)),l.a.createElement("div",{className:"detail row"},l.a.createElement("p",{className:"label col"},"Rating  "),l.a.createElement("p",{className:"event-detail col"}," ",a.averageRating))))),l.a.createElement("section",{className:"detail-info row"},l.a.createElement("div",{className:"image-box col"},l.a.createElement("div",null,l.a.createElement($,{handleBtnClick:function(){console.log(E.isImage),!1===E.isImage?p({isImage:!0}):p({isImage:!1})}}),!0===E.isImage?l.a.createElement(X,{images:a.images}):l.a.createElement("p",null))),l.a.createElement("div",{className:"feedback-box col"},l.a.createElement(Z,{className:"feedback-item",allfeedback:a.feedback}))),l.a.createElement(W.a,{textAlign:"center"},l.a.createElement(q.a.Column,{width:3},l.a.createElement("div",{className:"event-buttons"},l.a.createElement("button",{className:"button",onClick:function(e){e.preventDefault(),!0===s.isBookmark?h.updateBookmark(b):!1===s.isBookmark&&h.saveBookmark(b).then((function(e){console.log(e)})).then(void window.location.reload()).catch((function(e){return console.log(e)}))}},l.a.createElement(K.a,{name:"bookmark outline"}),"Bookmark"),l.a.createElement(o.b,{to:"/check-in/".concat(a._id)},l.a.createElement("button",{className:"button"},l.a.createElement(K.a,{name:"map marker alternate"}),"Check-in")))),a.user_id===f?l.a.createElement(G,{className:"button",onClick:function(){h.deleteEvent(g).then((function(e){alert("this event has been deleted"),window.location.replace("/event")})).catch((function(e){return console.log(e)}))}}):l.a.createElement("p",null)))},te=a(169);var ae=function(){var e=Object(n.useState)({events:[]}),t=Object(N.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({list:[],isBookmarkList:!0}),i=Object(N.a)(r,2),s=i[0],m=(i[1],localStorage.getItem("user").split("/")[1]);function u(e){h.removeBookmark(e,m).then((function(){window.location.reload()}))}return Object(n.useEffect)((function(){h.getBookmarksForUser({name:m}).then((function(e){console.log(e.data[0]),c({events:e.data[0].events})})).catch((function(e){return console.log(e)})).then(console.log(a.events))}),[]),s.isBookmarkList?l.a.createElement("div",null,l.a.createElement("h1",{className:" page-title text-center"},"Saved Events"),l.a.createElement("br",null),l.a.createElement(W.a,{className:"bookmark-box",style:{width:"55%"}},l.a.createElement(te.a,{divided:!0,verticalAlign:"middle",className:"bookmark-list"},l.a.createElement(te.a.Content,{centered:!0,list:s.list,onRemove:u},a.events.map((function(e){return l.a.createElement(U,{className:"listItem",key:e._id},l.a.createElement(o.b,{to:"/event/"+e._id,specific:e},l.a.createElement("p",null,new Date(e.date).toDateString(),", ",e.city),l.a.createElement("p",null,e.name)),l.a.createElement("button",{className:"button",floated:"right",onClick:function(){return u(e._id)}},"Delete"))})))))):null};a(151);var ne=function(){return l.a.createElement("div",{className:"logo-container"},l.a.createElement("h1",{className:"logo-name"},"The Move "))};var le=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(ne,null),l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/"},localStorage.getItem("user")?l.a.createElement(i.a,{push:!0,to:"/home"}):l.a.createElement(V,null)),l.a.createElement(i.b,{exact:!0,path:"/home"},localStorage.getItem("user")?l.a.createElement(j,null):l.a.createElement(i.a,{push:!0,to:"/"})),l.a.createElement(i.b,{exact:!0,path:"/check-in/:id"},localStorage.getItem("user")?l.a.createElement(M,null):l.a.createElement(i.a,{push:!0,to:"/"})),l.a.createElement(i.b,{exact:!0,path:"/searchCheck-in"}," ",localStorage.getItem("user")?l.a.createElement(Y,null):l.a.createElement(i.a,{push:!0,to:"/"})),l.a.createElement(i.b,{exact:!0,path:"/event"},localStorage.getItem("user")?l.a.createElement(R,null):l.a.createElement(i.a,{push:!0,to:"/"})),l.a.createElement(i.b,{exact:!0,path:"/create"},localStorage.getItem("user")?l.a.createElement(_,null):l.a.createElement(i.a,{push:!0,to:"/"})),l.a.createElement(i.b,{exact:!0,path:"/event/:id"},localStorage.getItem("user")?l.a.createElement(ee,null):l.a.createElement(i.a,{push:!0,to:"/"})),l.a.createElement(i.b,{exact:!0,path:"/bookmark"},localStorage.getItem("user")?l.a.createElement(ae,null):l.a.createElement(i.a,{push:!0,to:"/"})))),l.a.createElement(I,null))};r.a.render(l.a.createElement(le,null),document.getElementById("root"))},62:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.819101bd.chunk.js.map