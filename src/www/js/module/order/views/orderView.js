
define([
    'common/base/base_view',
    'text!module/order/templates/order.html',
    'marionette'
],function(BaseView, tpl, mn) {
    return BaseView.extend({
        id : "order",

        template : _.template(tpl),

        // _mouseLock : false,
        // _isShow : false,

        // key : selector
        ui : {
            productDetail: ".product-detail"
        },
        //事件添加
        events : {
            "tap @ui.productDetail": "onClickProductDetail"
        },

        findCodeId: function(domObj){
            if(domObj.hasClass("product-detail")){
                return null;
            }
            var codeId = domObj.attr("data-codeid");
            return codeId ? codeId : this.findCodeId(domObj.parent());

        },
        onClickProductDetail: function(e){
            e.stopPropagation();
            e.preventDefault();
            var target = $(e.target);
            var codeId = this.findCodeId(target);

            if(codeId){
                app.navigate("order/detaill/"+codeId, {replace: true, trigger: true});
            }
        },

        /**初始化**/
        initialize : function(){
        },
        //在开始渲染模板前执行，此时当前page没有添加到document
        onBeforeRender : function(){

        },
        //渲染完模板后执行,此时当前page没有添加到document
        onRender : function(){

        },
        //页间动画已经完成，当前page已经加入到document
        pageIn : function(){
        },

        /**页面关闭时调用，此时不会销毁页面**/
        close : function(){
        },

        //当页面销毁时触发
        onDestroy : function(){
//            console.log("footer destroy");
        }

    });
});