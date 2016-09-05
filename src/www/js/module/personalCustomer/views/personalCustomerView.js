/**
 * Created by fishYu on 2016/9/5.
 * 我的客户页面
 */
define([
    'common/base/base_view',
    'text!module/personalCustomer/templates/personalCustomer.html',
    'module/personalCustomer/model/personalCustomerModel',
    "msgbox"
], function (BaseView, Tpl, personalCustomerModel, MsgBox) {
    var customerItemTemp = '<div class="personal-customer-item">'+
        '<div class="personal-customer-item-title" id={data-filter}>{data-filter}</div>'+
        '<div class="personal-customer-item-content">'+
            '{customerItems}' + //<p>588464</p>
        '</div>'+
    '</div>';
    var PersonalCustomerView = BaseView.extend({
        template: _.template(Tpl),
        id:"personal-customer-container",
        currentUserId: "",     //当前用户ID
        initListData : [],     //初始化数据列表
        currentListData : [],     //当前用户数据的列表
        ui:{
            topCon : ".top-title",
            backBtn : ".top-title-left", //点击返回
            customerSearchContainer : ".personal-customer-search-container",    //搜索框
            personalCustomerMain: "#personal-customer-main",
            customerFilter : "#customer-filter",           //右边的过滤器
            customerSearchTxt: ".customer-search-txt",        //搜索内容框
            customerSearchBtn : ".customer-search-icon"      //搜索按钮
        },
        events:{
            "tap @ui.backBtn":"onBackBtnHandler",
            "tap @ui.customerSearchBtn": "onCustomerSearchBtnHandler",      //搜索计划书
            "input @ui.customerSearchTxt": "onCustomerSearchInputHandler",      //输入内容实时搜索
            "tap @ui.customerFilter": "onCustomerFilterBtnHandler"      //过滤定位
        },
        initialize:function(){

        },
        onRender:function(){
            var self = this;
            if(device.ios()){
                self.ui.topCon.css("padding-top",utils.toolHeight+"px");
            }
            setTimeout(function(){
                var height = self.ui.topCon.outerHeight(true) + self.ui.customerSearchContainer.outerHeight(true);
                self.ui.personalCustomerMain.css({height: "calc(100% - " + height + "px)"});
                self.ui.customerFilter.css({height: "calc(100% - " + height + "px)", top : height + "px"});
            }, 0)
            //TODO 需要真实的接口和数据
            personalCustomerModel.getCustomerItemList(self.currentUserId,  function(data){
                var list = data.customerItemList;
                self.initListData = list;
                self.initView(list);
            }, function(err){
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
            //TODO 以下为模拟的数据，需要调试的，会有细微的改动
            var list = data;
            self.currentListData = list;
            var customerItemStr = "";
            if (list.length > 0){
                for (var i = 0; i < list.length; i++){
                    var obj = list[i];
                    var key = "";
                    var values = [];
                    for(key in obj){
                        values = obj[key];
                    }
                    var customerItems = "";
                    for(var j = 0; j < values.length; j++){
                        customerItems += '<p>'+values[j][0]+'</p>'
                    }
                    var realItemTemp = customerItemTemp.replace(/\{data-filter\}/g, key)
                        .replace("{customerItems}", customerItems);
                    customerItemStr += realItemTemp;
                }
                self.ui.personalCustomerMain.html(customerItemStr);
            }else{
                self.ui.personalCustomerMain.html('<div class="plan-item-noting">暂无浏览记录</div>');
            }
            
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
         *搜索按钮点击事件
         */
        onCustomerSearchInputHandler :function(e){
            var self = this;
            var text = self.ui.customerSearchTxt.val();
            if (text){
                self.customerSearchOperation(text);
            }
        },
        /**
         *搜索按钮点击事件
         */
        onCustomerSearchBtnHandler :function(e){
            e.stopPropagation();
            e.preventDefault();
            var self = this;
            var text = self.ui.customerSearchTxt.val();
            if (text){
                self.customerSearchOperation(text);
            }
        },
        /**
         *具体搜索实现函数
         */
        customerSearchOperation: function (text) {
            var self = this;
            //TODO 具体搜索,需要实现
            var data = self.searchNameOrPhoneNumber(text);
            self.initView(data);
        },
        /**
         * 定位快捷标题
         * @param e
         */
        onCustomerFilterBtnHandler : function(e){
            e.stopPropagation();
            e.preventDefault();
            var target = e.target;
            var $target = $(target);
            var dataTo = $target.attr("data-to");
            //锚点定位
            if(dataTo){
                var obj = document.getElementById(dataTo);
                obj.scrollIntoView();
            }
        },
        /**
         * 模糊搜索，手机号码 或者名字
         */
        searchNameOrPhoneNumber : function(text){
            var self = this;
            var results = [];
            for(var i = 0; i < self.initListData.length; i++){
                var obj = self.initListData[i];
                var valus = [];
                for(var key in obj){
                    valus = obj[key];
                }
                for(var j = 0; j < valus.length; j++){
                    var tem = valus[j];
                    if(tem.toString().indexOf(text) > -1) {
                        results.push(obj);
                        break;
                    }
                }
            }
            return results;
        },
        close:function(){
            var self = this;
            self.remove();
            if(MsgBox && MsgBox.isShow()) {
                MsgBox.clear();
            }
        }
    });
    return PersonalCustomerView;
});