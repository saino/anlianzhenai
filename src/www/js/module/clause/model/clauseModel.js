// 文件名称: productDetailsModel
//
// 创 建 人: fishYu
// 创建日期: 2016/8/25 18:46
// 描    述: 产品详情数据对象
"use strict";
define([], function () {
    var ClauseModel = function () {
    };

    var p = ClauseModel.prototype;

    p.getTermInfo = function(productId, cb_ok, cb_err){
        var opt = {};
        opt.url = "/ls/services/dt/productService/getTermInfo";
        opt.type = "POST";
        var data = {};
        data.productId = productId;
        opt.data = data;
        opt.success = function(result){
            if(result.status == 0) {
                if(cb_ok) cb_ok(result);
            }else {
                if(cb_err) cb_err(result.errorMessages);
            }
        };
        opt.error = function(err){
            if(cb_err) cb_err(err);
        };
        utils.requestData(opt);
    };

    var clauseModel = new ClauseModel();
    return clauseModel;
});