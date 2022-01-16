define(['jquery'], function($){

    function ajaxCall(callback){
        $.ajax({
            async:false,
            url: "/Model/Api/MapRotation.php",
            type: 'GET',
            dataType: 'json', // added data type
            success: function(res) {
                callback(res);
            }
        });
    }
    var data = [];
    ajaxCall(result => {
        data = result;
    });

    return data;

});