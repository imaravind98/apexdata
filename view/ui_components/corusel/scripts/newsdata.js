define(['jquery'], function($){

    return {
        data : function(){
            this.data = $.get(
                "/Model/Api/News.php",
            );

            return this.data;
        }
    }
})