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
    'common/views/circle',
    'module/home/model/homeModel'
],function(BaseView, tpl, mn, orderModel, loadingCircle, homeModel) {
    return BaseView.extend({
        id : "orderDetaill",

        template : _.template(tpl),

        // _mouseLock : false,
        // _isShow : false,

        // key : selector
        anLianProposalVO: null,//订单详情对象
        ui : {
            productDetail: ".product-detail",
            goBack: ".go-back",
            resultStatus: "#result-status", //支付结果
        },
        //事件添加
        events : {
            "tap @ui.productDetail": "onClickProductDetail",
            "tap @ui.goBack": "onClickGoBack",
            "tap @ui.resultStatus": "onClickResultStatus"
        },
        onClickResultStatus: function(e){
            e.stopPropagation();
            e.preventDefault();
            var self = this;
            LoadingCircle&&LoadingCircle.start();
            var options = {
                proposalCode: self.proposalCode,
                returnUrl: "http://li.ebaocloud.com.cn/ysmd/index.html" + "#/order/detail/" + self.proposalCode,
            }
            homeModel.payment(options, function(data){
                console.log("报文信息",data);
                var dataObj = data.requestString.split("&");
                var dataObj1 = {};
                for(var i=0; i<dataObj.length; i++){
                    var dataObjKey = dataObj[i].split("=")[0];
                    var dataObjvalue = dataObj[i].split("=")[1];
                    dataObj1[dataObjKey] = dataObjvalue;
                }
                console.log(dataObj1);
                alert(utils.config.paymentUrl);
                // alert(dataObj1.agencyCode);
                var buyFormHtml='<form id="myForm" method="POST" action="'+utils.config.paymentUrl+'">'+
                                    '<input type="hidden" name="AgencyCode" value="'+dataObj1.agencyCode+'"/>'+
                                    '<input type="hidden" name="PolicyRef" value="'+dataObj1.policyRef+'"/>'+
                                    '<input type="hidden" name="TotalPremium" value="'+dataObj1.totalPremium+'"/>'+
                                    '<input type="hidden" name="PaymentMethod" value="'+"wxpay"+'"/>'+
                                    '<input type="hidden" name="NotifyUrl" value="'+dataObj1.notifyUrl+'"/>'+
                                    '<input type="hidden" name="ReturnUrl" value="'+dataObj1.returnUrl+'"/>'+
                                    '<input type="hidden" name="Sign" value="'+dataObj1.sign+'"/>'+
                                '</form>';
                                // '<script>document.getElementById("myForm").submit();</script>';                                  ;
                $("#orderDetaill").append(buyFormHtml);;
                LoadingCircle&&LoadingCircle.end();
            }, function(error){
                console.log("微信支付失败", error);
                alert("订单异常,请重新下单");
                LoadingCircle&&LoadingCircle.end();
            });


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
            self.proposalCode = self.getOption("codeId");
            console.log(this.getOption("codeId"));
            var options = {
                proposalCode: self.proposalCode
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
                    self.anLianProposalVO = data.anLianProposalVO;

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
                        self.ui.resultStatus.hidden();
                    }else{
                        self.ui.resultStatus.show();
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