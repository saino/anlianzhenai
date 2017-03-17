define([], function(){
	var homeModel = function(){};

	homeModel.prototype.getWork = function(successCB, errorCB){
		var url = utils.config.serverUrl+"/ls/services/md/mdProposalRestService/getJobCategoryList";
		var option = {
			companyId: 89
		}
		$.ajax({
			method: "POST",
			url: url,
			data: JSON.stringify(option),
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
    homeModel.prototype.checkPhone = function(options, successCB, errorCB){
    	console.log(options,"lssssssssssssssss");
    	// var url = utils.config.serverUrl+"/ls/services/md/mdProposalRestService/checkMobile";
    	var url = utils.config.serverUrl+ "/ls/services/md/mdProposalRestService/checkMobile";
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
    			errorCB: errorCB(data);
    		}
    	});
    };

    homeModel.prototype.toBuyProduct = function(options, successCB, errorCB){
    	var url = utils.config.serverUrl + "/ls/services/md/mdProposalRestService/submitProposal";
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
    			errorCB: errorCB(data);
    		}
    	});
    };

    homeModel.prototype.getUserId = function(code, successCB, errorCB){
    	var url = utils.config.serverUrl+"";
    };

    homeModel.prototype.getWeiXinCode = function(){
    	var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+ utils.config.wxappid +'&redirect_uri='+ encodeURIComponent(window.location.href) +'&response_type=code&scope=snsapi_base#wechat_redirect';
    	
    };
	return new homeModel();
});