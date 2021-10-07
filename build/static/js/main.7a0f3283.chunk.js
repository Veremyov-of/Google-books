(this["webpackJsonpversion-2"]=this["webpackJsonpversion-2"]||[]).push([[0],{33:function(e,t,o){},36:function(e,t,o){},38:function(e,t,o){},40:function(e,t,o){},41:function(e,t,o){},42:function(e,t,o){},43:function(e,t,o){"use strict";o.r(t);o(0);var c=o(14),n=o.n(c),a=o(5),s=o(11),i=o(4),r=(o(33),o(21)),l=(o(36),o(13)),u=o(3),j={maxResults:30,totalItems:0,search:"",result:[],books:[],apiKey:"AIzaSyCa2H8jObyJ_7IzjULL4d0aQV8muTgEIzc",categories:"All",sorting:"relevance",loading:!1,number:0,stepSearch:0},b="INPUT_CHANGE",d="SEARCH",v="SORTING",h="CATEGORIES_CHANGE",m="LOADING",O="LOADMORE",p="RENDER_BOOKS",f="CLEAR_RESULT",x=function(){return{type:p}},g=function(){return{type:m}},k=function(e,t){return e.preventDefault(),function(e){e(g()),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(t.search,"&key=").concat(t.apiKey,"&maxResults=").concat(t.maxResults,"&orderBy=").concat(t.sorting)).then((function(e){return e.json()})).then((function(t){return e({type:d,payload:t})})).then((function(){return e(x())}))}},y=o(1);function N(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.books}));return Object(y.jsxs)("div",{className:"search",children:[Object(y.jsx)("h1",{className:"search-title",children:"Search for books"}),Object(y.jsxs)("form",{className:"search-form",onSubmit:function(o){return e(k(o,t))},children:[Object(y.jsx)("input",{className:"search-input",onChange:function(t){var o=t.target.value;e({type:b,payload:o})},type:"text",value:t.search,placeholder:"Search for Books"}),Object(y.jsx)("button",{className:"search-btn",type:"submit",children:"Search"})]}),Object(y.jsxs)("div",{className:"search-filter",children:[Object(y.jsx)("h3",{children:"sorting:"}),Object(y.jsxs)("select",{className:"search-select",value:t.sorting,onChange:function(t){var o=t.target.value;e({type:v,payload:o})},children:[Object(y.jsx)("option",{value:"relevance",children:"relevance"}),Object(y.jsx)("option",{value:"newest",children:"newest"})]}),Object(y.jsx)("h3",{children:"categories:"}),Object(y.jsxs)("select",{className:"search-select",value:t.categories,onChange:function(t){var o=t.target.value;e({type:h,payload:o})},children:[Object(y.jsx)("option",{value:"All",children:"All"}),Object(y.jsx)("option",{value:"Art",children:"Art"}),Object(y.jsx)("option",{value:"Biography & Autobiography",children:"Biography"}),Object(y.jsx)("option",{value:"Computers",children:"Computers"}),Object(y.jsx)("option",{value:"History",children:"History"}),Object(y.jsx)("option",{value:"Medical",children:"Medical"}),Object(y.jsx)("option",{value:"Poetry",children:"Poetry"})]})]}),Object(y.jsxs)("h2",{children:["Found ",t.books.length>0?t.totalItems:"0"," results"]})]})}o(38);function I(){var e=Object(a.c)((function(e){return e.books}));return Object(y.jsx)("div",{className:"books_wrapp",children:e.books.map((function(e,t){var o,c,n,a,i,r,l,u;return Object(y.jsxs)(s.b,{id:null===(o=e.volumeInfo)||void 0===o?void 0:o.title,className:"link-book",to:"".concat(null===(c=e.volumeInfo)||void 0===c?void 0:c.title),children:[Object(y.jsx)("img",{src:void 0!==(null===(n=e.volumeInfo)||void 0===n?void 0:n.imageLinks)?e.volumeInfo.imageLinks.thumbnail:"./img/noPicture.png",alt:null===(a=e.volumeInfo)||void 0===a?void 0:a.title}),Object(y.jsxs)("div",{className:"book_info",children:[Object(y.jsx)("h2",{className:"book_title",children:void 0===(null===(i=e.volumeInfo)||void 0===i?void 0:i.title)?"":e.volumeInfo.title.length<60?null===(r=e.volumeInfo)||void 0===r?void 0:r.title:e.volumeInfo.title.slice(0,60)+"..."}),Object(y.jsx)("p",{className:"book_categories",children:void 0!==(null===(l=e.volumeInfo)||void 0===l?void 0:l.categories)?e.volumeInfo.categories:""}),Object(y.jsx)("p",{className:"book_authors",children:void 0!==(null===(u=e.volumeInfo)||void 0===u?void 0:u.authors)?e.volumeInfo.authors[0]:""})]})]},t)}))})}o(40);var B=function(e){return function(t){t(g()),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(e.search,"&key=").concat(e.apiKey,"&maxResults=").concat(e.maxResults,"&orderBy=").concat(e.sorting,"&startIndex=").concat(e.books.length)).then((function(e){return e.json()})).then((function(e){return t((o=e.items,{type:O,payload:o}));var o})).then((function(){return t(x())})).then((function(){return t({type:f})}))}};function A(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.books}));return Object(y.jsx)("div",{className:"loadmore-wrapp",children:Object(y.jsx)("button",{className:"loadmore-btn",onClick:function(){return e(B(t))},children:"Load more"})})}o(41);function w(){var e=Object(a.c)((function(e){return e.books.loading}));return Object(y.jsx)("div",{className:"loading_wrapp ".concat(e?"loading_wrapp-active":""),children:Object(y.jsx)("h2",{children:"Loading..."})})}var R=o(23);o(42);function S(e){var t,o=e.book.volumeInfo,c=null===(t=e.book.searchInfo)||void 0===t?void 0:t.textSnippet;return Object(y.jsx)("div",{className:"section-itemBook",children:Object(y.jsxs)("div",{className:"itemBook",children:[Object(y.jsx)("img",{className:"itemBook-img",src:void 0!==(null===o||void 0===o?void 0:o.imageLinks)?o.imageLinks.thumbnail:"./img/noPicture.png",alt:"img"}),Object(y.jsxs)("div",{className:"itemBook-info",children:[Object(y.jsx)("h1",{className:"itemBook-title",children:null===o||void 0===o?void 0:o.title}),Object(y.jsx)("p",{className:"itemBook-categories",children:null===o||void 0===o?void 0:o.categories}),Object(y.jsx)("p",{className:"itemBook-authors",children:null===o||void 0===o?void 0:o.authors.map((function(e){return e+", "}))})]}),Object(y.jsx)("div",{className:"itemBook-wrapp",children:Object(y.jsx)("p",{className:"itemBook-textSnippet",children:c})}),Object(y.jsx)(R.a,{smooth:!0,className:"itemBook-link",to:"/#".concat(null===o||void 0===o?void 0:o.title),children:"back"})]})})}var C=function(){var e=Object(a.c)((function(e){return e.books}));return Object(y.jsx)(s.a,{basename:"/Google-books",children:Object(y.jsxs)("div",{className:"App",children:[Object(y.jsxs)(i.c,{children:[Object(y.jsxs)(i.a,{exact:!0,path:"/",children:[Object(y.jsx)(N,{}),Object(y.jsx)(I,{}),e.books.length>0?Object(y.jsx)(A,{}):"",Object(y.jsx)(w,{})]}),e.books.map((function(e,t){var o;return Object(y.jsx)(i.a,{path:"/".concat(null===(o=e.volumeInfo)||void 0===o?void 0:o.title),children:Object(y.jsx)(S,{book:e})},t)}))]}),Object(y.jsx)(r.VerticleButton,{AnimationDuration:494})]})})},E=o(16),L=o(24),_=o(25),G=o.n(_),H=Object(E.b)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),{},{search:t.payload});case d:return e.search?Object(u.a)(Object(u.a)({},e),{},{result:t.payload.items,totalItems:t.payload.totalItems,number:0,books:[],step:0}):Object(u.a)(Object(u.a)({},e),{},{result:[]});case v:return Object(u.a)(Object(u.a)({},e),{},{sorting:t.payload});case h:return Object(u.a)(Object(u.a)({},e),{},{categories:t.payload});case m:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case O:return Object(u.a)(Object(u.a)({},e),{},{result:Object(l.a)(t.payload)});case p:if(!e.search)return Object(u.a)(Object(u.a)({},e),{},{books:[],loading:!1});if("All"===e.categories)return Object(u.a)(Object(u.a)({},e),{},{books:[].concat(Object(l.a)(e.books),Object(l.a)(e.result)),loading:!1});for(var o=[],c=0;c<e.result.length;c++){var n,a;void 0!==(null===(n=e.result[c].volumeInfo)||void 0===n?void 0:n.categories)&&(null===(a=e.result[c].volumeInfo)||void 0===a?void 0:a.categories.includes(e.categories))&&o.push(e.result[c])}return Object(u.a)(Object(u.a)({},e),{},{books:[].concat(Object(l.a)(e.books),o),loading:!1});case f:return Object(u.a)(Object(u.a)({},e),{},{result:[]});default:return e}}}),D=Object(E.c)(H,Object(E.a)(L.a,G.a));n.a.render(Object(y.jsx)(a.a,{store:D,children:Object(y.jsx)(C,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.7a0f3283.chunk.js.map