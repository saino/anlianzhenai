
define([
    'common/base/base_view',
    'text!module/order/templates/order.html',
    'marionette',
    'module/order/model/orderModel',
    'common/views/circle'
],function(BaseView, tpl, mn, orderModel, loadingCircle) {
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
                userId: window.sessionStorage.openId
            }
            LoadingCircle && LoadingCircle.start();
            orderModel.getOrderList(options, function(dataList){
                LoadingCircle && LoadingCircle.end();
                var data = dataList.anLianProposalVOs;
                utils.config.orderList = data;
                var orderItemHtml = "";
                console.log(dataList);
                for(var i=0; i<data.length; i++){
                    var status = "";
                    if(data[i].status == "51"){
                        status = "待支付";
                    }
                    if(data[i].status == "102"){
                     
                        status = "拒保";
                    }if(data[i].status == "103"){
                        status = "撤单";
                    }
                    if(data[i].status == "104"){
                        status = "待支付";
                    }
                    if(data[i].status == "108"){
                        status = "已承保";
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
                LoadingCircle && LoadingCircle.end();
                console.log("接口调用失败",error);
            });
        },
        show: function(){
           // var alipay = '<form id="alipaysubmit" name="alipaysubmit" action="https://mapi.alipay.com/gateway.do?_input_charset=utf-8" method="get"><input type="hidden" name="_input_charset" value="utf-8"/><input type="hidden" name="subject" value="安联臻爱医疗保险"/><input type="hidden" name="sign" value="NiY5nDALBpHHSbSa7FvNlJvsOGHB/zEfV7jHP7GN/Yz1JipQ0WYhLtOJd7tP/mvM0aTm0hJB60InQVQ8m84NOygWSgtf231I9VVgYs+DWW+MgBfBaf6ZzoyqD5jUXbOE6kOE/nTmxmJ+HkQDfyCe8g78rJGE6Qc9DKkil+OFuQY="/><input type="hidden" name="isNew" value="0"/><input type="hidden" name="notify_url" value="http://www.kbao123.com/3.0/paynotify/alipay"/><input type="hidden" name="payment_type" value="1"/><input type="hidden" name="out_trade_no" value="201703214911907428"/><input type="hidden" name="partner" value="2088911796760020"/><input type="hidden" name="service" value="alipay.wap.create.direct.pay.by.user"/><input type="hidden" name="total_fee" value="206.00"/><input type="hidden" name="return_url" value="https://m.kbao123.com:443/3.0/buy/alipay/result?no=201703214911907428&no1=36c24440c2f245e597b64a1d8ed6a127&appversion=2.2&isNew=0"/><input type="hidden" name="sign_type" value="RSA"/><input type="hidden" name="seller_id" value="2088911796760020"/><input type="hidden" name="show_url" value="https://m.kbao123.com:443/3.0//html5/buy/index.jsp?no=201703214911907428&no1=36c24440c2f245e597b64a1d8ed6a127&appversion=2.2&isNew=0"/><input type="submit" value="确认" style="display:none;"></form><script>document.forms['+"'alipaysubmit'"+'].submit();</script>';
           // $("#order").append(alipay);

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