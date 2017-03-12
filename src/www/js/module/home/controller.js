define([
    'module/home/views/homeView',
], function(homeView){
    return {
        home: function(){
            console.log("hhhhh");
            app.page.show(homeView);
        }
    };
});