(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n(8),o=n.n(r),i=(n(15),n(2)),s=n(3),u=n(4),l=n(6),b=n(5),h=n(18),d=n(9),j=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(d.a)({},e.currentTarget.name,e.currentTarget.value))},t.contactChek=function(){var e=t.state,n=e.name,a=e.number,c=t.props.contacts,r=c.reduce((function(t,e){return[].concat(Object(i.a)(t),[e.name])}),[]),o=c.reduce((function(t,e){return[].concat(Object(i.a)(t),[e.number])}),[]);(r.includes(n)||o.includes(a))&&alert("".concat(n).concat(a," is already in contacts")),""!==n&&""!==a||alert("Enter all data, please")},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),t.setState({name:"",number:""}),t.contactChek()||t.props.onSubmit(a,c)},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["Name:",Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,placeholder:"enter name",onChange:this.handleChange})]}),Object(a.jsxs)("label",{children:["Number:",Object(a.jsx)("input",{type:"tel",name:"number",value:this.state.number,placeholder:"enter number",onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(c.Component),m=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{children:[Object(a.jsxs)("p",{children:[c,": ",r]}),Object(a.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},f=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{children:["Find contacts by name:",Object(a.jsx)("input",{type:"text",value:e,onChange:n})]})},p=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:Object(h.a)(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(i.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,c=this.getVisibleContacts();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(j,{onSubmit:this.addContact,contacts:n}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(f,{value:e,onChange:this.changeFilter}),Object(a.jsx)(m,{contacts:c,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.792a6dcf.chunk.js.map