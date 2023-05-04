"use strict";(self["webpackChunknew_project"]=self["webpackChunknew_project"]||[]).push([[274],{5117:function(t,a,e){var i=e(6330),s=TypeError;t.exports=function(t,a){if(!delete t[a])throw s("Cannot delete property "+i(a)+" of "+i(t))}},541:function(t,a,e){var i=e(2109),s=e(7908),o=e(6244),d=e(3658),c=e(5117),r=e(7207),l=1!==[].unshift(0),n=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();i({target:"Array",proto:!0,arity:1,forced:l||n},{unshift:function(t){var a=s(this),e=o(a),i=arguments.length;if(i){r(e+i);var l=e;while(l--){var n=l+i;l in a?a[n]=a[l]:c(a,n)}for(var p=0;p<i;p++)a[p]=arguments[p]}return d(a,e+i)}})},4677:function(t,a,e){var i=e(9876),s=e(594),o=e(6294);const d=(0,o.Z)();a["Z"]=(0,i.Q_)("cartStore",{state:()=>({nowPage:"",pageCount:1,order:{user:{},products:{}},cartList:[]}),actions:{getCartPage(t="cart"){switch(this.nowPage=t,t){case"cart":this.pageCount=1;break;case"order":this.pageCount=2;break;case"checkout":this.pageCount=3;break;case"finished":this.pageCount=4,setTimeout((()=>{this.pageCount++}),1500);break}},getOrder(t){const a=`https://vue3-course-api.hexschool.io/api/ldd-api/order/${t}`;s.Z.get(a).then((t=>{const a=t.data.order;this.order=a}))},addToCart(t,a=1){const e="https://vue3-course-api.hexschool.io/api/ldd-api/cart";d.loadingItem=t.id;const i={product_id:t.id,qty:a};s.Z.post(e,{data:i}).then((t=>{d.loadingItem="",this.getCartData()}))},getCartData(){d.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/ldd-api/cart";s.Z.get(t).then((t=>{t.data.success&&(d.isLoading=!1,this.cartList=t.data.data.carts)}))},delProductFromCart(t){const a=`https://vue3-course-api.hexschool.io/api/ldd-api/cart/${t}`;s.Z["delete"](a).then((t=>{this.getCartData()}))},updateCart(t){d.isLoading=!0,d.loadingItem=t.id;const a={product_id:t.product_id,qty:t.qty},e=`https://vue3-course-api.hexschool.io/api/ldd-api/cart/${t.id}`;this.$http.put(e,{data:a}).then((()=>{d.isLoading=!1,d.loadingItem="",this.getCartData()}))}}})},4238:function(t,a,e){e(541),e(7658);var i=e(9876),s=e(594),o=e(6294),d=e(6904);const c=(0,o.Z)();a["Z"]=(0,i.Q_)("productStore",{state:()=>({productList:[],productCategoryList:[],pagination:{},categorys:[],categoryNow:"全部商品",product:{},similarList:[],animalList:[]}),actions:{getProducts(t=1){c.isLoading=!0;const a=`https://vue3-course-api.hexschool.io/api/ldd-api/products?page=${t}`;s.Z.get(a).then((t=>{t.data.success&&(c.isLoading=!1,console.log(t),this.productList=t.data.products,this.productCategoryList=this.productList,this.pagination=t.data.pagination,this.getCategoryList())}))},categoryChange(t){this.categoryNow=t,this.productCategoryList="全部商品"===t?this.productList:this.productList.filter((a=>a.category===t))},getCategoryList(){const t=this.productList.map((t=>t.category));this.categorys=Array.from(new Set(t)),this.categorys.unshift("全部商品")},getProduct(t){c.isLoading=!0;const a=`https://vue3-course-api.hexschool.io/api/ldd-api/product/${t}`;s.Z.get(a).then((t=>{t.data.success&&(c.isLoading=!1,this.product=t.data.product,this.getSimilar())}))},getSimilar(){this.similarList=[],c.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/ldd-api/products/all";s.Z.get(t).then((t=>{if(t.data.success){c.isLoading=!1;const a=t.data.products.filter((t=>t.category===this.product.category)),e=a.findIndex((t=>t.id===this.product.id)),i=[];for(let t=0;t<a.length;t++)i.push(t);i.sort((()=>.5-Math.random()));const s=i.findIndex((t=>t===e));i.splice(s,1),this.similarList.push(a[i[0]]),this.similarList.push(a[i[1]]),this.similarList.push(a[i[2]])}}))},getAnimalList(){c.isLoading=!0,d.db.ref("/animals").once("value").then((t=>{c.isLoading=!1,this.animalList=t.val()}))}}})},274:function(t,a,e){e.r(a),e.d(a,{default:function(){return lt}});var i=e(6252),s=e(3577),o=e(9963);const d=t=>((0,i.dD)("data-v-66bda8e8"),t=t(),(0,i.Cn)(),t),c=d((()=>(0,i._)("div",{class:"loadingio-spinner-ripple-o01nobacpbk"},[(0,i._)("div",{class:"ldio-0zlqpdibb6ki"},[(0,i._)("div"),(0,i._)("div")])],-1))),r={class:"container py-6"},l={class:"row justify-content-center g-3 g-md-5","data-aos":"fade-right","data-aos-anchor-placement":"top-bottom"},n={class:"col-md-6 col-lg-5",style:{height:"500px"}},p=["src"],u={class:"col-md-6 col-lg-5"},h={class:"row"},g={class:"col-12"},m={class:"fw-bold-bottom pb-3"},b=d((()=>(0,i._)("br",null,null,-1))),v={class:"text-white bg-secondary rounded fs-7 px-2 py-1"},f={class:"col-12"},y={class:"border-bottom"},_=d((()=>(0,i._)("p",{class:"mb-0"},"【產品描述】",-1))),w={class:"text-success lh-lg"},k={key:0,class:"mb-3"},x=(0,i.uE)('<span data-v-66bda8e8>尺寸: </span><div class="form-check form-check-inline" data-v-66bda8e8><input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked data-v-66bda8e8><label class="form-check-label" for="exampleRadios1" data-v-66bda8e8> S </label></div><div class="form-check form-check-inline" data-v-66bda8e8><input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" data-v-66bda8e8><label class="form-check-label" for="exampleRadios2" data-v-66bda8e8> M </label></div><div class="form-check form-check-inline" data-v-66bda8e8><input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" data-v-66bda8e8><label class="form-check-label" for="exampleRadios3" data-v-66bda8e8> L </label></div><div class="form-check form-check-inline" data-v-66bda8e8><input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" data-v-66bda8e8><label class="form-check-label" for="exampleRadios3" data-v-66bda8e8> XL </label></div>',5),C=[x],L={class:"row"},q={class:"col-6"},I={class:"input-group mb-3"},Z=["disabled"],D={class:"col-6"},R={class:"fs-5 text-end mb-1"},j={class:"d-flex mt-3"},P=["disabled"],T={key:0},z={key:1,class:"spinner-border spinner-border-sm text-white",role:"status"},U=d((()=>(0,i._)("span",{class:"visually-hidden"},null,-1))),$=[U],M=d((()=>(0,i._)("h3",{class:"h4 text-center mt-md-6 mt-5 similarTitle"},"為您推薦相似",-1))),S={class:"row row-cols-md-3 row-cols-1 g-3 g-lg-5 mt-3"},W=["data-aos-delay"],N={class:"card h-100"},A={class:"container-img"},E=["src","alt"],O={class:"card-body d-flex flex-column"},H={class:"card-title"},Q={class:"text-white bg-secondary rounded fs-8 px-1 ms-2"},Y={class:"d-flex flex-column justify-content-between h-100"},B={class:"card-text mb-1 fs-7 overflow-hidden",style:{"text-overflow":"ellipsis",display:"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical"}},F={class:"card-text text-end"},K={class:"card-footer"},V=["onClick"],X={class:"d-flex align-items-center justify-content-center",style:{width:"24px",height:"24px"}},G={key:1,class:"spinner-grow text-primary spinner-grow-sm",role:"status"},J=d((()=>(0,i._)("span",{class:"visually-hidden"},null,-1))),tt=[J];function at(t,a,e,d,x,U){const J=(0,i.up)("LoadingOverlay"),at=(0,i.up)("font-awesome-icon"),et=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(J,{active:t.isLoading},{default:(0,i.w5)((()=>[c])),_:1},8,["active"]),(0,i._)("div",r,[(0,i._)("div",l,[(0,i._)("div",n,[(0,i._)("img",{src:t.product.imageUrl,alt:"",class:"w-100 h-100 object-fit-cover"},null,8,p)]),(0,i._)("div",u,[(0,i._)("div",h,[(0,i._)("div",g,[(0,i._)("h2",m,[(0,i.Uk)((0,s.zw)(t.product.title),1),b,(0,i._)("span",v,(0,s.zw)(t.product.category),1)])]),(0,i._)("div",f,[(0,i._)("div",y,[_,(0,i._)("div",w,(0,s.zw)(t.product.description),1),"衣服"===t.product.category?((0,i.wg)(),(0,i.iD)("div",k,C)):(0,i.kq)("",!0),(0,i._)("div",L,[(0,i._)("div",q,[(0,i._)("div",I,[(0,i._)("a",{href:"#",onClick:a[0]||(a[0]=(0,o.iM)((t=>U.qtyCount(!0)),["prevent"])),class:(0,s.C_)(["input-group-text btn btn-primary",{disabled:t.loadingItem}]),id:"basic-addon1"},[(0,i.Wm)(at,{icon:"fa-solid fa-caret-up"})],2),(0,i.wy)((0,i._)("input",{type:"number",class:"form-control",placeholder:"你想購買的數量","aria-label":"Username","aria-describedby":"basic-addon1","onUpdate:modelValue":a[1]||(a[1]=t=>x.qty=t),disabled:""!==t.loadingItem},null,8,Z),[[o.nr,x.qty]]),(0,i._)("a",{href:"#",onClick:a[2]||(a[2]=(0,o.iM)((t=>U.qtyCount(!1)),["prevent"])),class:(0,s.C_)(["input-group-text btn btn-primary",{disabled:t.loadingItem}]),id:"basic-addon1"},[(0,i.Wm)(at,{icon:"fa-solid fa-caret-down"})],2)])]),(0,i._)("div",D,[(0,i._)("div",R,"NT "+(0,s.zw)(t.product.price),1)])])])]),(0,i._)("div",j,[(0,i._)("button",{type:"button",onClick:a[3]||(a[3]=a=>t.addToCart(t.product,x.qty)),class:"btn btn-primary px-3 d-block ms-auto",disabled:0===x.qty||""!==t.loadingItem,style:{width:"150px"}},[t.loadingItem?((0,i.wg)(),(0,i.iD)("div",z,$)):((0,i.wg)(),(0,i.iD)("div",T,[(0,i.Wm)(at,{icon:"fa-solid fa-cart-plus"}),(0,i.Uk)(" 加入購物車 ")]))],8,P)])])])]),M,(0,i._)("div",S,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.similarList,((a,e)=>((0,i.wg)(),(0,i.iD)("div",{class:"col",key:a.id,"data-aos":"fade-up","data-aos-anchor-placement":"top-bottom","data-aos-delay":2*e+"00","data-aos-duration":"1500"},[(0,i._)("div",N,[(0,i._)("div",A,[(0,i._)("img",{src:a.imageUrl,class:"card-img-top object-fit-cover",alt:a.title,style:{height:"200px"}},null,8,E)]),(0,i._)("div",O,[(0,i._)("h5",H,[(0,i.Uk)((0,s.zw)(a.title)+" ",1),(0,i._)("span",Q,(0,s.zw)(a.category),1)]),(0,i._)("div",Y,[(0,i._)("p",B,(0,s.zw)(a.description),1),(0,i._)("p",F,"$NT "+(0,s.zw)(a.price),1)])]),(0,i._)("div",K,[(0,i.Wm)(et,{to:`/userboard/productList/${a.id}`,onClick:(0,o.iM)((e=>{t.getProduct(a.id)}),["prevent"]),class:(0,s.C_)(["btn btn-outline-primary",{"stretched-link":t.loadingItem!==a.id&&""===t.loadingItem}])},{default:(0,i.w5)((()=>[(0,i.Uk)("查看商品")])),_:2},1032,["to","onClick","class"]),(0,i._)("a",{href:"#",onClick:(0,o.iM)((e=>t.addToCart(a)),["prevent"]),class:(0,s.C_)(["btn btn-outline-primary position-absolute cartBtn fs-4 d-block",{disabled:t.loadingItem===a.id}])},[(0,i._)("div",X,[t.loadingItem!==a.id?((0,i.wg)(),(0,i.j4)(at,{key:0,icon:"fa-solid fa-cart-plus"})):((0,i.wg)(),(0,i.iD)("div",G,tt))])],10,V)])])],8,W)))),128))])])],64)}var et=e(9876),it=e(4677),st=e(4238),ot=e(6294),dt={data(){return{qty:1}},inject:["pushMessageState","emitter"],props:["id"],computed:{...(0,et.rn)(st.Z,["product","similarList"]),...(0,et.rn)(ot.Z,["isLoading","loadingItem"])},methods:{...(0,et.nv)(it.Z,["addToCart"]),...(0,et.nv)(st.Z,["getProduct"]),qtyCount(t){t?this.qty++:this.qty>0?this.qty--:this.qty=0}},created(){this.getProduct(this.id)}},ct=e(3744);const rt=(0,ct.Z)(dt,[["render",at],["__scopeId","data-v-66bda8e8"]]);var lt=rt}}]);
//# sourceMappingURL=274.ee6ce552.js.map