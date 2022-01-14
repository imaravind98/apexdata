define(['knockout'], function(ko){

   

    return {
        init : function(){
            ko.applyBindings(new this.navigation(), document.querySelector("#navigation-bar"));
        } ,

        navigation : function(){
            
            this.navigationBar = ko.observable('<div class="site-logo"><img src="view/media/logo/Apex.png"></div><div class="navigation-menus"><div><a href="#"><i class="fas fa-home"></i></a></div><div><a href="#"><i class="fas fa-newspaper"></i></a></div><div><a href="#"><i class="fa fa-user" aria-hidden="true"></i></a></div></div>');

        }

    }
})