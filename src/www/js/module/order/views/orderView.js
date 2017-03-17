
define([
    'common/base/base_view',
    'text!module/order/templates/order.html',
    'marionette',
    'module/order/model/orderModel'
],function(BaseView, tpl, mn, orderModel) {
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
        show: function(){
            var self = this;
            var options = {
                userId: "abcdefg"
            }
            orderModel.getOrderList(options, function(data){
                console.log("接口调用成功", data);
            },function(error){
                console.log("接口调用失败",error);
            });
            var data = [ {
                            "proposalId" : null,
                            "planCode" : null,
                            "policyCode" : null,
                            "proposalCode" : null,
                            "printNo" : null,
                            "status" : null,
                            "generatedDate" : null,
                            "effectiveDate" : null,
                            "expireDate" : null,
                            "agencyCode" : null,
                            "totalPremium" : 0.0,
                            "paymentMethod" : null,
                            "userId" : null,
                            "policy" : {
                                "agencyPolicyRef" : "",
                                "planCode" : null,
                                "issueDate" : "20170317172236",
                                "effectiveDate" : "20170318172236",
                                "expireDate" : "20180318172236",
                                "groupSize" : null
                            },
                            "agency" : {
                                "agencyCode" : "AC000006"
                            },
                            "policyHolder" : {
                                "prospectId" : 1,
                                "policyHolderType" : "I",
                                "policyHolderName" : "chengqiang.yang",
                                "phIdType" : "1",
                                "phIdNumber" : "411521199205106456",
                                "phBirthDate" : "19920510000000",
                                "phTelephone" : "15202185397",
                                "phAddress" : "",
                                "phPostCode" : "",
                                "phEmail" : "",
                                "reqFaPiao" : null,
                                "reqMail" : null,
                                "mailType" : null,
                                "invoiceTitle" : "",
                                "reqElecFaPiao" : null
                            },
                            "insuredList" : [ {
                                "insuredId" : 2,
                                "insuredType" : "I",
                                "insuredName" : "chengqiang.yang",
                                "idType" : "1",
                                "idNumber" : "411521199205106456",
                                "birthDate" : "19920510000000",
                                "mobile" : "15202185397",
                                "email" : "110@qq.com",
                                "gender" : "M",
                                "beneficialType" : "1",
                                "occupationCode" : "N12",
                                "policyholderInsuredRelation" : "01"
                            } ]
                        } ];
            var orderItemHtml = "";
            for(var i=0; i<data.length; i++){
                orderItemHtml += '<div class="order-item" data-codeId="'+data[i].codeId+'">'+
                                    '<div class="order-code">'+
                                        '<div class="order-code-num">'+data[i].codeId+'</div>'+
                                        '<div class="order-code-status">'+data[i].status+'</div>'+
                                    '</div>'+
                                    '<div class="banner_bottom-content"><div class="banner_bottom"></div></div>'+
                                    '<div class="order-code">'+
                                        '<div class="order-code-num">时间：'+data[i].time+'</div>'+
                                        '<div class="order-code-status order-from">'+data[i].form+'</div>'+
                                    '</div>'+
                                    '<div class="banner_bottom-content"><div class="banner_bottom"></div></div>'+
                                    '<div class="order-content">'+
                                        '<div class="order-content-item-left">安联臻爱医疗保险</div>'+
                                        '<div class="order-content-item-right order-logo"></div>'+
                                        '<div class="order-content-item-left order-money">保费: 206.00</div>'+
                                        '<div class="order-content-item-right">份数：1</div>'+
                                        '<div class="order-content-item-left">投保人：'+data[i].policyHolder.policyHolderName+'</div>'+
                                        '<div class="order-content-item-right">被保人：'+data[i].insuredList[0].insuredName+'</div>'+
                                    '</div>'+
                                '</div>';
            }
            self.ui.productDetail.html(orderItemHtml);

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