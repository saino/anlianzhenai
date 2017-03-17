// 文件名称: footer.js
//
// 创 建 人: chenshy
// 创建日期: 2015/7/24 14:08
// 描    述: footer.js
define([
    'common/base/base_view',
    'text!module/order/templates/orderDetaill.html',
    'marionette',
    'module/order/model/orderModel'
],function(BaseView, tpl, mn, orderModel) {
    return BaseView.extend({
        id : "orderDetaill",

        template : _.template(tpl),

        // _mouseLock : false,
        // _isShow : false,

        // key : selector
        ui : {
            productDetail: ".product-detail",
            goBack: ".go-back",
        },
        //事件添加
        events : {
            "tap @ui.productDetail": "onClickProductDetail",
            "tap @ui.goBack": "onClickGoBack"
        },
        onClickGoBack: function(e){
            e.stopPropagation();
            e.preventDefault();
            app.goBack();
        },

        onClickProductDetail: function(e){
            e.stopPropagation();
            e.preventDefault();
            console.log(e.target);
            var target = $(e.target);
            if(target.hasClass("order-msg")){  
                var targetNextSbiling = target.next();
                targetNextSbiling. slideToggle();
                console.log(target, targetNextSbiling);
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
        show: function(){
            var self = this;
            console.log(this.getOption("codeId"));
            orderModel.getOrderDetail(self.getOption("codeId"), function(data){
                console.log("获取订单详情成功:", data);
            },function(err){
                console.log("获取订单详情失败", err);
            });
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