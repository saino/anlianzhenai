window.EventsName = "tap";    //监听事件名称 window.EventsName

window.fs = null;	//保存读取文件系统

window.networkState = "";	//当前网络状态
window.networkFullState = {};	//有网络状态

window.onLineError = true;  //是否是有网加载情况

var timeTemp = null;    //android 物理返回键的间隔时间
window.IS_PAUSE = false; //app是否在后台
//登录成功
function loginSuccess(userData){
    utils.userObj.id = userData;
}
//点击物理返回键
function clickAndroidReturn(){
    var url = window.location.href;
    if(url.lastIndexOf("lifeInsurance") > 1){	//在寿险页时 退出
        app.triggerMethod("insurance:exit");	//退出制作
    }else{
        if(timeTemp &&((new Date().getTime() - timeTemp) < 1000)){ //防止连续点击,两次点击小于1S的时候不执行
            return;
        }
        if(url.lastIndexOf("in/personalPlan") > 0){
            app.triggerMethod("personalPlan:exit");//返回个人中心
        }else if(url.lastIndexOf("in/plan") > 0){
            app.triggerMethod("plan:exit");	//退出制作计划书
        }else if(url.lastIndexOf("in/personalCollect") > 0){
            app.triggerMethod("personalCollect:exit");	//退出制作计划书
        }else if(url.lastIndexOf("in/makePlan") > 0){
            app.triggerMethod("makePlan:exit");
        }else{
           backApp();	//直接返回
        }
        timeTemp = new Date();
    }
}
document.addEventListener("deviceready", onDeviceReady, false);
document.body.addEventListener("touchstart", function(){}, false);

// 全局定义变量
window.checkQQAndWeixin = [false, false,false];	//检测是否有QQ或者微信或者微博

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
window.cancelRequestAnimationFrame = window.cancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame;

function onDeviceReady() {
    //修改IOS第一启动可能出现卡死的情况
    setTimeout( endSplash, 2000 );

    document.addEventListener('backbutton',myBackbutton,false);
    //开始文件系统
    startFileSystem();

    //检测当前网络状态
    window.networkState = navigator.connection.type;
    window.networkFullState[Connection.UNKNOWN]  = 'Unknown connection';
    window.networkFullState[Connection.ETHERNET] = 'Ethernet connection';
    window.networkFullState[Connection.WIFI]     = 'WiFi connection';
    window.networkFullState[Connection.CELL_2G]  = 'Cell 2G connection';
    window.networkFullState[Connection.CELL_3G]  = 'Cell 3G connection';
    window.networkFullState[Connection.CELL_4G]  = 'Cell 4G connection';
    window.networkFullState[Connection.NONE]     = 'No network connection';

    document.addEventListener("online", onOnline, false);   //线上事件
}
//线上事件
function onOnline(){
    window.onLineError = true;  //是否是有网加载情况
}
//获取文件系统
function startFileSystem() {
    if( !LocalFileSystem ){
        setTimeout(startFileSystem(), 10);
    }else{
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
    }
}
//获取文件系统并存储
function gotFS(fileSystem) {
    window.fs = fileSystem;
}
//文件操作失败回调
function fail(error) {
    console.log(error.code);
}

function endSplash(){
    if ( navigator.splashscreen ){
        navigator.splashscreen.hide();
    }else {
        setTimeout( endSplash, 2000 );
    }
}

//点击返回按钮的事件
function myBackbutton(){
    //暂时就是所有页面直接双击退出，以后增加不是主页反回
    var url = window.location.href;

    if(timeTemp &&(new Date - timeTemp < 1000)){ //防止连续点击,两次点击小于1S的时候不执行
        return;
    }

    backApp();	//直接返回
    timeTemp = new Date();
}



//返回
function backApp() {
    app.goBack();
}

//js库配置
//加载所需的依赖包
require.config({
    //开发模式下给地址加动态参数
    //防止缓存
    //urlArgs: "bust=" + (new Date()).getTime(),
    shim: {
        underscore: {
            exports : '_'
        },
        backbone: {
            deps : [
                'underscore',
                'jquery'
            ],
            exports : 'Backbone'
        },
        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['jquery','backbone']
        },
        jqtap : {
            deps : ['jquery'],
            exports : 'jquery'
        }
	},
	paths: {
        jquery: 'lib/jquery-1.11.3.min',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone/backbone',
        marionette : 'lib/backbone/backbone.marionette',
        text : 'lib/require/text',
        jqtap : "lib/jquery.tap",
        utils : "utils/utils",
        errorMsg : "utils/errorMsg",
        msgbox : "common/views/MsgBox",
        touch : "lib/touch-0.2.14.min",
        device : "lib/device",
        pageSwitch:"lib/pageSwitch",
        json: "lib/json2"
	},
    waitSeconds: 0
});

//应用程序入口
require([
    'jquery',
    'backbone',
    'router/Backbone.history',
    'module/app/app',
    'module/app/controller',
    'router/AppRouter',
    'errorMsg',
    'underscore',
    'text',
    "device",
    'jqtap',
    'utils',
    'msgbox',
    'pageSwitch'
], function($, Backbone, BackboneHistory, app, controller, AppRouter) {
    if(!window.EventsName){
        window.EventsName = "tap";
    }

    $(document).ready(function() {
        readyHandle();
    });

    function readyHandle (){
        if(utils.isDebug){
            utils.userObj.id = getParameter(window.location.href, "encryptedUserData");
        }
        var proposerName = getParameter(window.location.href, "proposerName");
        var proposerGender = getParameter(window.location.href, "proposerGender");
        //需要解码
        proposerName = utils.myDecodeURIComponent(proposerName);
        proposerGender = utils.myDecodeURIComponent(proposerGender);
        utils.planHonorific = "尊敬的"+proposerName+""+proposerGender;
        var isShare = getParameter(window.location.href, "isShare");
        if(isShare && isShare == 1){
            utils.isShare = true;
        }else{
            utils.isShare = false;
        }
        var tempUserId = getParameter(window.location.href, "tempUser");
        utils.tempUser.id = tempUserId;
        //基本数据初始化 add by guYY 2015/12/31 10：20
        if(device && device.ios())
            utils.topHeightForTime = 40;
        utils.containerWidth = document.body.clientWidth;
        utils.containerHeight = document.body.clientHeight;

        app.VERSION = "1.0";  //发正式包此处改回正确版本号1.0

        app.router = new AppRouter({controller:controller});
        BackboneHistory.start({pushState: false});
        app.history = BackboneHistory;
        app.start();
    }
});



