/**
 * Created by fishYu on 2016/8/26.
 * 附加险详细说明页面
 */
define([
    'common/base/base_view',
    'text!module/attachDetails/templates/attachDetails.html',
    'module/attachDetails/model/attachDetailsModel',
    "msgbox"
],function(BaseView, Tpl, attachDetailsModel, MsgBox){
    var pullTemp = '<div class="attach-pull-item">'+
        '<div class="attach-item-title">'+
        '<span>{liabName}</span>'+
        '<span class="pull-icon-big"></span>'+
        '</div>'+
        '<div class="attach-pull-content">{liabDesc}</div>'+
        '</div>';
    var nextTemp = '<div class="attach-next-item" data-type="{salesProductId}">'+
        '<span data-type="{salesProductId}">{salesProductName}</span>'+
        '<span class="pull-icon-next-big" data-type="{salesProductId}"></span>'+
        '</div>';
    var AttachDetailsView = BaseView.extend({
        template: _.template(Tpl),
        id:"attach-details-container",
        currentUserId : "",     //当前用户ID
        productId : "",         //售卖产品ID
        ui:{
            topCon : ".top-title",
            backBtn : ".top-title-left", //点击返回
            attachDetailsTitle : ".attach-details-title",
            attachDetailsMain : "#attach-details-main",

            bxzrTxt : ".bxzr-txt",      //保险责任
            thbzTxt : ".thbgz-txt",     //投核保规则
            bzxqTxt : ".bzxq-txt",      //病种详情
            xxtkTxt : ".xxtk-txt"       //详细条款

        },
        events:{
            "tap @ui.backBtn":"onBackBtnHandler",
            "tap @ui.attachDetailsMain":"onAttachDetailsMainHandler"
        },
        initialize:function(){

        },
        onRender:function(){
            var self = this;
            if(device.ios()){
                self.ui.topCon.css("padding-top",utils.toolHeight+"px");
            }
            setTimeout(function(){
                var height = self.ui.topCon.outerHeight(true) + self.ui.attachDetailsTitle.height();
                self.ui.attachDetailsMain.css({height: "calc(100% - " + height + "px)"});
            }, 0)

            self.packageId = self.getOption("packageId");   //产品卡ID
            self.productId = self.getOption("productId");   //精算产品ID
            self.salesProductId = self.getOption("salesProductId");     //销售产品ID

            //TODO 需要真实的接口和数据
            attachDetailsModel.getRiderInfo(self.packageId, self.productId, self.salesProductId, function(data){
                self.initData(data);
            }, function(err){
                console.log(err);
            });
        },
        initData : function(data){
            var self = this;
            self.ui.attachDetailsTitle.html(data.productName);
            self.ui.bxzrTxt.html(data.safeDuty);
            self.ui.thbzTxt.html(data.coverRule);
            self.ui.bzxqTxt.html(data.diseaseDetails);
            self.ui.xxtkTxt.html(data.particularItem);
        },
        pageIn:function(){
            var self = this;
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
         * 点击返回
         * @param e
         */
        onAttachDetailsMainHandler:function(e){
            e.stopPropagation();
            e.preventDefault();
            var target = e.target;
            var $target = $(target);
            var parent = null;
            if($target.hasClass("pull-icon-big")){
                parent = $target.parent();
            }
            if(parent){ //显示下一级
                parent.toggleClass("on");
                parent.next().slideToggle();
            }
            var dataType = $target.attr("data-type");
            if(dataType){       //next 跳转
                MsgBox.alert(dataType);
            }
        },
        close:function(){
            var self = this;
            self._initView = null;
            self.remove();
            if(MsgBox && MsgBox.isShow()) {
                MsgBox.clear();
            }

        }
    });
    return AttachDetailsView;
});