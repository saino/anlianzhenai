define([
    'module/order/views/orderView',
    'module/order/views/orderDetaillView'
], function(orderView, orderDetaillView){
    return {
        order: function(){
            app.page.show(orderView);
        },
        orderDetaill: function(codeId){
        	app.page.show(orderDetaillView,{codeId: codeId});
        }
    };
});