define([], function(){
	var homeModel = function(){};

	homeModel.prototype.getWork = function(successCB, errorCB){
		var url = "http://172.30.2.158:8080/ls/services/md/mdProposalRestService/getJobCategoryList";
		$.ajax({
			method: "POST",
			url: url,
			// data: JSON.stringify("3"),
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

    homeModel.prototype.getWeiXinCode = function(){
    	var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+ utils.config.wxappid +'&redirect_uri='+ encodeURIComponent(window.location.href) +'&response_type=code&scope=snsapi_base#wechat_redirect';
    	
    };
	return new homeModel();
});