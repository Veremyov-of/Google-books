(this["webpackJsonpversion-2"]=this["webpackJsonpversion-2"]||[]).push([[0],{34:function(e,t,o){},38:function(e,t,o){},40:function(e,t,o){},42:function(e,t,o){},43:function(e,t,o){},44:function(e,t,o){},45:function(e,t,o){"use strict";o.r(t);o(0);var c=o(15),n=o.n(c),a=o(5),s=o(11),r=o(4),i=(o(34),o(23)),l=o(12),u=o.n(l),j=o(17),b=(o(38),o(1));function d(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.books}));function o(){return(o=Object(j.a)(u.a.mark((function o(a){var s;return u.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n(),a.preventDefault(),s=[],o.next=5,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(t.search,"&key=").concat(t.apiKey,"&maxResults=").concat(t.maxResults,"&orderBy=").concat(t.sorting)).then((function(e){return e.json()})).then((function(e){return s=e}));case 5:e({type:"SEARCH",payload:s}),c();case 7:case"end":return o.stop()}}),o)})))).apply(this,arguments)}var c=function(){e({type:"RENDER_BOOKS"})},n=function(){e({type:"LOADING"})};return Object(b.jsxs)("div",{className:"search",children:[Object(b.jsx)("h1",{className:"search-title",children:"Search for books"}),Object(b.jsxs)("form",{className:"search-form",onSubmit:function(e){return o.apply(this,arguments)},children:[Object(b.jsx)("input",{className:"search-input",onChange:function(t){var o=t.target.value;e({type:"INPUT_CHANGE",payload:o})},type:"text",value:t.search,placeholder:"Search for Books"}),Object(b.jsx)("button",{className:"search-btn",type:"submit",children:"Search"})]}),Object(b.jsxs)("div",{className:"search-filter",children:[Object(b.jsx)("h3",{children:"sorting:"}),Object(b.jsxs)("select",{className:"search-select",value:t.sorting,onChange:function(t){var o=t.target.value;e({type:"SORTING",payload:o})},children:[Object(b.jsx)("option",{value:"relevance",children:"relevance"}),Object(b.jsx)("option",{value:"newest",children:"newest"})]}),Object(b.jsx)("h3",{children:"categories:"}),Object(b.jsxs)("select",{className:"search-select",value:t.categories,onChange:function(t){var o=t.target.value;e({type:"CATEGORIES_CHANGE",payload:o})},children:[Object(b.jsx)("option",{value:"All",children:"All"}),Object(b.jsx)("option",{value:"Art",children:"Art"}),Object(b.jsx)("option",{value:"Biography & Autobiography",children:"Biography"}),Object(b.jsx)("option",{value:"Computers",children:"Computers"}),Object(b.jsx)("option",{value:"History",children:"History"}),Object(b.jsx)("option",{value:"Medical",children:"Medical"}),Object(b.jsx)("option",{value:"Poetry",children:"Poetry"})]})]}),Object(b.jsxs)("h2",{children:["Found ",t.books.length>0?t.totalItems:"0"," results"]})]})}o(40);function h(){var e=Object(a.c)((function(e){return e.books}));return Object(b.jsx)("div",{className:"books_wrapp",children:e.books.map((function(e,t){var o,c,n,a,r,i,l,u;return Object(b.jsxs)(s.b,{id:null===(o=e.volumeInfo)||void 0===o?void 0:o.title,className:"link-book",to:"".concat(null===(c=e.volumeInfo)||void 0===c?void 0:c.title),children:[Object(b.jsx)("img",{src:void 0!==(null===(n=e.volumeInfo)||void 0===n?void 0:n.imageLinks)?e.volumeInfo.imageLinks.thumbnail:"./img/noPicture.png",alt:null===(a=e.volumeInfo)||void 0===a?void 0:a.title}),Object(b.jsxs)("div",{className:"book_info",children:[Object(b.jsx)("h2",{className:"book_title",children:void 0===(null===(r=e.volumeInfo)||void 0===r?void 0:r.title)?"":e.volumeInfo.title.length<60?null===(i=e.volumeInfo)||void 0===i?void 0:i.title:e.volumeInfo.title.slice(0,60)+"..."}),Object(b.jsx)("p",{className:"book_categories",children:void 0!==(null===(l=e.volumeInfo)||void 0===l?void 0:l.categories)?e.volumeInfo.categories:""}),Object(b.jsx)("p",{className:"book_authors",children:void 0!==(null===(u=e.volumeInfo)||void 0===u?void 0:u.authors)?e.volumeInfo.authors[0]:""})]})]},t)}))})}o(42);function v(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.books}));function o(){return(o=Object(j.a)(u.a.mark((function o(){var n;return u.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return c(),n=[],o.next=4,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(t.search,"&key=").concat(t.apiKey,"&maxResults=").concat(t.maxResults,"&orderBy=").concat(t.sorting,"&startIndex=").concat(t.books.length)).then((function(e){return e.json()})).then((function(e){return n=e.items})).then((function(){return e({type:"LOADMORE",payload:n})})).then((function(){return e({type:"RENDER_BOOKS"})})).then((function(){return e({type:"CLEAR_RESULT"})}));case 4:case"end":return o.stop()}}),o)})))).apply(this,arguments)}var c=function(){e({type:"LOADING"})};return Object(b.jsx)("div",{className:"loadmore-wrapp",children:Object(b.jsx)("button",{className:"loadmore-btn",onClick:function(){return o.apply(this,arguments)},children:"Load more"})})}o(43);function O(){var e=Object(a.c)((function(e){return e.books.loading}));return Object(b.jsx)("div",{className:"loading_wrapp ".concat(e?"loading_wrapp-active":""),children:Object(b.jsx)("h2",{children:"Loading..."})})}var m=o(25);o(44);function p(e){var t,o=e.book.volumeInfo,c=null===(t=e.book.searchInfo)||void 0===t?void 0:t.textSnippet;return Object(b.jsx)("div",{className:"section-itemBook",children:Object(b.jsxs)("div",{className:"itemBook",children:[Object(b.jsx)("img",{className:"itemBook-img",src:void 0!==o.imageLinks?o.imageLinks.thumbnail:"./img/noPicture.png",alt:"img"}),Object(b.jsxs)("div",{className:"itemBook-info",children:[Object(b.jsx)("h1",{className:"itemBook-title",children:null===o||void 0===o?void 0:o.title}),Object(b.jsx)("p",{className:"itemBook-categories",children:null===o||void 0===o?void 0:o.categories}),Object(b.jsx)("p",{className:"itemBook-authors",children:null===o||void 0===o?void 0:o.authors.map((function(e){return e+", "}))})]}),Object(b.jsx)("div",{className:"itemBook-wrapp",children:Object(b.jsx)("p",{className:"itemBook-textSnippet",children:c})}),Object(b.jsx)(m.a,{smooth:!0,className:"itemBook-link",to:"/#".concat(null===o||void 0===o?void 0:o.title),children:"back"})]})})}var f=function(){var e=Object(a.c)((function(e){return e.books}));return Object(b.jsx)(s.a,{basename:"/Google-books",children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)(r.c,{children:[Object(b.jsxs)(r.a,{exact:!0,path:"/",children:[Object(b.jsx)(d,{}),Object(b.jsx)(h,{}),e.books.length>0?Object(b.jsx)(v,{}):"",Object(b.jsx)(O,{})]}),e.books.map((function(e,t){var o;return Object(b.jsx)(r.a,{path:"/".concat(null===(o=e.volumeInfo)||void 0===o?void 0:o.title),children:Object(b.jsx)(p,{book:e})},t)}))]}),Object(b.jsx)(i.VerticleButton,{AnimationDuration:494})]})})},x=o(18),g=o(26),k=o.n(g),y=o(14),N=o(3),I={maxResults:30,totalItems:0,search:"",result:[],books:[],apiKey:"AIzaSyCa2H8jObyJ_7IzjULL4d0aQV8muTgEIzc",categories:"All",sorting:"relevance",loading:!1,number:0,stepSearch:0},A=Object(x.b)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INPUT_CHANGE":return Object(N.a)(Object(N.a)({},e),{},{search:t.payload});case"SEARCH":return e.search?Object(N.a)(Object(N.a)({},e),{},{result:t.payload.items,totalItems:t.payload.totalItems,number:0,books:[],step:0}):Object(N.a)(Object(N.a)({},e),{},{result:[]});case"SORTING":return Object(N.a)(Object(N.a)({},e),{},{sorting:t.payload});case"CATEGORIES_CHANGE":return Object(N.a)(Object(N.a)({},e),{},{categories:t.payload});case"LOADING":return Object(N.a)(Object(N.a)({},e),{},{loading:!0});case"LOADMORE":return Object(N.a)(Object(N.a)({},e),{},{result:Object(y.a)(t.payload)});case"RENDER_BOOKS":if(!e.search)return Object(N.a)(Object(N.a)({},e),{},{books:[],loading:!1});if("All"===e.categories)return Object(N.a)(Object(N.a)({},e),{},{books:[].concat(Object(y.a)(e.books),Object(y.a)(e.result)),loading:!1});for(var o=[],c=0;c<e.result.length;c++){var n,a;void 0!==(null===(n=e.result[c].volumeInfo)||void 0===n?void 0:n.categories)&&(null===(a=e.result[c].volumeInfo)||void 0===a?void 0:a.categories.includes(e.categories))&&o.push(e.result[c])}return Object(N.a)(Object(N.a)({},e),{},{books:[].concat(Object(y.a)(e.books),o),loading:!1});case"CLEAR_RESULT":return Object(N.a)(Object(N.a)({},e),{},{result:[]});default:return e}}}),E=Object(x.c)(A,Object(x.a)(k.a));n.a.render(Object(b.jsx)(a.a,{store:E,children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.47c7c663.chunk.js.map