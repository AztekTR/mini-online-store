(this["webpackJsonpmini-online-store"]=this["webpackJsonpmini-online-store"]||[]).push([[0],{139:function(e,t,n){},150:function(e,t,n){},16:function(e,t,n){e.exports={productCard:"CartProduct_productCard__1Ef4H",image:"CartProduct_image__3spMt",container:"CartProduct_container__lOOAQ",descriptionContainer:"CartProduct_descriptionContainer__1stVT",description:"CartProduct_description__2t6oj",changeNumberContainer:"CartProduct_changeNumberContainer__3wUjf",changeNumberButton:"CartProduct_changeNumberButton__3V6W3",number:"CartProduct_number__2q6-O"}},24:function(e,t,n){e.exports={productCard:"Product_productCard__3eyRi",image:"Product_image__2oAxl",container:"Product_container__39bUb",name:"Product_name__1_pID",description:"Product_description__3OWcE",buyButton:"Product_buyButton__Jq_wG"}},250:function(e,t,n){},251:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(54),i=n.n(a),o=(n(139),n(40)),s=n(9),d=n(10),u=n(33),l=n(75),p=n.n(l),j=n(106),m=n(43),b=[{id:1,name:"banana",image:"https://www.pngitem.com/pimgs/m/128-1288044_bananas-transparent-cliparts-banana-png-png-download.png",description:"\u0414\u0443\u0436\u0435 \u0441\u043c\u0430\u0447\u043d\u0438\u0439 \u0456 \u043a\u043e\u0440\u0438\u0441\u043d\u0438\u0439 \u0436\u043e\u0432\u0442\u0438\u0439 \u0444\u0440\u0443\u043a\u0442",price:"19"},{id:2,name:"apple",image:"https://pngimg.com/uploads/apple/apple_PNG12439.png",description:"\u0414\u0443\u0436\u0435 \u0441\u043c\u0430\u0447\u043d\u0438\u0439 \u0456 \u043a\u043e\u0440\u0438\u0441\u043d\u0438\u0439 \u0447\u0435\u0440\u0432\u043e\u043d\u0438\u0439 \u0444\u0440\u0443\u043a\u0442",price:"12"},{id:3,name:"kiwi",image:"https://pngicon.ru/file/uploads/kivi.png",description:"\u0414\u0443\u0436\u0435 \u0441\u043c\u0430\u0447\u043d\u0438\u0439 \u0456 \u043a\u043e\u0440\u0438\u0441\u043d\u0438\u0439 \u0437\u0435\u043b\u0435\u043d\u0438\u0439 \u0444\u0440\u0443\u043a\u0442",price:"15"},{id:4,name:"pear",image:"http://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/26.jpg",description:"\u0414\u0443\u0436\u0435 \u0441\u043c\u0430\u0447\u043d\u0438\u0439 \u0456 \u043a\u043e\u0440\u0438\u0441\u043d\u0438\u0439 \u0444\u0440\u0443\u043a\u0442",price:"8"},{id:5,name:"pineapple",image:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2257144.jpg",description:"\u0414\u0443\u0436\u0435 \u0441\u043c\u0430\u0447\u043d\u0438\u0439 \u0456 \u043a\u043e\u0440\u0438\u0441\u043d\u0438\u0439 \u0442\u0440\u043e\u043f\u0456\u0447\u043d\u0438\u0439 \u0444\u0440\u0443\u043a\u0442",price:"35"},{id:6,name:"grape",image:"https://www.pngarea.com/pngm/539/3840348_grapes-png-image-grape-png-image-grape-clip.png",description:"\u0414\u0443\u0436\u0435 \u0441\u043c\u0430\u0447\u043d\u0438\u0439 \u0456 \u043a\u043e\u0440\u0438\u0441\u043d\u0438\u0439 \u0444\u0456\u043e\u043b\u0435\u0442\u043e\u0432\u0438\u0439 \u0444\u0440\u0443\u043a\u0442",price:"41"}];function O(e){return new Promise((function(t){return setTimeout(t,e)}))}var h={allProducts:[],productsInCart:JSON.parse(localStorage.getItem("productsInCart"))||{},totalPrice:JSON.parse(localStorage.getItem("totalPrice"))||0,status:"idle"};function _(e){localStorage.setItem("productsInCart",JSON.stringify(e.productsInCart)),localStorage.setItem("totalPrice",JSON.stringify(e.totalPrice))}var f=Object(m.b)("productSlice/fetchProducts",Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(1500);case 2:return e.abrupt("return",b);case 3:case"end":return e.stop()}}),e)})))),x=Object(m.c)({name:"productSlice",initialState:h,reducers:{addProductToCart:function(e,t){Object.keys(e.productsInCart).includes(t.payload)||(e.totalPrice+=+e.allProducts.find((function(e){return e.name===t.payload})).price),Object.assign(e.productsInCart,Object(u.a)({},t.payload,1)),_(e)},deleteProductFromCart:function(e,t){delete e.productsInCart[t.payload],_(e)},incrementProductCounter:function(e,t){Object.assign(e.productsInCart,Object(u.a)({},t.payload,e.productsInCart[t.payload]+1)),e.totalPrice+=+e.allProducts.find((function(e){return e.name===t.payload})).price,_(e)},decrementProductCounter:function(e,t){Object.assign(e.productsInCart,Object(u.a)({},t.payload,e.productsInCart[t.payload]-1)),e.totalPrice-=+e.allProducts.find((function(e){return e.name===t.payload})).price,_(e)},clearTotalPrice:function(e){e.totalPrice-=e.totalPrice,_(e)}},extraReducers:function(e){e.addCase(f.fulfilled,(function(e,t){t.payload.forEach((function(t){return e.allProducts.push(t)}))}))}}),g=x.actions,C=g.addProductToCart,P=g.deleteProductFromCart,v=g.incrementProductCounter,N=g.decrementProductCounter,y=g.clearTotalPrice,w=function(e){return e.products.allProducts},I=function(e){return e.products.productsInCart},S=function(e){return e.products.totalPrice},k=x.reducer,B=n(44),J=n.n(B),q=n(1);var E=Object(s.f)((function(){var e=Object(d.d)(S);return Object(q.jsxs)("header",{className:J.a.header,children:[Object(q.jsx)(o.b,{to:"/",className:J.a.link,children:"Home"}),Object(q.jsx)(o.b,{to:"/cart",className:J.a.link,children:Object(q.jsxs)("button",{className:J.a.button,children:["Cart ",e>0&&"".concat(e,"$")]})})]})})),T=n(109),A=n(24),F=n.n(A);function G(e){var t=Object(d.c)();return Object(q.jsxs)("div",{className:F.a.productCard,children:[Object(q.jsx)("img",{className:F.a.image,src:e.image,alt:"product"}),Object(q.jsxs)("div",{className:F.a.container,children:[Object(q.jsx)("h3",{className:F.a.name,children:e.name}),Object(q.jsxs)("p",{className:F.a.description,children:[e.description,"."]}),Object(q.jsxs)("p",{className:F.a.price,children:["\u0426\u0456\u043d\u0430 - ",e.price,"$."]}),Object(q.jsx)("button",{className:F.a.buyButton,onClick:function(){return t(C(e.name))},children:"\u041a\u0443\u043f\u0438\u0442\u0438"})]})]})}n(150);function H(){return Object(q.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"0.5rem"},children:Object(q.jsxs)("div",{class:"lds-spinner",children:[Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{}),Object(q.jsx)("div",{})]})})}var R=n(78),z=n.n(R);function L(e){var t=Object(r.useState)(!0),n=Object(T.a)(t,2),c=n[0],a=n[1],i=Object(d.d)(w);return Object(r.useEffect)((function(){return i.length>0&&a(!1)}),[i]),Object(q.jsxs)("div",{className:z.a.container,children:[Object(q.jsx)("h1",{className:"main-header",children:"Product List"}),c&&Object(q.jsx)(H,{}),Object(q.jsx)("div",{className:z.a.productsContainer,children:i.length>0?i.map((function(e){return Object(q.jsx)(G,{name:e.name,image:e.image,description:e.description,price:e.price},e.id.toString())})):c?null:"No products((("})]})}var W=n(56),$=n(104),U=Object(m.a)({reducer:{form:$.a,products:k}}),M=n(16),V=n.n(M);function X(e){var t=Object(d.c)(),n=Object(d.d)(I);return Object(r.useEffect)((function(){n[e.name]<1&&t(P(e.name))}),[t,n,e.name]),Object(q.jsxs)("div",{className:V.a.productCard,children:[Object(q.jsx)("img",{className:V.a.image,src:e.image,alt:"product"}),Object(q.jsxs)("div",{className:V.a.container,children:[Object(q.jsxs)("div",{className:V.a.descriptionContainer,children:[Object(q.jsx)("p",{className:V.a.description,children:e.name}),Object(q.jsx)("p",{className:V.a.description,children:e.description}),Object(q.jsx)("p",{className:V.a.description,children:"\u0426\u0456\u043d\u0430 - ".concat(e.price,".")})]}),Object(q.jsxs)("div",{className:V.a.changeNumberContainer,children:[Object(q.jsx)("button",{className:V.a.changeNumberButton,onClick:function(){return t(N(e.name))},children:"-"}),Object(q.jsx)("div",{className:V.a.number,children:n[e.name]}),Object(q.jsx)("button",{className:V.a.changeNumberButton,onClick:function(){return t(v(e.name))},children:"+"})]})]})]})}var Z=n(103),D=n(102),K=n(28),Q=n.n(K);var Y=Object(Z.a)({form:"order"})((function(e){return Object(q.jsxs)("form",{className:Q.a.formContainer,onSubmit:e.handleSubmit,children:[Object(q.jsx)("div",{children:Object(q.jsx)(D.a,{className:Q.a.input,name:"name",placeholder:"Name",component:"input",required:!0})}),Object(q.jsx)("div",{children:Object(q.jsx)(D.a,{className:Q.a.input,name:"surname",placeholder:"Surname",component:"input",required:!0})}),Object(q.jsx)("div",{children:Object(q.jsx)(D.a,{className:Q.a.input,name:"adress",placeholder:"Adress",component:"input",required:!0})}),Object(q.jsx)("div",{children:Object(q.jsx)(D.a,{className:Q.a.input,name:"phone",placeholder:"Phone",component:"input",required:!0})}),Object(q.jsx)("button",{className:Q.a.button,children:"Order"})]})})),ee=n(45),te=n.n(ee);function ne(e){var t=Object(d.c)(),n=Object(d.d)(I),r=Object(d.d)(w),c=Object(d.d)(S);return Object(q.jsxs)("div",{className:"cart-section",children:[Object(q.jsx)("h1",{className:"main-header",children:"Cart"}),Object(q.jsxs)("div",{className:te.a.container,children:[Object(q.jsx)("div",{className:te.a.cartProductContainer,children:Object.keys(n).length>0?r.filter((function(e){return e.name in n})).map((function(e){return Object(q.jsx)(X,{name:e.name,image:e.image,description:e.description,price:e.price,number:1},e.id.toString())})):Object(q.jsx)("p",{className:te.a.noProduct,children:"No products in cart"})}),Object(q.jsx)(Y,{onSubmit:function(e){if(Object.keys(n).length<1)alert("No products for order!");else for(var r in console.log(Object.assign({},e,n,{totalPrice:c})),U.dispatch(Object(W.a)("order")),t(y()),n)t(P(r))}})]}),Object(q.jsx)("p",{className:te.a.total,children:"Total: ".concat(c,"$")})]})}n(250);var re=function(){var e=Object(d.c)();return c.a.useEffect((function(){e(f())})),Object(q.jsx)(o.a,{children:Object(q.jsxs)("div",{className:"App",children:[Object(q.jsx)(E,{}),Object(q.jsxs)(s.c,{children:[Object(q.jsx)(s.a,{path:"/cart",children:Object(q.jsx)(ne,{})}),Object(q.jsx)(s.a,{path:"/",children:Object(q.jsx)(L,{})})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(q.jsx)(c.a.StrictMode,{children:Object(q.jsx)(d.a,{store:U,children:Object(q.jsx)(re,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},28:function(e,t,n){e.exports={formContainer:"CartForm_formContainer__1-ZnG",input:"CartForm_input__CzGNZ",button:"CartForm_button__1yFeG"}},44:function(e,t,n){e.exports={header:"Header_header__2RJ6C",link:"Header_link__23dhz",button:"Header_button__2aKPP"}},45:function(e,t,n){e.exports={container:"Cart_container__2WGps",cartProductContainer:"Cart_cartProductContainer__31j1J",formContainer:"Cart_formContainer__38szP",noProduct:"Cart_noProduct__s-Amg",total:"Cart_total__qXLvR"}},78:function(e,t,n){e.exports={container:"ProductList_container__16wAH",productsContainer:"ProductList_productsContainer__1RIOg"}}},[[251,1,2]]]);
//# sourceMappingURL=main.df9ab54c.chunk.js.map