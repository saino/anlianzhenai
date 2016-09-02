//计划书制作页 add by guYY 2016/8/31
define([
    'common/base/base_view',
    'text!module/makePlan/templates/makePlan.html',
    'text!module/makePlan/templates/unitFlag1.html',
    'text!module/makePlan/templates/additionalUnitFlag1.html',
    'module/plan/model/planModel',
    'marionette',
    'msgbox'
],function(BaseView, tpl,unitFlag1Tpl,additionalUnitFlag1Tpl,planModel, mn,MsgBox) {
    var makePlanView =  BaseView.extend({
        id : "make-plan-container",
        template : _.template(tpl),
        unitFlag1Tpl: _.template(unitFlag1Tpl),
        additionalUnitFlag1Tpl: _.template(additionalUnitFlag1Tpl),
        _mouseLock : false,
        _isShow : false,
        forever:true,
        isCalcOver:false,       //是否已经计算过保费
        mainPlanNum:0,          //主险个数
        currProductId:0,        //当前产品ID
        currCompany:{},         //当前计划书所属公司对象
        currPlanList:[],        //当前销售产品列表（主产品、附加产品）
        hasPolicyHolder:false,//是否显示投保人
        hasSecInsured:false,    //是否指向第二被保人  Y是  N否
        hasSmoking:false,   //是否与被保人吸烟有关
        hasJob:false,       //是否与被保人职业有关
        hasSocialInsure:false,   //是否与被保人吸烟有关
        occupationList:[{name:"教师",id:1},{name:"医生",id:2},{name:"广告",id:3}],      //职业类别
        occupationListHtml:"",//职位列表html
        ageRangeOfLifeAssured:null, //被保人年龄范围对象
        ageRangeOfLifeAssuredHtml:"",//被保人年龄范围html
        ageRangeOfPolicyHolder:null, //投保人年龄范围对象
        ageRangeOfPolicyHolderHtml:"",//投保人年龄范围html
        paymentPeriodArr:["无关","趸交","按年限交","交至某确定年龄","终生交费"],//交费期限 下拉选项名称数组
        guaranteePeriodArr:["无关","保终身","年","保至某确定年龄","按月保","天"],//保障期限 下拉选项名称数组
        ui : {
            topTitleLeft : "#top-title-left",
            topCon : "#top-title",
            makePlanMain : "#make-plan-main",
            planTitle:"#planTitle",          //标题只一个主险时：投保选择   多个主险时：主险
            firstInsured:".first-insured",  //第一被保人
            secondInsured:".second-insured",  //第二被保人
            secondInsured:".second-insured",  //第一被保人
            policyHolder:".policy-holder",    //投保人
            makePlanInput:"#make-plan-select", //主险输入区域
            additionalPlanInput:"#make-plan-additional", //附加险输入区域
            incrementCon:"#make-plan-increment",//增值服务
            ideaCon:"#make-plan-idea",              //保险理念
            planInfoCon:"#make-plane-title" //计划书名称及所属公司
        },
        //事件添加
        events : {
            "tap @ui.topTitleLeft": "clickTopTitleLeftHandler",
            "tap .property-radio-item":"clickRadioHandler",//点击单选按钮  通用
            "tap .duty-item-left":"clickLiabilityHandler",  //点击选中可选责任
            "tap .duty-tip":"clickDutyTipHandler",           //点击展开/收起 可选责任
            "tap .increment-check":"clickCheckHandler",     //增值服务、留言是否显示在保障书
            "tap .first-year-tip":"clickFirstYearTipHandler",//点击展开/收起 计算结果
            "tap .accordion-tip":"clickAccordionHandler", //保险理念、增值服务手风琴效果 点击展开 点击收起
            "tap .idea-item":"clickIdeaItemHandler", //保险理念列表 单选
            "tap #btnTotalFirstYear":"clickCalcPremiumHandler",//点击计算保费
            "tap #make-plan-btn":"clickMakePlanHandler",//点击生成计划书
            "tap #make-plan-add-additional":"addAdditionalPlanHandler",//点击添加附加险
            "tap .additional-del":"delAdditionPlanHandler" //删除附加险
        },
        /**初始化**/
        initialize : function(){

        },
        //在开始渲染模板前执行，此时当前page没有添加到document
        onBeforeRender : function(){
            var self = this;
        },
        //渲染完模板后执行,此时当前page没有添加到document
        onRender : function(){
            var self = this;
            console.log("onRender");
            if(device.ios()){
                self.ui.topCon.css("padding-top",utils.toolHeight+"px");
                self.ui.makePlanMain.css("height","-webkit-calc(100% - "+(85+utils.toolHeight)+"px)");
            }
        },
        //页间动画已经完成，当前page已经加入到document
        pageIn : function(){
            var self = this;
            var tempProductId = this.getOption("productId");
            if(tempProductId == null){
                MsgBox.alert("路由错误","",function(){
                    app.goBack();
                });
                return;
            }
            //返回进入 或进入不同产品计划书 重置输入
            if(self.currProductId == 0 || self.currProductId != tempProductId){
                self.currProductId = tempProductId;
                planModel.getPlanInitiaData(self.currProductId,function(data){
                    self.initializeUI(data);
                },function(err){
                    MsgBox.alert(err);
                });
            }
        },
        //根据数据初始化UI
        initializeUI:function(data){
            var self = this;
            console.log(data);
            //公司LOGO  计划书名称
            self.ui.planInfoCon.html(data.packageName || "");
            self.currCompany = data.company;
            self.currPlanList = data.planList;
            self.ageRangeOfLifeAssured = data.ageRangeOfLifeAssured;
            self.ageRangeOfPolicyHolder = data.ageRangeOfPolicyHolder;
            //根据对象初始化
            self.setRelevantProperty();
            //拼接第一被保人信息
            var firstInsuredHtml = "";
            firstInsuredHtml += self.insuredNameTpl();
            firstInsuredHtml += self.insuredOldTpl({oldOptions:self.ageRangeOfLifeAssuredHtml});
            firstInsuredHtml += self.insuredSexTpl();
            if(self.hasJob){  //职位
                firstInsuredHtml += self.insuredOccupationsTpl({occupationOptions:self.occupationListHtml});
            }
            if(self.hasSmoking){//吸烟
                firstInsuredHtml += self.insuredSmokingTpl();
            }
            if(self.hasSocialInsure){ //社保
                firstInsuredHtml += self.insuredSocialTpl();
            }
            self.ui.firstInsured.find(".insured-property").html(firstInsuredHtml);
            //拼接第二被保人
            if(!self.hasSecInsured){
                self.ui.secondInsured.css("display","none");
            }else{
                var secondInsuredHtml = "";
                secondInsuredHtml += self.insuredNameTpl();
                secondInsuredHtml += self.insuredOldTpl({oldOptions:self.ageRangeOfLifeAssuredHtml});
                secondInsuredHtml += self.insuredSexTpl();
                if(self.hasJob){  //职位
                    secondInsuredHtml += self.insuredOccupationsTpl({occupationOptions:self.occupationListHtml});
                }
                if(self.hasSmoking){//吸烟
                    secondInsuredHtml += self.insuredSmokingTpl();
                }
                if(self.hasSocialInsure){ //社保
                    secondInsuredHtml += self.insuredSocialTpl();
                }
                self.ui.secondInsured.find(".insured-property").html(secondInsuredHtml);
            }
            if(data.company && data.company.organLogo ){
                self.ui.planInfoCon.css("background",'background: url("'+data.company.organLogo+'") no-repeat right 30px center #fff;');
            }
            //是否显示投保人
            if(!self.hasPolicyHolder){
                self.ui.policyHolder.css("display","none");
            }else{
                var policyHolderHtml = "";
                policyHolderHtml += self.policyHolderOldTpl({oldOptions:self.ageRangeOfPolicyHolderHtml});
                policyHolderHtml += self.policyHolderSexTpl();
                self.ui.policyHolder.find(".insured-property").html(policyHolderHtml);
            }
            //主险标题
            if(self.mainPlanNum > 1){
                self.ui.planTitle.html("主险")
            }else{
                self.ui.planTitle.html("投保选择")
            }
            //根据销售方式、主险个数拼接投保输入框html
            var inputHtml = "";
            for(var i = 0; i < self.currPlanList.length; i++){
                if(self.currPlanList[i].insType == 1) {
                    inputHtml += self.getMainPlanInputHtml(self.currPlanList[i]);
                }
            }
            self.ui.makePlanInput.append($(inputHtml));
            //根据销售方式，附加险拼接输入
            var additionalInputHtml = "";
            for(var i = 0; i < self.currPlanList.length; i++){
                if(self.currPlanList[i].insType == 2) {
                    additionalInputHtml += self.getAdditionalPlanInputHtml(self.currPlanList[i]);
                }
            }
            self.ui.additionalPlanInput.append($(additionalInputHtml));
            //增值服务
            var valueAddedHtml = "";
            if(data.valueadded && data.valueadded.length > 0) {
                valueAddedHtml = self.getValueAddedHtml(data.valueadded);
            }
            self.ui.incrementCon.find(".accordion-list").append($(valueAddedHtml));
            //保险理念
            var ideaHtml = "";
            if(data.insuranceSpirit && data.insuranceSpirit.length > 0){
                ideaHtml = self.getIdeaHtml(data.insuranceSpirit);
            }
            self.ui.ideaCon.find(".accordion-list").append($(ideaHtml));
            if(self.ui.ideaCon.find(".accordion-list").find(".idea-item-ck").size() <=0){
                self.ui.ideaCon.find(".accordion-list .idea-item:eq(0)").addClass("idea-item-ck");
            }
        },
        //被保人属性
        insuredNameTpl: _.template('<div class="insured-property-item"><span>被保人姓名：</span><input type="text" class="property-input insured-name"/></div>'),
        insuredOldTpl: _.template('<div class="insured-property-item"> <span>被保人年龄：</span><select name="old"  class="property-input property-select insured-old"><%=oldOptions %></select></div>'),
        insuredSexTpl: _.template('<div class="insured-property-item"><span>被保人性别：</span><div class="property-radio insured-sex" data-val="M">' +
                            '<div class="property-radio-item property-radio-item-ck" data-val="M"><span class="circle"><span class="circle-ck"></span></span>男</div>'+
                            '<div class="property-radio-item" data-val="F"><span class="circle"><span class="circle-ck"></span></span>女</div></div></div>'),
        insuredOccupationsTpl: _.template('<div class="insured-property-item"><span>被保人职业类别：</span>' +
                                    '<select name="old" class="property-input property-select insured-job"><%=occupationOptions %></select>' +
                                    '</div>'),
        insuredSocialTpl: _.template('<div class="insured-property-item"><span>被保人社保：</span><div class="property-radio insured-social" data-val="N">' +
                                    ' <div class="property-radio-item" data-val="Y"><span class="circle"><span class="circle-ck"></span></span>有</div>' +
                                    '<div class="property-radio-item property-radio-item-ck" data-val="N"><span class="circle"><span class="circle-ck"></span></span>无</div> </div></div>'),
        insuredSmokingTpl:_.template('<div class="insured-property-item"><span>被保人吸烟：</span><div class="property-radio insured-smoking" data-val="N">' +
                                    '<div class="property-radio-item" data-val="Y"><span class="circle"><span class="circle-ck"></span></span>是' +
                                    '</div><div class="property-radio-item property-radio-item-ck" data-val="N"><span class="circle"><span class="circle-ck"></span></span>否</div></div></div>'),

        //投保人属性
        policyHolderOldTpl : _.template('<div class="insured-property-item"><span>投保人年龄：</span>' +
                             '<select name="old" class="property-input property-select insured-old"><%=oldOptions %></select></div>'),
        policyHolderSexTpl: _.template('<div class="insured-property-item"><span>投保人性别：</span>' +
                             '<div class="property-radio insured-sex" data-val="M"><div class="property-radio-item property-radio-item-ck" data-val="M">' +
                            '<span class="circle"><span class="circle-ck"></span></span>男</div>' +
                            '<div class="property-radio-item" data-val="F"><span class="circle"><span class="circle-ck"></span></span>女</div></div></div>'),
       dutyItemTpl: _.template('<div class="duty-item"><div class="duty-item-left" data-liabId="<%=liabId %>">' +
                            '<div class="duty-item-check"></div><div class="duty-item-name"><%=liabName %></div></div>' +
                            '<input class="duty-item-input" placeholder="请输入保额" type="text"/></div>'),
       //根据险种拼接Html-主险
       getMainPlanInputHtml:function(plan){
           var tempHtml = "";
           var self = this;
           if(!plan)return tempHtml;
           //交费期限
           var paymentPeriodHtml = "";
           //保障期限
           var guaranteePeriodHtml = "";
           //可选责任列表
           var dutyHtml = "";
           if(plan.prdtTermChargeList && plan.prdtTermChargeList.length > 0){
               for(var i = 0; i < plan.prdtTermChargeList.length;)
               {
                   var typeName = self.paymentPeriodArr[0];
                   if(parseInt(plan.prdtTermChargeList[i].periodType) >=0 && parseInt(plan.prdtTermChargeList[i].periodType) < self.paymentPeriodArr.length)
                   {
                       typeName = self.paymentPeriodArr[parseInt(plan.prdtTermChargeList[i].periodType)];
                   }
                   paymentPeriodHtml += '<option value="'+plan.prdtTermChargeList[i].periodValue+'">'+typeName+'</option>';
               }
           }
           if(plan.prdtTermCoverageList && plan.prdtTermCoverageList.length > 0){
               for(var j = 0; j < plan.prdtTermCoverageList.length; j++){
                   var typeName = self.guaranteePeriodArr[0];
                   if(parseInt(plan.guaranteePeriodArr[i].periodType) >=0 && parseInt(plan.guaranteePeriodArr[i].periodType) < self.guaranteePeriodArr.length)
                   {
                       typeName = self.guaranteePeriodArr[parseInt(plan.guaranteePeriodArr[i].periodType)];
                   }
                   guaranteePeriodHtml += '<option value="'+plan.prdtTermCoverageList[i].periodValue+'">'+typeName+'</option>';
               }
           }
           if(plan.productLiabilityList && plan.productLiabilityList.length > 0){
               for(i = 0; i < plan.productLiabilityList.length; i++){
                   dutyHtml += self.dutyItemTpl({liabId:plan.productLiabilityList[i].liabId,liabName:plan.productLiabilityList[i].liabName});
               }
           }
           if(plan.unitFlag == 0) {
               tempHtml = self.unitFlag1Tpl({productId:plan.salesProductId,productName:plan.salesProductName,paymentPeriodHtml:paymentPeriodHtml,guaranteePeriodHtml:guaranteePeriodHtml,dutyHtml:dutyHtml});
           }
           return tempHtml;
       },
        //根据险种拼接Html-附加险
        getAdditionalPlanInputHtml:function(plan){
            var tempHtml = "";
            var self = this;
            if(!plan)return tempHtml;
            //交费期限
            var paymentPeriodHtml = "";
            //保障期限
            var guaranteePeriodHtml = "";
            //可选责任列表
            var dutyHtml = "";
            if(plan.prdtTermChargeList && plan.prdtTermChargeList.length > 0){
                for(var i = 0; i < plan.prdtTermChargeList.length;)
                {
                    var typeName = self.paymentPeriodArr[0];
                    if(parseInt(plan.prdtTermChargeList[i].periodType) >=0 && parseInt(plan.prdtTermChargeList[i].periodType) < self.paymentPeriodArr.length)
                    {
                        typeName = self.paymentPeriodArr[parseInt(plan.prdtTermChargeList[i].periodType)];
                    }
                    paymentPeriodHtml += '<option value="'+plan.prdtTermChargeList[i].periodValue+'">'+typeName+'</option>';
                }
            }
            if(plan.prdtTermCoverageList && plan.prdtTermCoverageList.length > 0){
                for(var j = 0; j < plan.prdtTermCoverageList.length; j++){
                    var typeName = self.guaranteePeriodArr[0];
                    if(parseInt(plan.guaranteePeriodArr[i].periodType) >=0 && parseInt(plan.guaranteePeriodArr[i].periodType) < self.guaranteePeriodArr.length)
                    {
                        typeName = self.guaranteePeriodArr[parseInt(plan.guaranteePeriodArr[i].periodType)];
                    }
                    guaranteePeriodHtml += '<option value="'+plan.prdtTermCoverageList[i].periodValue+'">'+typeName+'</option>';
                }
            }
            if(plan.productLiabilityList && plan.productLiabilityList.length > 0){
                for(i = 0; i < plan.productLiabilityList.length; i++){
                    dutyHtml += self.dutyItemTpl({liabId:plan.productLiabilityList[i].liabId,liabName:plan.productLiabilityList[i].liabName});
                }
            }
            if(plan.unitFlag == 0) {
                tempHtml = self.additionalUnitFlag1Tpl({additionalName:plan.salesProductName,productId:plan.salesProductId,productName:plan.salesProductName,paymentPeriodHtml:paymentPeriodHtml,guaranteePeriodHtml:guaranteePeriodHtml,dutyHtml:dutyHtml});
            }
            return tempHtml;
        },
        //增值服务
        getValueAddedHtml:function(valueAddedArr){
            var tempHtml = "";
            for(var i = 0; i < valueAddedArr.length; i++){
                tempHtml += '<div class="increment-item" data-id="'+valueAddedArr[i].valueAddedId+'">'+valueAddedArr[i].valueAddedName+'</div>';
            }
            return tempHtml;
        },
        //保险理念
        getIdeaHtml:function(ideaArr){
            var tempHtml = "";
            var checkNum = 0;//默认保险理念个数 保证有且只有一个
            for(var i = 0; i < ideaArr.length; i++){
                if(ideaArr[i].isDefaultSpirit == "Y" && checkNum == 0){
                    checkNum += 1;
                }
                if(ideaArr[i].isDefaultSpirit == "Y" && checkNum == 1) {
                    tempHtml += '<div class="idea-item idea-item-ck" data-id="' + ideaArr[i].spiritId + '"><span class="circle"><span class="circle-ck"></span></span>' + ideaArr[i].spiritName + '</div>';
                }else{
                    tempHtml += '<div class="idea-item" data-id="' + ideaArr[i].spiritId + '"><span class="circle"><span class="circle-ck"></span></span>' + ideaArr[i].spiritName + '</div>';
                }
            }
            return tempHtml;
        },
        //设置被保人相关属性 否存在第二被保人、是否与被保人吸烟有关、是否与被保人职业有关、是否与被保人社保有关
        setRelevantProperty:function(){
            var self = this;
            self.hasPolicyHolder = false;//投保人
            self.hasSecInsured = false;
            self.hasSmoking = false;
            self.hasJob = false;
            self.hasSocialInsure = false;
            if(!self.currPlanList || self.currPlanList.length <= 0)
                return false;
            var mainPlanNum = 0;
            for(var i = 0; i < self.currPlanList.length; i++){
                if(self.currPlanList[i].insType == 1){
                    mainPlanNum += 1;
                }
                if(self.currPlanList[i].pointToPH == "Y"){
                    self.hasPolicyHolder = true;
                }
                if(self.currPlanList[i].pointToSecInsured == "Y")//第二被保人
                {
                    self.hasSecInsured = true;
                }
                if(self.currPlanList[i].smokingIndi == "Y")//吸烟
                {
                    self.hasSmoking = true;
                }
                if(self.currPlanList[i].jobIndi == "Y")    //职业
                {
                    self.hasJob = true;
                }
                if(self.currPlanList[i].socialInsureIndi == "Y") //社保
                {
                    self.hasSocialInsure = true;
                }
            }
            //主险个数
            self.mainPlanNum = mainPlanNum;
            //设置职位列表HTML、被保人年龄限制列表HTML，投保人年龄限制列表HTML
            self.occupationListHtml = "";
            self.ageRangeOfLifeAssuredHtml = "";
            self.ageRangeOfPolicyHolderHtml = "";
            for(var i = self.ageRangeOfLifeAssured.minAge; i <= self.ageRangeOfLifeAssured.maxAge; i++){
                self.ageRangeOfLifeAssuredHtml += '<option value="'+i+'">'+i+'</option>';
            }
            for(i = self.ageRangeOfPolicyHolder.minAge; i <= self.ageRangeOfPolicyHolder.maxAge; i++){
                self.ageRangeOfPolicyHolderHtml += '<option value="'+i+'">'+i+'</option>';
            }
            for(i = 0; i < self.occupationList.length;i++){
                self.occupationListHtml += '<option value="'+self.occupationList[i].id+'">'+self.occupationList[i].name+'</option>';
            }
        },
        //点击返回
        clickTopTitleLeftHandler: function(event){
            event.stopPropagation();
            event.preventDefault();
            //返回重置当前产品计划ID，返回进入重置所有
            this.currProductId = 0;
            app.goBack();
        },
        //点击单选框
        clickRadioHandler:function(event){
            event.stopPropagation();
            event.preventDefault();
            var target = $(event.currentTarget);
            if(target.hasClass("property-radio-item-ck")){
                return;
            }
            target.siblings(".property-radio-item").removeClass("property-radio-item-ck");
            target.addClass("property-radio-item-ck")
            target.parent().attr("data-val",target.data("val"))
        },
        //点击可选责任
        clickLiabilityHandler:function(e){
            e.stopPropagation();
            e.preventDefault();
            var target = $(e.currentTarget);
            target.toggleClass("duty-item-left-ck");
        },
        //点击展开/收起 可选责任
        clickDutyTipHandler:function(e){
            e.stopPropagation();
            e.preventDefault();
            var target = $(e.currentTarget);
            if(target.hasClass("duty-open")){ //点击收起
                target.removeClass("duty-open").addClass("duty-stop");
                target.parents(".duty-title").next(".duty-list").slideUp();

            }else{  //点击展开
                target.addClass("duty-open").removeClass("duty-stop");
                target.parents(".duty-title").next(".duty-list").slideDown();
            }
        },
        //增值服务、留言 勾选框
        clickCheckHandler:function(e){
            e.stopPropagation();
            e.preventDefault();
            var target = $(e.target);
            target.toggleClass("increment-check-ck");
        },
        //点击展开/收起 计算结果table
        clickFirstYearTipHandler:function(e){
            e.stopPropagation();
            e.preventDefault();
            var target = $(e.target);
            if(target.hasClass("first-year-open")){//点击展开
                target.removeClass("first-year-open").addClass("first-year-stop");
                target.siblings(".first-year-table").slideDown();
            }else{
                target.removeClass("first-year-stop").addClass("first-year-open");
                target.siblings(".first-year-table").slideUp();
            }
        },
        //手风琴 增值服务、保险理念 共享
        clickAccordionHandler:function(e){
            e.stopPropagation();
            e.preventDefault();
            var target = $(e.target);
            if(target.hasClass("title-stop")){//点击收起
                target.removeClass("title-stop").addClass("title-open");
                target.parents(".insured-title").siblings(".accordion-list").slideUp();
            }else{
                target.removeClass("title-open").addClass("title-stop");
                target.parents(".insured-title").siblings(".accordion-list").slideDown();
            }
        },
        //保险理念列表 单选
        clickIdeaItemHandler:function(e){
            e.stopPropagation();
            e.preventDefault();
            var target = $(e.currentTarget);
            target.addClass("idea-item-ck");
            target.siblings().removeClass("idea-item-ck");
        },
        //点击计算保费
        clickCalcPremiumHandler:function(e){
            e.stopPropagation();
            e.preventDefault();

        },
        //点击生成计划书
        clickMakePlanHandler:function(e){
            e.stopPropagation();
            e.preventDefault();

        },
        //点击添加附加险 指向附加险列表
        addAdditionalPlanHandler:function(e){
            e.stopPropagation();
            e.preventDefault();
            app.navigate("#in/additional",{replace:true,trigger:true});
        },
        //点击删除附加险
        delAdditionPlanHandler:function(e){
            e.stopPropagation();
            e.preventDefault();
            MsgBox.ask("确定删除该附加险吗？","",function(type){
                if(type == 2) { //确定  0=取消
                    console.log("删除了");
                    var parent = $(e.target).parents(".additional-item");
                    parent.slideUp(function(){
                        parent.remove();
                    });
                }
                if(type == 0) {
                    console.log("取消删除");
                }
            });
        },
        /**页面关闭时调用，此时不会销毁页面**/
        close : function(){

        },

        //当页面销毁时触发
        onDestroy : function(){
//            console.log("footer destroy");
        }

    });
    return makePlanView;
});