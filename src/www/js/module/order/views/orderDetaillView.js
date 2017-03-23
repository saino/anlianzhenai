// 文件名称: footer.js
//
// 创 建 人: chenshy
// 创建日期: 2015/7/24 14:08
// 描    述: footer.js
define([
    'common/base/base_view',
    'text!module/order/templates/orderDetaill.html',
    'marionette',
    'module/order/model/orderModel',
    'common/views/circle'
],function(BaseView, tpl, mn, orderModel, loadingCircle) {
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
            var options = {
                proposalCode: self.getOption("codeId")
            };
            LoadingCircle && LoadingCircle.start();
            orderModel.getOrderDetail(options, function(data){
                LoadingCircle && LoadingCircle.end();
                console.log("获取订单详情成功:", data);
                 // for(var i=0; i<data.length; i++){
                    // var status = "";
                    // if(orderDetaill.status == "51"){
                    //     status = "已提交";
                    // }
                    // if(orderDetaill.status == "102"){
                     
                    //     status = "拒保";
                    // }if(orderDetaill.status == "103"){
                    //     status = "撤单";
                    // }
                    // if(orderDetaill.status == "104"){
                    //     status = "转账收费中";
                    // }
                    // if(orderDetaill.status == "108"){
                    //     status = "转账收费成功";
                    // }
                    // if(orderDetaill.status == "105"){
                    //     status = "转账收费失败";
                    // }
                    // if(orderDetaill.status == "201"){
                    //     status = "已承保";
                    // }
                if(data.status == "0"){
                    var orderDetaill = data.anLianProposalVO;

                    var status = "";
                    if(orderDetaill.status == "51"){
                        status = "已提交";
                    }
                    if(orderDetaill.status == "102"){
                     
                        status = "拒保";
                    }if(orderDetaill.status == "103"){
                        status = "撤单";
                    }
                    if(orderDetaill.status == "104"){
                        status = "转账收费中";
                    }
                    if(orderDetaill.status == "108"){
                        status = "转账收费成功";
                    }
                    if(orderDetaill.status == "105"){
                        status = "转账收费失败";
                    }
                    if(orderDetaill.status == "201"){
                        status = "已承保";
                    }
                    var relation = "";
                    if(orderDetaill.insuredList[0].policyholderInsuredRelation=="01"){
                        relation = "本人";
                    }
                    if(orderDetaill.insuredList[0].policyholderInsuredRelation=="02"){
                        relation = "父母";
                    }
                    if(orderDetaill.insuredList[0].policyholderInsuredRelation=="03"){
                        relation = "配偶";
                    }
                    if(orderDetaill.insuredList[0].policyholderInsuredRelation=="04"){
                        relation = "子女";
                    }
                    var planCode = "";
                    if(orderDetaill.planCode=="ZAAMIPS(SI)" ||orderDetaill.planCode=="ZAAMIPS(NSI)"){
                        planCode = "标准计划"
                    }
                    if(orderDetaill.planCode=="ZAAMIPU(SI)" ||orderDetaill.planCode=="ZAAMIPU(NSI)"){
                        planCode = "升级计划"
                    }
                    if(orderDetaill.planCode=="ZAAMIPH(SI)" ||orderDetaill.planCode=="ZAAMIPH(NSI)"){
                        planCode = "尊贵计划"
                    }
                    var pGender = utils.getGender(orderDetaill.insuredList[0].idNumber)=="M" ? "男" : "女"; 
                    var iGgender = utils.getGender(orderDetaill.policyHolder.phIdNumber)=="M" ? "男" : "女";
                    var orderDetaillHtml = '<div class="order-item order-detaill-item" data-codeId="'+orderDetaill.proposalCode+'">'+
                                                '<div class="order-code">'+
                                                    '<div class="order-code-num">订单号：'+orderDetaill.proposalCode+'</div>'+
                                                    '<div class="order-code-status">'+status+'</div>'+
                                                '</div>'+
                                                '<div class="banner_bottom-content"><div class="banner_bottom"></div></div>'+
                                                '<div class="order-code">'+
                                                    '<div class="order-code-num">时间：'+orderDetaill.generatedDate.replace(/T/," ")+'</div>'+
                                                '</div>'+
                                                '<div class="banner_bottom-content"><div class="banner_bottom"></div></div>'+
                                                '<div class="order-content">'+
                                                    '<div class="order-content-item-left">安联臻爱医疗保险</div>'+
                                                    '<div class="order-content-item-right order-logo"></div>'+
                                                    '<div class="order-content-item-left order-money">保费: '+orderDetaill.totalPremium+'</div>'+
                                                    '<div class="order-content-item-left order-from">推广费：32.96</div>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="order-msg">投保人信息</div>'+
                                            '<div class="order-msg-content">'+
                                                '<div>姓名:'+orderDetaill.policyHolder.policyHolderName+'</div>'+
                                                '<div>手机号:'+orderDetaill.policyHolder.phTelephone+'</div>'+
                                                '<div>邮箱:'+orderDetaill.policyHolder.phEmail+'</div>'+
                                                '<div>身份证号码:'+orderDetaill.policyHolder.phIdNumber+'</div>'+
                                                '<div>出生日期: '+utils.getBirth(orderDetaill.policyHolder.phIdNumber,true)+'</div>'+
                                                '<div>年龄:'+utils.getAge(utils.getBirth(orderDetaill.policyHolder.phIdNumber,true))+'</div>'+
                                                '<div>性别:'+iGgender+'</div>'+
                                            '</div>'+
                                            '<div class="order-msg">被保人信息</div>'+
                                            '<div class="order-msg-content">'+
                                                '<div>被保人是投保人的:'+relation+'</div>'+
                                                '<div>姓名:'+orderDetaill.insuredList[0].insuredName+'</div>'+
                                                '<div>手机号:'+orderDetaill.insuredList[0].mobile+'</div>'+
                                                '<div>身份证号码:'+orderDetaill.insuredList[0].idNumber+'</div>'+
                                                '<div>出生日期: '+utils.getBirth(orderDetaill.insuredList[0].idNumber,true)+'</div>'+
                                                '<div>年龄:'+utils.getAge(utils.getBirth(orderDetaill.insuredList[0].idNumber,true))+'</div>'+
                                                '<div>性别:'+pGender+'</div>'+
                                                '<div>一级职业:'+orderDetaill.insuredList[0].jobCode1+'</div>'+
                                                '<div>二级职业:'+orderDetaill.insuredList[0].jobCode2+'</div>'+
                                                '<div>三级职业:'+orderDetaill.insuredList[0].jobCode3+'</div>'+
                                            '</div>'+
                                            '<div class="order-msg">投保计划</div>'+
                                            '<div class="order-msg-content">'+
                                                '<div>计划:'+planCode+'</div>'+
                                                '<div>保障期限:1年</div>'+
                                                '<div>生效日期:付款次日零时</div>'+
                                                '<div>终止日期：'+orderDetaill.expireDate.replace(/T/," ")+'</div>'+
                                            '</div>';
                    self.ui.productDetail.html(orderDetaillHtml);
                }

            },function(err){
                LoadingCircle && LoadingCircle.end();
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