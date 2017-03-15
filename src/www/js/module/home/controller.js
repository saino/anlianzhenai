define([
    'module/home/views/homeView',
], function(homeView){
    return {
        home: function(){
            app.page.show(homeView);
        }
    };
});