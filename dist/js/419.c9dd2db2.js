"use strict";(self["webpackChunknew_project"]=self["webpackChunknew_project"]||[]).push([[419],{4677:function(t,e,a){var s=a(9876),r=a(594),o=a(6294);const c=(0,o.Z)();e["Z"]=(0,s.Q_)("cartStore",{state:()=>({nowPage:"",pageCount:1,order:{user:{},products:{}},cartList:[]}),actions:{getCartPage(t="cart"){switch(this.nowPage=t,t){case"cart":this.pageCount=1;break;case"order":this.pageCount=2;break;case"checkout":this.pageCount=3;break;case"finished":this.pageCount=4,setTimeout((()=>{this.pageCount++}),1500);break}},getOrder(t){const e=`https://vue3-course-api.hexschool.io/api/ldd-api/order/${t}`;r.Z.get(e).then((t=>{const e=t.data.order;this.order=e}))},addToCart(t,e=1){const a="https://vue3-course-api.hexschool.io/api/ldd-api/cart";c.loadingItem=t.id;const s={product_id:t.id,qty:e};r.Z.post(a,{data:s}).then((t=>{c.loadingItem="",this.getCartData()}))},getCartData(){c.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/ldd-api/cart";r.Z.get(t).then((t=>{t.data.success&&(c.isLoading=!1,this.cartList=t.data.data.carts)}))},delProductFromCart(t){const e=`https://vue3-course-api.hexschool.io/api/ldd-api/cart/${t}`;r.Z["delete"](e).then((t=>{this.getCartData()}))},updateCart(t){c.isLoading=!0,c.loadingItem=t.id;const e={product_id:t.product_id,qty:t.qty},a=`https://vue3-course-api.hexschool.io/api/ldd-api/cart/${t.id}`;this.$http.put(a,{data:e}).then((()=>{c.isLoading=!1,c.loadingItem="",this.getCartData()}))}}})},6294:function(t,e,a){var s=a(9876);e["Z"]=(0,s.Q_)("statusStore",{state:()=>({isLoading:!1,loadingItem:""})})},7419:function(t,e,a){a.r(e),a.d(e,{default:function(){return H}});var s=a(6252),r=a(3577);const o=t=>((0,s.dD)("data-v-e6999ac0"),t=t(),(0,s.Cn)(),t),c=o((()=>(0,s._)("h2",{class:"h3 text-black text-center py-2 mb-0"},"確認訂單",-1))),d={class:"row g-3 justify-content-center"},i={class:"col-md-6"},n={class:"table"},l=o((()=>(0,s._)("th",{scope:"row"},"下單日期：",-1))),u=o((()=>(0,s._)("th",{scope:"row"},"訂單編號：",-1))),p=o((()=>(0,s._)("th",{scope:"row"},"顧客姓名：",-1))),h=o((()=>(0,s._)("th",{scope:"row"},"聯絡電話：",-1))),g=o((()=>(0,s._)("th",{scope:"row"},"電子郵件：",-1))),_=o((()=>(0,s._)("th",{scope:"row"},"地址：",-1))),v=o((()=>(0,s._)("th",{scope:"row"},"是否付款：",-1))),w=o((()=>(0,s._)("th",{scope:"row"},"訂單金額：",-1))),m={class:"d-flex justify-content-between"},b={class:"mb-0"},f={class:"collapse px-2",id:"collapseOrder"},C=o((()=>(0,s._)("h3",{class:"h6 col-12 fw-bold"},"購買商品",-1))),x={class:"row fw-normal"},$=(0,s.uE)('<div class="col-6" data-v-e6999ac0><p data-v-e6999ac0>商品詳情</p></div><div class="col-3" data-v-e6999ac0><p class="text-center" data-v-e6999ac0>數量</p></div><div class="col-3" data-v-e6999ac0><p class="text-center" data-v-e6999ac0>小計</p></div>',3),y={class:"col-6"},k={class:"d-flex align-items-center justify-content-around"},z=["src"],D={class:"fs-8 fs-md-7 mb-0"},Z={class:"col-3"},j={class:"d-flex align-items-center justify-content-center h-100"},I=o((()=>(0,s._)("div",{class:"col-3"},[(0,s._)("div",{class:"d-flex align-items-center justify-content-center h-100"},[(0,s._)("span",null,"NT$ 999")])],-1))),O={class:"d-flex justify-content-end pb-3 px-2"};function L(t,e,a,o,L,P){return(0,s.wg)(),(0,s.iD)(s.HY,null,[c,(0,s._)("div",d,[(0,s._)("div",i,[(0,s._)("table",n,[(0,s._)("tbody",null,[(0,s._)("tr",null,[l,(0,s._)("td",null,(0,r.zw)(P.timeChange(t.order.create_at)),1)]),(0,s._)("tr",null,[u,(0,s._)("td",null,(0,r.zw)(t.order.id),1)]),(0,s._)("tr",null,[p,(0,s._)("td",null,(0,r.zw)(t.order.user.name),1)]),(0,s._)("tr",null,[h,(0,s._)("td",null,(0,r.zw)(t.order.user.tel),1)]),(0,s._)("tr",null,[g,(0,s._)("td",null,(0,r.zw)(t.order.user.email),1)]),(0,s._)("tr",null,[_,(0,s._)("td",null,(0,r.zw)(t.order.user.address),1)]),(0,s._)("tr",null,[v,(0,s._)("td",{class:(0,r.C_)({"text-seccess":t.order.is_paid,"text-danger":!t.order.is_paid})},(0,r.zw)(t.order.is_paid?"已付款":"未付款"),3)]),(0,s._)("tr",null,[w,(0,s._)("td",null,[(0,s._)("div",m,[(0,s._)("p",b,"NT$ "+(0,r.zw)(t.order.total),1),(0,s._)("i",{class:(0,r.C_)(["bi bi-caret-up p-1 toggle-btn",{active:L.status.open}]),onClick:e[0]||(e[0]=t=>L.status.open=!L.status.open),"data-bs-toggle":"collapse","data-bs-target":"#collapseOrder"},null,2)])])])])]),(0,s._)("div",f,[C,(0,s._)("div",x,[$,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.order.products,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"row g-2 mb-2 fs-8 fs-md-7",key:t.id},[(0,s._)("div",y,[(0,s._)("div",k,[(0,s._)("img",{src:t.product.imageUrl,class:"object-fit-cover orderImg",alt:""},null,8,z),(0,s._)("h4",D,(0,r.zw)(t.product.title),1)])]),(0,s._)("div",Z,[(0,s._)("div",j,[(0,s._)("span",null,(0,r.zw)(t.qty),1)])]),I])))),128))])]),(0,s._)("div",O,[(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=e=>P.payOrder(t.order.id))},"確認付款")])])])],64)}a(7658);var P=a(9876),S=a(4677),q={data(){return{status:{open:!1}}},computed:{...(0,P.rn)(S.Z,["order"])},methods:{...(0,P.nv)(S.Z,["getCartPage","getOrder"]),timeChange(t){const e=new Date(1e3*t),a=e.getFullYear(),s=e.getMonth(),r=e.getDate(),o=e.getHours(),c=e.getMinutes()>=10?e.getMinutes():`0${e.getMinutes()}`,d=e.getSeconds()>=10?e.getSeconds():`0${e.getSeconds()}`;return`${a}/${s}/${r} ${o}:${c}:${d}`},payOrder(t){const e=`https://vue3-course-api.hexschool.io/api/ldd-api/pay/${t}`;this.$http.post(e).then((e=>{e.data.success&&(this.getOrder(t),this.$router.push(`/userboard/cartpage/finished/${t}`))}))}},created(){const t=this.$route.params.orderId;this.getOrder(t),this.getCartPage("checkout")}},M=a(3744);const T=(0,M.Z)(q,[["render",L],["__scopeId","data-v-e6999ac0"]]);var H=T}}]);
//# sourceMappingURL=419.c9dd2db2.js.map