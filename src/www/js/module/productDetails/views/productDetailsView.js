/**
 * Created by GYY on 2016/8/22.
 * 条款页面
 */
define([
    'common/base/base_view',
    'text!module/productDetails/templates/productDetails.html',
    'module/productDetails/model/productDetailsModel',
    "msgbox"
],function(BaseView, Tpl, productDetailsModel, MsgBox){
    var ProductDetailsView = BaseView.extend({
        template: _.template(Tpl),
        id:"product-details-container",
        currentUserId : "",     //当前用户ID
        productId : "",         //售卖产品ID
        ui:{
            topCon : ".top-title",
            backBtn : ".top-title-left", //点击返回
            shareBtn : ".top-title-right-2",              //分享按钮
            collectBtn : ".top-title-right-1",            //收藏按钮
            detailsInfoTop : ".details-info-top",       // 产品名称和公司LOGO
            productDetailsPv : ".product-details-pv",   //产品PV
            insureAge : "#insure-age span:last-child",                      //投保年龄
            limitCoverage : "#limit-coverage span:last-child",             //最低保额
            paymentRange : "#payment-range span:last-child",             //交费期间
            safeguardRange : "#safeguard-range span:last-child",             //保障期间
            productDetailsMain : "#product-details-main",
            summaryContent : ".insure-summary-content" ,     //保障概览
            featureContent : ".insure-feature-content",     //产品特色
            dutyTitle : ".insure-duty-title",               //责任标题
            dutyTitleBtn : ".insure-duty-title .pull-icon-big", //责任下拉按钮
            dutyContent : ".insure-duty-content",           //保险责任
            planTitle : ".insure-plan-title",               //计划标题
            planTitleBtn : ".insure-plan-title .pull-icon-big", //计划下拉按钮
            planContent : ".insure-plan-content",           //产品组合计划列表
            subjoinTitle : ".insure-subjoin-title",         //附加标题
            subjoinTitleBtn : ".insure-subjoin-title .pull-icon-big",   //附加下拉按钮
            subjoinContent : ".insure-subjoin-content"     //推荐附加险
        },
        events:{
            "tap @ui.backBtn":"onBackBtnHandler",
            "tap @ui.shareBtn":"onShareInsureHandler",      //分享保险
            "tap @ui.collectBtn":"onCollectInsureHandler",        //收藏保险
            "tap @ui.dutyTitleBtn":"onToggleDutyContentHandler",
            "tap @ui.dutyContent" :  "onToggleDutyItemSummaryHandler",
            "tap @ui.planTitleBtn":"onTogglePlanContentHandler",
            "tap @ui.planContent" :  "onGoToPlanItemHandler",
            "tap @ui.subjoinTitleBtn":"onToggleSubjoinContentHandler",
            "tap @ui.subjoinContent" : "onGoToSubjoinItemHandler"
        },
        initialize:function(){

        },
        onRender:function(){
            var self = this;
            if(device.ios()){
                self.ui.topCon.css("padding-top",utils.toolHeight+"px");
            }
            setTimeout(function(){
                var height = self.ui.topCon.outerHeight(true);
                self.ui.productDetailsMain.css({height: "calc(100% - " + height + "px)"});
            }, 0)

            self.productId = self.getOption("productId");   //获取产品ID
            console.log(self.productId);
            //根据用户ID 和保险售卖ID查询数据
            self._initView = self.initView.bind(self);
            productDetailsModel.getProductInfo(self.currentUserId, self.productId, self._initView, function(err){
                console.log(err);
            });


        },
        pageIn:function(){
            var self = this;

        },
        /**
         * 初始化界面的动态数据
         * @param data
         */
        initView : function(data){
            var self = this;
            //设置用户信息
            var packageName = data.packageName; //保险名称
            var organLogo =  data.company.organLogo;    //公司logo
            var totalVisitCount = data.totalVisitCount; //总PV数
            self.initInfoView(packageName, organLogo, totalVisitCount);
            //设置投保条件
            var amountLimit = data.amountLimit; //保额限制
            var ageRange = data.ageRange; //年龄区间
            var prdtTermChargeList = data.prdtTermChargeList; //费用期间
            var prdtTermCoverageList = data.prdtTermCoverageList; //保障期间
            self.initConditionView(amountLimit, ageRange, prdtTermChargeList, prdtTermCoverageList);
            //设置保障概览
            var salesRightsList = data.salesRightsList; //保障概览
            self.initSummaryView(salesRightsList);
            //设置产品特色
            var productFeatureList = data.productFeatureList; //产品特色
            self.initFeatureView(productFeatureList);
            //设置保险责任
            var salesLiabilityList = data.salesLiabilityList;
            self.initDutyView(salesLiabilityList);
            //组合计划
            var packageList = data.packageList;
            self.initPlanView(packageList);
            //附加险
            var attachProductList = data.attachProductList;
            self.initSubjoinView(attachProductList);
        },
        /**
         * 初始化投保信息
         * @param packageName
         * @param organLogo
         * @param totalVisitCount
         */
        initInfoView : function(packageName, organLogo, totalVisitCount){
            var self = this;
            self.ui.detailsInfoTop.text(packageName);
            self.ui.detailsInfoTop.css({"background" : "url("+organLogo+") 100% center no-repeat"});
            self.ui.productDetailsPv.text(totalVisitCount);
        },
        /**
         * 初始化投保条件
         * @param amountLimit   obj{}
         * @param ageRange  obj{}
         * @param prdtTermChargeList [obj,obj]
         * @param prdtTermCoverageList [obj,obj]
         */
        initConditionView : function (amountLimit, ageRange, prdtTermChargeList, prdtTermCoverageList){
            var self = this;
            //投保年龄
            var minAge = ageRange.minAge;       //最小年龄
            var minAgeUnit = ageRange.minUnit;  //最小年龄单位
            var maxAge = ageRange.maxAge;       //最小年龄
            var maxAgeUnit = ageRange.maxUnit;  //最小年龄单位
            self.ui.insureAge.text(minAge+minAgeUnit+"-"+maxAge+maxAgeUnit);
            //最低保额
            var minAmount = amountLimit.minAmount;      //最低保额
            var limitUnit = amountLimit.limitUnit;      //保额单位
            self.ui.limitCoverage.text(minAmount+limitUnit);
            //交费期间
            var paymentStr = "";
            for(var i = 0; i < prdtTermChargeList.length; i++){
                var obj1 = prdtTermChargeList[i];
                if(i != prdtTermChargeList.length -1){
                    paymentStr += obj1.periodValue + "/"
                }else{
                    paymentStr += obj1.periodValue;
                }
            }
            self.ui.paymentRange.text(paymentStr+"年交");
            //保障期间
            var safeguardStr = "";
            for(var j = 0; j < prdtTermCoverageList.length; j++){
                var obj2 = prdtTermCoverageList[j];
                if(j == 0){
                    safeguardStr += "至"+obj2.periodValue+"岁，"
                }else{
                    safeguardStr += obj2.periodValue+"年，"
                }
            }
            self.ui.safeguardRange.text(safeguardStr + "终身");
        },
        /**
         * 设置保障概览
         * @param salesRightsList  保障列表
         */
        initSummaryView : function(salesRightsList) {
            var self = this;
            var summaryTemp = '<div class="insure-summary-item">{rightName}</div>';
            var summaryStr = "";
            for(var i = 0; i < salesRightsList.length; i++){
                var obj = salesRightsList[i];
                var realTemp = summaryTemp.replace("{rightName}", obj.rightName);
                summaryStr += realTemp;
            }
            summaryStr += '<div class="clear"></div>';      //最后添加一个清除浮动
            self.ui.summaryContent.html(summaryStr);
        },
        /**
         * 设置产品特色
         * @param productFeatureList  特色列表
         * <div class="insure-feature-item">
         * <img  src="./images/insurance/long.png"/>
         * <span>长期保障期限：各项责任统统保障终身</span>
         * </div>
         */
        initFeatureView : function (productFeatureList) {
            var self = this;
            var featureTemp = '<div class="insure-feature-item" style="background: url({feature-pic}) no-repeat center"></div>';
            var featureStr = "";
            for(var i = 0; i < productFeatureList.length; i++){
                var obj = productFeatureList[i];
                var realTemp = featureTemp.replace("{feature-pic}", obj.featurePic);
                featureStr += realTemp;
            }
            self.ui.featureContent.html(featureStr);
        },
        /**
         * 设置产品特色
         * @param salesLiabilityList  特色列表
         * <div class="insure-duty-item">
         *<div class="duty-item-title on">
         *<span>身故赔付已交保费</span>
         *<span class="pull-icon-small"></span>
         *</div>
         *<div class="duty-item-content">
         *未满18周岁，因意外或者90天等待期后因非意外导致身故，给付1.5倍保费，或者90天等待期内因非意外导致身故，给付已交保费；
         *18周岁后，因意外或者90天等待期后因非意外导致身故，给付保额，或者90天等待期内因非意外导致身故，给付已交保费。
         *</div>
         *</div>
         */
        initDutyView : function (salesLiabilityList) {
            var self = this;
            var dutyTemp = '<div class="insure-duty-item">'+
                    '<div class="duty-item-title">'+
                    '<span>{liabName}</span>'+
                    '<span class="pull-icon-small"></span>'+
                    '</div>'+
                    '<div class="duty-item-content">{liabDesc}</div>'+
                    '</div>';
            var dutyStr = "";
            for(var i = 0; i < salesLiabilityList.length; i++){
                var obj = salesLiabilityList[i];
                var realTemp = dutyTemp.replace("{liabName}", obj.liabName).replace(/\{liabDesc\}/g, obj.liabDesc);
                dutyStr += realTemp;
            }
            self.ui.dutyContent.html(dutyStr);
        },
        /**
         * 设置组合计划险
         * @param packageList
         */
        initPlanView : function (packageList){
            var self = this;
            var planTemp = '<div class="insure-plan-item" data-type="{salesProductId}">'+
                '<span data-type="{salesProductId}">{salesProductName}</span>'+
                '<span class="pull-icon-next" data-type="{salesProductId}"></span>'+
            '</div>';
            var planStr = "";
            for(var i = 0; i < packageList.length; i++){
                var obj = packageList[i];
                var realTemp = planTemp.replace("{salesProductName}", obj.salesProductName).replace(/\{salesProductId\}/g, obj.salesProductId);
                planStr += realTemp;
            }
            self.ui.planContent.html(planStr);
        },
        /**
         * 设置附加险
         * @param attachProductList
         */
        initSubjoinView : function (attachProductList){
            var self = this;
            var subjoinTemp = '<div class="insure-subjoin-item" data-type="{salesProductId}">'+
                '<span data-type="{salesProductId}">{salesProductName}</span>'+
                '<span class="pull-icon-next" data-type="{salesProductId}"></span>'+
                '</div>';
            var subjoinStr = "";
            for(var i = 0; i < attachProductList.length; i++){
                var obj = attachProductList[i];
                var realTemp = subjoinTemp.replace("{salesProductName}", obj.salesProductName).replace(/\{salesProductId\}/g, obj.salesProductId);
                subjoinStr += realTemp;
            }
            self.ui.subjoinContent.html(subjoinStr);
        },
        /**
         * 点击返回
         * @param e
         */
        onBackBtnHandler:function(e){
            e.stopPropagation();
            e.preventDefault();
            app.goBack();
        },
        /**
         * 分享保险
         * @param e
         */
        onShareInsureHandler:function(e){
            e.stopPropagation();
            e.preventDefault();
            var self = this;
            MsgBox.alert("点击了分享保险");
        },
        /**
         * 收藏保险
         * @param e
         */
        onCollectInsureHandler:function(e){
            e.stopPropagation();
            e.preventDefault();
            var self = this;
            MsgBox.alert("点击了收藏保险");
        },
        /**
         *点击显示或者隐藏保险责任
         * @param e
         */
        onToggleDutyContentHandler : function(e) {
            e.stopPropagation();
            e.preventDefault();
            var self = this;
            self.ui.dutyTitle.toggleClass("on");
        },
        /**
         *点击显示或者隐藏保险责任列表的简介
         * @param e
         */
        onToggleDutyItemSummaryHandler : function(e) {
            e.stopPropagation();
            e.preventDefault();
            var self = this;
            var target = e.target;
            var $target = $(target);
            var parent = null;
            if($target.hasClass("pull-icon-small")){
                parent = $target.parent();
            }
            if(parent){
                parent.toggleClass("on");
            }
        },
        /**
         *点击显示或者隐藏保险计划列表
         * @param e
         */
        onTogglePlanContentHandler : function(e) {
            e.stopPropagation();
            e.preventDefault();
            var self = this;
            self.ui.planTitle.toggleClass("on");
        },
        /**
         * 跳转到计划组合列表的选项页
         * @param e
         */
        onGoToPlanItemHandler : function(e) {
            e.stopPropagation();
            e.preventDefault();
            var self = this;
            var target = e.target;
            var $target = $(target);
            var dataType = $target.attr("data-type");
            if(dataType){
                MsgBox.alert("计划组合列表");
            }
        },
        /**
         *点击显示或者隐藏附加险
         * @param e
         */
        onToggleSubjoinContentHandler : function(e) {
            e.stopPropagation();
            e.preventDefault();
            var self = this;
            self.ui.subjoinTitle.toggleClass("on");
        },
        /**
         * 跳转到附加险列表的选项页
         * @param e
         */
        onGoToSubjoinItemHandler : function(e) {
            e.stopPropagation();
            e.preventDefault();
            var self = this;
            var target = e.target;
            var $target = $(target);
            var dataType = $target.attr("data-type");
            if(dataType){
                MsgBox.alert("推荐附加险列表");
            }
        },
        close:function(){
            var self = this;
            self.remove();
            if(MsgBox && MsgBox.isShow()) {
                MsgBox.clear();
            }
        }
    });
    return ProductDetailsView;
});