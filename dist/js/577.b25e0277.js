"use strict";(self["webpackChunknew_project"]=self["webpackChunknew_project"]||[]).push([[577],{4677:function(t,e,a){var r=a(9876),s=a(594),i=a(6294);const o=(0,i.Z)();e["Z"]=(0,r.Q_)("cartStore",{state:()=>({nowPage:"",pageCount:1,order:{user:{},products:{}},cartList:[]}),actions:{getCartPage(t="cart"){switch(this.nowPage=t,t){case"cart":this.pageCount=1;break;case"order":this.pageCount=2;break;case"checkout":this.pageCount=3;break;case"finished":this.pageCount=4,setTimeout((()=>{this.pageCount++}),1500);break}},getOrder(t){const e=`https://vue3-course-api.hexschool.io/api/ldd-api/order/${t}`;s.Z.get(e).then((t=>{const e=t.data.order;this.order=e}))},addToCart(t,e=1){const a="https://vue3-course-api.hexschool.io/api/ldd-api/cart";o.loadingItem=t.id;const r={product_id:t.id,qty:e};s.Z.post(a,{data:r}).then((t=>{o.loadingItem="",this.getCartData()}))},getCartData(){o.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/ldd-api/cart";s.Z.get(t).then((t=>{t.data.success&&(o.isLoading=!1,this.cartList=t.data.data.carts)}))},delProductFromCart(t){const e=`https://vue3-course-api.hexschool.io/api/ldd-api/cart/${t}`;s.Z["delete"](e).then((t=>{this.getCartData()}))},updateCart(t){o.isLoading=!0,o.loadingItem=t.id;const e={product_id:t.product_id,qty:t.qty},a=`https://vue3-course-api.hexschool.io/api/ldd-api/cart/${t.id}`;this.$http.put(a,{data:e}).then((()=>{o.isLoading=!1,o.loadingItem="",this.getCartData()}))}}})},6294:function(t,e,a){var r=a(9876);e["Z"]=(0,r.Q_)("statusStore",{state:()=>({isLoading:!1,loadingItem:""})})},1577:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var r=a(6252),s=a(3577);const i=(0,r._)("h2",{class:"h3 text-black text-center py-2 mb-0"},"感謝您的購買",-1),o={class:"text-center"};function d(t,e,a,d,c,n){return(0,r.wg)(),(0,r.iD)(r.HY,null,[i,(0,r._)("p",o,[(0,r.Uk)('您的訂單 "'+(0,s.zw)(t.order.id)+'" ',1),(0,r._)("span",{class:(0,s.C_)({"text-danger":!t.order.is_paid})},(0,s.zw)(t.order.is_paid?"已完成付款":"還未完成付款"),3)])],64)}var c=a(9876),n=a(4677),h={computed:{...(0,c.rn)(n.Z,["order"])},methods:{...(0,c.nv)(n.Z,["getCartPage","getOrder"]),finishedOrder(t){t&&setTimeout((()=>{this.getNowPage("finishOrder")}),1500)}},created(){const t=this.$route.params.orderId;this.getOrder(t),this.getCartPage("finished"),this.finishedOrder(this.order.is_paid)}},p=a(3744);const u=(0,p.Z)(h,[["render",d]]);var g=u}}]);
//# sourceMappingURL=577.b25e0277.js.map