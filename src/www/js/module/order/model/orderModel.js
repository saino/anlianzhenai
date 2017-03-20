define([], function(){
	var orderModel = function(){};

	orderModel.prototype.getOrderList = function(options,successCB, errorCB){
		var url = utils.config.serverUrl+"/ls/services/md/mdProposalRestService/getProposalListByUserId";
		$.ajax({
			method: "POST",
			url: url,
			data: JSON.stringify(options),
			contentType: "application/json",
			dataType: "json",
			processData: false,
			success: function(data){
				successCB && successCB(data);
			},
			error: function(data){
				errorCB && errorCB(data);
			}
		});
    };
    orderModel.prototype.getOrderDetail = function(options, successCB, errorCB){
    	var url= utils.config.serverUrl + "/ls/services/md/mdProposalRestService/getProposalInfo";
    	$.ajax({
			method: "POST",
			url: url,
			data: JSON.stringify(options),
			contentType: "application/json",
			dataType: "json",
			processData: false,
			success: function(data){
				successCB && successCB(data);
			},
			error: function(data){
				errorCB && errorCB(data);
			}
		});
    };
    // homeModel.prototype.getUserId = function(code, successCB, errorCB){
    // 	var url = utils.config.serverUrl+"";
    // }

    // homeModel.prototype.getWeiXinCode = function(){
    // 	var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+ utils.config.wxappid +'&redirect_uri='+ encodeURIComponent(window.location.href) +'&response_type=code&scope=snsapi_base#wechat_redirect';
    	
    // };
	return new orderModel();
});