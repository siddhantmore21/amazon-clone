(this.webpackJsonpamazon=this.webpackJsonpamazon||[]).push([[0],{54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var s=a(3),c=a.n(s),i=a(32),n=a.n(i),r=(a(54),a(40)),l=a(9),o=(a(55),a(56),a(41)),d=a.n(o),m=a(42),j=a.n(m),_=a(14),p=a(2),h=Object(s.createContext)(),b=function(e){var t=e.reducer,a=e.initialState,c=e.children;return Object(p.jsx)(h.Provider,{value:Object(s.useReducer)(t,a),children:c})},u=function(){return Object(s.useContext)(h)},g=a(38),O=(g.a.initializeApp({apiKey:"AIzaSyAOlXxoCrpJUEDyCok2OaUmRmcOOmdnYKE",authDomain:"clone-9a911.firebaseapp.com",projectId:"clone-9a911",storageBucket:"clone-9a911.appspot.com",messagingSenderId:"471504206542",appId:"1:471504206542:web:1556d57d372506323aee9f"}).firestore(),g.a.auth());var x=function(){var e=u(),t=Object(l.a)(e,2),a=t[0],s=a.cart,c=a.user;return t[1],Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)(_.b,{to:"/",children:Object(p.jsx)("img",{className:"header__logo",alt:"amazon",src:"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png"})}),Object(p.jsxs)("div",{className:"header__search",children:[Object(p.jsx)("input",{className:"header__searchInput",type:"text"}),Object(p.jsx)(d.a,{className:"header__seachIcon",fontSize:"large"})]}),Object(p.jsxs)("div",{className:"header__nav",children:[Object(p.jsx)(_.b,{to:"/login",children:Object(p.jsxs)("div",{className:"header__option",onClick:function(){c&&O.signOut()},children:[Object(p.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",null===c||void 0===c?void 0:c.email]}),Object(p.jsx)("span",{className:"header__optionLineTwo",children:c?"Sign Out":"Sign In"})]})}),Object(p.jsxs)("div",{className:"header__option",children:[Object(p.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(p.jsx)("span",{className:"header__optionLineTwo",children:"& orders"})]}),Object(p.jsxs)("div",{className:"header__option",children:[Object(p.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(p.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(p.jsx)(_.b,{to:"/checkout",children:Object(p.jsxs)("div",{className:"header__optionBasket",children:[Object(p.jsx)(j.a,{}),Object(p.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===s||void 0===s?void 0:s.length})]})})]})]})},f=a(43),N=a(25),v=a(48),w=a(47),S=(a(69),a(70),a(44)),y=a.n(S),B=a(45),k=a.n(B);var C=function(e){var t=e.items,a=u(),s=Object(l.a)(a,2),c=(s[0].cart,s[1]);return Object(p.jsxs)("div",{className:"product",children:[Object(p.jsx)("img",{alt:"product",src:t.image}),Object(p.jsxs)("div",{className:"product__info",children:[Object(p.jsx)("p",{className:"product__title",children:t.title}),Object(p.jsxs)("div",{className:"product__rating",children:[Array(t.rating).fill().map((function(e,t){return Object(p.jsx)(y.a,{className:"star",fontSize:"small"})})),Array(5-t.rating).fill().map((function(e,t){return Object(p.jsx)(k.a,{className:"star",fontSize:"small"})}))]}),Object(p.jsx)("p",{className:"product__price",children:Object(p.jsx)("strong",{children:new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(t.price)})})]}),Object(p.jsx)("button",{onClick:function(){c({type:"ADD_TO_CART",item:{id:t.id,title:t.title,image:t.image,price:t.price,rating:t.rating}})},children:"Add To Cart"})]})},I=[{id:"1",title:"Redmi 9 Power (Blazing Blue, 4GB RAM, 64GB Storage) - 6000mAh Battery | 48MP Quad Camera",price:10999,image:"https://m.media-amazon.com/images/I/71hEzQGO5qL._AC_UL320_.jpg",rating:4,link:"https://www.amazon.in/Test-Exclusive_2020_1113-Multi-3GB-Storage/dp/B089MS8XQ3/ref=sr_1_1?dchild=1&keywords=redmi+9+power&qid=1615472623&sr=8-1"},{id:"2",title:"HP 15 db1069AU 15.6-inch Laptop (3rd Gen Ryzen 3 3200U/4GB/1TB HDD/Windows 10/MS Office/Radeon Vega 3 Graphics), Jet Black",price:30415,image:"https://images-na.ssl-images-amazon.com/images/I/71JZWpHPV%2BL._SL1500_.jpg",rating:4,link:"https://www.amazon.in/HP-db1069AU-15-6-inch-Windows-Graphics/dp/B083RD58F6/ref=lp_22833084031_1_1"},{id:"3",title:"Samsung Galaxy M31 (Iceberg Blue, 6GB RAM, 128GB Storage)",price:16499,image:"https://images-na.ssl-images-amazon.com/images/I/71ZsMOcpePL._SL1500_.jpg",rating:5,link:"https://www.amazon.in/Samsung-Galaxy-Iceberg-128GB-Storage/dp/B085HZYM54/ref=sr_1_8?dchild=1&keywords=samsung+galaxy&qid=1615472812&s=electronics&sr=1-8"},{id:"4",title:"MSI Bravo 15 Ryzen 7 4800H 15.6 FHD Gaming Laptop (16GB/512GB SSD/144 Hz/Windows 10/ RX5500M,GDDR6 4GB/Black/1.86 kg), A4DDR-212IN",price:84990,image:"https://images-na.ssl-images-amazon.com/images/I/71b46EnIzBL._SL1500_.jpg",rating:4,link:"https://www.amazon.in/dp/B08GYH6HKN/ref=redir_mobile_desktop?_encoding=UTF8&aaxitk=9.vW71dh2XGCocCTlH1sww&hsa_cr_id=7816871090702&pd_rd_plhdr=t&pd_rd_r=7b82fb90-ddd2-4c53-acc2-9119942ddf94&pd_rd_w=MW252&pd_rd_wg=UWIJV&ref_=sbx_be_s_sparkle_lsi3d_asin_0_img"},{id:"5",title:"Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2020 Model)",price:15790,image:"https://images-na.ssl-images-amazon.com/images/I/71fEd9glTIL._SL1500_.jpg",rating:5,link:"https://www.amazon.in/Samsung-Inches-Wondertainment-UA32T4340AKXXL-Glossy/dp/B086WZSK4F?ref_=Oct_s9_apbd_old_hd_bw_b1W1fuh_0_bb85c11b&pf_rd_r=NG4HVC5K2Z4PV6N0ZJRR&pf_rd_p=1bdc53e5-98b0-592c-ac87-c75da6ee8427&pf_rd_s=merchandised-search-10&pf_rd_t=BROWSE&pf_rd_i=1389375031"},{id:"6",title:"boAt Bassheads 152 in Ear Wired Earphones with Mic(Active Black)",price:499,image:"https://images-na.ssl-images-amazon.com/images/I/61wO4-s%2ByYL._SL1500_.jpg",rating:3,link:"https://www.amazon.in/BassHeads-152-ToneSecure-Braided-Earphones/dp/B07KY3FNQP/ref=lp_17434874031_1_10"},{id:"7",title:"LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray) (2020 Model)",price:16999,image:"https://images-na.ssl-images-amazon.com/images/I/71uKCdULRgL._SL1500_.jpg",rating:4,link:"https://www.amazon.in/LG-inches-Ready-Smart-32LM563BPTC/dp/B08DPLCM6T/ref=pd_sbs_2?pd_rd_w=Gaw1O&pf_rd_p=99c630ba-ffa4-4940-9542-3945145447d6&pf_rd_r=QDJECNZNN2SZAP0C4JWX&pd_rd_r=44947d2b-175e-450b-8001-7eb8a817c3ef&pd_rd_wg=CTAC2&pd_rd_i=B08DPLCM6T&psc=1"},{id:"8",title:"Fire-Boltt Blast 1400 Over -Ear Bluetooth Wireless Headphones with 25H Playtime, Thumping Bass, Lightweight Foldable Compact Design with Google/Siri Voice Assistance",price:2999,image:"https://images-na.ssl-images-amazon.com/images/I/71lczMQC1bL._SL1178_.jpg",rating:5,link:"https://www.amazon.in/dp/B0814GJNKG/ref=sspa_dk_detail_5?psc=1&pd_rd_i=B0814GJNKG&pd_rd_w=TMKfJ&pf_rd_p=b9175453-ca9b-41ce-82bc-58f20ea9bb05&pd_rd_wg=5m8KO&pf_rd_r=T8MVDNW1MK73HTZR9EFB&pd_rd_r=591c5c1c-c117-481e-84ab-465a35dd9194&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyV09XQUhIVkNKQTlHJmVuY3J5cHRlZElkPUEwMDQ4NDQwRTNDSzRYNFhIV1o2JmVuY3J5cHRlZEFkSWQ9QTA1NTEzNzkxUEtRTTZaUE9NS05NJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="},{id:"9",title:"Samsung 198 L 5 Star Inverter Direct-Cool Single Door Refrigerator (RR21T2G2WCR/HL, Camellia Purple)",price:16890,image:"https://images-na.ssl-images-amazon.com/images/I/71VtXOqsI3L._SL1500_.jpg",rating:4,link:"https://www.amazon.in/dp/B084ZX7XS4/ref=s9_acsd_al_bw_c2_x_3_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-6&pf_rd_r=YQV1ADYW5GCNGC81WBXG&pf_rd_t=101&pf_rd_p=1981a149-130e-4325-8044-55d733feaceb&pf_rd_i=1380365031"},{id:"10",title:"LG 10.5/7.0 Kg Inverter Wi-Fi Washing Machine (FHD1057SWS, Silver VCM, AI DD)",price:62799,image:"https://images-na.ssl-images-amazon.com/images/I/71-TVZxPy1L._SL1500_.jpg",rating:5,link:"https://www.amazon.in/LG-Inverter-Washing-Machine-FHD1057SWS/dp/B084HSWT32/ref=sr_1_3_sspa?dchild=1&pd_rd_r=41be671e-f1d9-4976-a485-9ffe488c55e6&pd_rd_w=B4Msy&pd_rd_wg=VSoD1&pf_rd_p=1e7b26ca-07bf-4ef9-9db1-fe458cc99c95&pf_rd_r=GQ62SXKYDTY3MAT35E45&qid=1615473446&refinements=p_85%3A10440599031&rps=1&s=kitchen&sr=1-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSEIzS0FIWENKRlM0JmVuY3J5cHRlZElkPUEwMjI5NzU4MzBKUVNZUUVOSU5XSyZlbmNyeXB0ZWRBZElkPUEwMjE0Mzg1MjQ2WEM4WjZLMzhUMCZ3aWRnZXROYW1lPXNwX2F0Zl9icm93c2UmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"},{id:"11",title:"Godrej 1.5 Ton 5 Star Inverter Split AC (Copper, Anti Bacterial Filter, 2020 Model, GIC 18HTC5-WTA, White)",price:36699,image:"https://images-na.ssl-images-amazon.com/images/I/51aw6Y%2BJOyL._SL1000_.jpg",rating:4,link:"https://www.amazon.in/dp/B083NYWBWK/ref=sspa_dk_detail_5?psc=1&pd_rd_i=B083NYWBWK&pd_rd_w=TTHPc&pf_rd_p=b9175453-ca9b-41ce-82bc-58f20ea9bb05&pd_rd_wg=Cwvnh&pf_rd_r=72Y0HB1S6GNQTYZAB01M&pd_rd_r=e380fccc-96c5-487e-af46-835e4e92ddc3&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzS0tCNjVESVNDN1k1JmVuY3J5cHRlZElkPUEwNDc5NDA5MkNSMkY4MDNRMTk1SCZlbmNyeXB0ZWRBZElkPUExMDI1Njg5MlBEWFFTWTNSQ1pLUiZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="},{id:"12",title:"Casa Copenhagen Ergonomic Desk Chair High Engineered Frame Durable and Adjustable Office Chair Modern Executive Chair Edition 21 with Armrests Lumbar Support - Dark Black",price:6999,image:"https://images-na.ssl-images-amazon.com/images/I/61hm-zBxxwL._SL1116_.jpg",rating:3,link:"https://www.amazon.in/Casa-Copenhagen-Ergonomic-Engineered-Adjustable/dp/B08WLWK4VD/ref=sr_1_7?_encoding=UTF8&dchild=1&pf_rd_i=mobile&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=dadfe156-3f7f-4288-a062-47f841f5195c&pf_rd_r=K46Y86AFQJ2043SVVYK6&pf_rd_s=merchandised-search-4&pf_rd_t=Gateway&qid=1615472477&refinements=p_36%3A400000-&s=home-furnishings&sr=1-7"}],A=function(e){Object(v.a)(a,e);var t=Object(w.a)(a);function a(e){var s;return Object(f.a)(this,a),(s=t.call(this,e)).state={items:I},s}return Object(N.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"home",children:Object(p.jsxs)("div",{className:"home__container",children:[Object(p.jsx)("img",{src:"https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg",className:"home__image",alt:"poster"}),Object(p.jsxs)("div",{className:"home__row",children:[Object(p.jsx)(C,{items:this.state.items[0]}),Object(p.jsx)(C,{items:this.state.items[1]}),Object(p.jsx)(C,{items:this.state.items[2]}),Object(p.jsx)(C,{items:this.state.items[3]})]}),Object(p.jsxs)("div",{className:"home__row",children:[Object(p.jsx)(C,{items:this.state.items[4]}),Object(p.jsx)(C,{items:this.state.items[5]}),Object(p.jsx)(C,{items:this.state.items[6]}),Object(p.jsx)(C,{items:this.state.items[7]})]}),Object(p.jsxs)("div",{className:"home__row",children:[Object(p.jsx)(C,{items:this.state.items[8]}),Object(p.jsx)(C,{items:this.state.items[9]}),Object(p.jsx)(C,{items:this.state.items[10]}),Object(p.jsx)(C,{items:this.state.items[11]})]})]})})}}]),a}(s.Component),E=a(10);a(71),a(72);var W=function(e){var t=e.cartItem,a=u(),s=Object(l.a)(a,2),c=(s[0].cart,s[1]);return Object(p.jsxs)("div",{className:"renderCartItem",children:[Object(p.jsx)("img",{src:t.image,className:"cartItem__image"}),Object(p.jsxs)("div",{className:"cartItem__details",children:[Object(p.jsx)("p",{className:"cartItem__title",children:t.title}),Object(p.jsx)("p",{className:"inStockStatus",children:"In stock"}),Object(p.jsx)("button",{onClick:function(){c({type:"REMOVE_FROM_CART",id:t.id})},className:"removeCartItem__button",children:"Remove from Cart"})]}),Object(p.jsx)("div",{className:"cartItem__price",children:Object(p.jsx)("strong",{children:new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(t.price)})})]})};var R=function(){var e=u(),t=Object(l.a)(e,2),a=t[0].cart,s=(t[1],0);return a.map((function(e){s+=e.price})),(null===a||void 0===a?void 0:a.length)>=2?Object(p.jsxs)("p",{children:["Subtotal (",null===a||void 0===a?void 0:a.length," items)",Object(p.jsx)("strong",{className:"subtotal__price",children:new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(s)})]}):Object(p.jsxs)("p",{children:["Subtotal (",null===a||void 0===a?void 0:a.length," item)",Object(p.jsx)("strong",{className:"subtotal__price",children:new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(s)})]})},G=(a(73),a(46)),T=a.n(G);var z=function(){var e=u(),t=Object(l.a)(e,2);return t[0].cart,t[1],Object(p.jsxs)("div",{className:"subtotal",children:[Object(p.jsxs)("div",{className:"subtotal__freeDelivery",children:[Object(p.jsx)(T.a,{className:"subtotal__checkIcon"}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"subtotal__freeDeliveryMessage",children:"Your order is eligible for FREE Delivery."}),Object(p.jsx)("br",{}),"Select this option at checkout.",Object(p.jsx)("span",{className:"subtotal__freeDeliveryMessage",children:" Details"})]})]}),Object(p.jsxs)("div",{className:"subtotal__main",children:[Object(p.jsx)("p",{className:"subtotal__priceDetails",children:Object(p.jsx)(R,{})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"checkbox"}),Object(p.jsx)("small",{children:" This order contains a gift. "})]})]}),Object(p.jsx)("button",{className:"subtotal__proceedButton",children:" Proceed to Buy"})]})};var L=function(){var e=u(),t=Object(l.a)(e,2),a=t[0],s=a.cart,c=a.user;return t[1],Object(p.jsxs)("div",{className:"checkout",children:[Object(p.jsxs)("div",{className:"checkout__ad",children:[Object(p.jsxs)("strong",{children:["Pay faster for all your shopping needs ",Object(p.jsx)("span",{className:"checkout__adAmazonPay",children:"with Amazon Pay balance"})]}),Object(p.jsx)("p",{children:"Get Instant refund on cancellations | Zero payment failures"})]}),Object(p.jsxs)("div",{className:"checkout__main",children:[Object(p.jsx)("div",{className:"checkout__left",children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{className:"checkout__email",children:["Hello, ",null===c||void 0===c?void 0:c.email]}),Object(p.jsx)("p",{className:"checkout__title",children:"Your Shopping Cart"}),s.map((function(e){return Object(p.jsx)(W,{cartItem:e})})),Object(p.jsx)("div",{className:"checkout__subtotal",children:Object(p.jsx)(R,{})})]})}),Object(p.jsx)("div",{className:"checkout__right",children:Object(p.jsx)(z,{})})]})]})};a(74);var D=function(){var e=Object(E.f)(),t=Object(s.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1],n=Object(s.useState)(""),r=Object(l.a)(n,2),o=r[0],d=r[1];return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)(_.b,{to:"/",children:Object(p.jsx)("img",{className:"login__logo",src:"https://thumbs.dreamstime.com/b/amazon-155631949.jpg"})}),Object(p.jsxs)("div",{className:"login__container",children:[Object(p.jsx)("p",{className:"login__title",children:"Sign-In"}),Object(p.jsxs)("form",{children:[Object(p.jsx)("h5",{children:"E-mail"}),Object(p.jsx)("input",{type:"text",value:c,onChange:function(e){return i(e.target.value)}}),Object(p.jsx)("h5",{children:"Password"}),Object(p.jsx)("input",{type:"password",value:o,onChange:function(e){return d(e.target.value)}}),Object(p.jsx)("button",{type:"submit",className:"login__signInButton",onClick:function(t){t.preventDefault(),O.signInWithEmailAndPassword(c,o).then((function(t){console.log("login successful "+t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]}),Object(p.jsx)("p",{className:"login__notice",children:"By signing-in, you agree to Amazon Clone's  Conditions of Use and Privacy Notice."})]}),Object(p.jsx)("p",{className:"login__newToAmazon",children:"New to Amazon?"}),Object(p.jsx)(_.b,{to:"/register",children:Object(p.jsx)("button",{className:"login__createAccountButton",children:"Create Your Account"})})]})};a(75);var M=function(){var e=Object(E.f)(),t=Object(s.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1],n=Object(s.useState)(""),r=Object(l.a)(n,2),o=r[0],d=r[1];return Object(p.jsxs)("div",{className:"registration",children:[Object(p.jsx)(_.b,{to:"/",children:Object(p.jsx)("img",{className:"registration__logo",src:"https://thumbs.dreamstime.com/b/amazon-155631949.jpg"})}),Object(p.jsxs)("div",{className:"registration__container",children:[Object(p.jsx)("p",{className:"registration__title",children:"Create Account"}),Object(p.jsxs)("form",{children:[Object(p.jsx)("h5",{children:"E-mail"}),Object(p.jsx)("input",{type:"text",value:c,onChange:function(e){return i(e.target.value)}}),Object(p.jsx)("h5",{children:"New Password"}),Object(p.jsx)("input",{type:"password",value:o,onChange:function(e){return d(e.target.value)},placeholder:"At least 6 characters"}),Object(p.jsx)("button",{type:"submit",className:"registration__createAccountButton",onClick:function(t){t.preventDefault(),O.createUserWithEmailAndPassword(c,o).then((function(t){console.log("registered successfully "+t),t&&e.push("/login")})).catch((function(e){return alert(e.message)}))},children:"Create your Amazon Account"})]}),Object(p.jsx)("p",{className:"register__notice",children:"By creating account, you agree to Amazon Clone's  Conditions of Use and Privacy Notice."}),Object(p.jsxs)("p",{className:"registration__haveAnAccount",children:["Already have an account? ",Object(p.jsx)(_.b,{to:"/login",className:"signIn__link",children:" Sign-In"})]})]})]})};var Z=function(){var e=u(),t=Object(l.a)(e,2);Object(r.a)(t[0]);var a=t[1];return Object(s.useEffect)((function(){O.onAuthStateChanged((function(e){console.log("The user is ",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(p.jsx)(_.a,{children:Object(p.jsx)("div",{className:"app",children:Object(p.jsxs)(E.c,{children:[Object(p.jsx)(E.a,{path:"/login",children:Object(p.jsx)(D,{})}),Object(p.jsx)(E.a,{path:"/register",children:Object(p.jsx)(M,{})}),Object(p.jsxs)(E.a,{path:"/checkout",children:[Object(p.jsx)(x,{}),Object(p.jsx)(L,{})]}),Object(p.jsxs)(E.a,{path:"/",children:[Object(p.jsx)(x,{}),Object(p.jsx)(A,{})]})]})})})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),i(e),n(e)}))},P=a(23),U=a(24),F=function(e,t){switch(t.type){case"ADD_TO_CART":return Object(U.a)(Object(U.a)({},e),{},{cart:[].concat(Object(P.a)(e.cart),[t.item])});case"REMOVE_FROM_CART":var a=e.cart.findIndex((function(e){return e.id===t.id})),s=Object(P.a)(e.cart);return a>=0?s.splice(a,1):console.warn("Cant remove product (id: ".concat(t.id,")as it is not in cart! ")),Object(U.a)(Object(U.a)({},e),{},{cart:s});case"SET_USER":return Object(U.a)(Object(U.a)({},e),{},{user:t.user});default:return e}};n.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(b,{initialState:{cart:[],user:null},reducer:F,children:Object(p.jsx)(Z,{})})}),document.getElementById("root")),V()}},[[77,1,2]]]);
//# sourceMappingURL=main.fb4453dc.chunk.js.map