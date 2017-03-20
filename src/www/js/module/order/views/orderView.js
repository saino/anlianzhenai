
define([
    'common/base/base_view',
    'text!module/order/templates/order.html',
    'marionette',
    'module/order/model/orderModel'
],function(BaseView, tpl, mn, orderModel) {
    return BaseView.extend({
        id : "order",

        template : _.template(tpl),
        forever: true,

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
            var self = this;
            var options = {
                userId: "yangchengqiang"
            }
            orderModel.getOrderList(options, function(dataList){
                var data = dataList.anLianProposalVOs;
                var orderItemHtml = "";
                for(var i=0; i<data.length; i++){
                    var status = "";
                    if(data[i].status == "51"){
                        status = "已提交";
                    }
                    if(data[i].status == "102"){
                     
                        status = "拒保";
                    }if(data[i].status == "103"){
                        status = "撤单";
                    }
                    if(data[i].status == "104"){
                        status = "转账收费中";
                    }
                    if(data[i].status == "108"){
                        status = "转账收费成功";
                    }
                    if(data[i].status == "105"){
                        status = "转账收费失败";
                    }
                    if(data[i].status == "201"){
                        status = "已承保";
                    }

                    orderItemHtml += '<div class="order-item" data-codeId="'+data[i].proposalCode+'">'+
                                        '<div class="order-code">'+
                                            '<div class="order-code-num">订单号：'+data[i].proposalCode+'</div>'+
                                            '<div class="order-code-status">'+status+'</div>'+
                                        '</div>'+
                                        '<div class="banner_bottom-content"><div class="banner_bottom"></div></div>'+
                                        '<div class="order-code">'+
                                            '<div class="order-code-num">时间：'+data[i].generatedDate.replace(/T/," ")+'</div>'+
                                            // '<div class="order-code-status order-from">'+data[i].form+'</div>'+
                                        '</div>'+
                                        '<div class="banner_bottom-content"><div class="banner_bottom"></div></div>'+
                                        '<div class="order-content">'+
                                            '<div class="order-content-item-left">安联臻爱医疗保险</div>'+
                                            '<div class="order-content-item-right order-logo"></div>'+
                                            '<div class="order-content-item-left order-money">保费: '+data[i].totalPremium+'</div>'+
                                            '<div class="order-content-item-right">份数：1</div>'+
                                            '<div class="order-content-item-left">投保人：'+data[i].policyHolder.policyHolderName+'</div>'+
                                            '<div class="order-content-item-right">被保人：'+data[i].insuredList[0].insuredName+'</div>'+
                                        '</div>'+
                                    '</div>';
                }
                self.ui.productDetail.html(orderItemHtml);
            },function(error){
                console.log("接口调用失败",error);
            });
        },
        show: function(){
           

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