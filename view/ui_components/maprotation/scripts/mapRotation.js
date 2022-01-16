define(['jquery','knockout'], function($,ko){


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
    

    mapRotation = function(){

        var self = this;

        self.battleRoyaleMapName = data['battle_royale']['current']['map'];
        self.rankedMapName = data['ranked']['current']['map'];
        self.arenasMapName = data['arenas']['current']['map'];
        self.rankedArenasMapName = data['arenasRanked']['current']['map'];

        self.battleRoyaleMapImg = data['battle_royale']['current']['asset'];
        self.rankedMapImg = data['ranked']['current']['asset'];
        self.arenasMapImg = data['arenas']['current']['asset'];
        self.rankedArenasMapImg = data['arenasRanked']['current']['asset'];

        self.battleRoyaleMapNext = "Next: "+data['battle_royale']['next']['map'];
        self.rankedMapNext = "Next: "+data['ranked']['next']['map'];
        self.arenasMapNext = "Next: "+data['arenas']['next']['map'];
        self.rankedArenasMapNext = "Next: "+data['arenasRanked']['next']['map'];

        self.battleRoyaleMapTime = data['battle_royale']['current']['remainingTimer'];
        self.arenasMapTime = data['arenas']['current']['remainingTimer'];
        self.rankedArenasMapTime = data['arenasRanked']['current']['remainingTimer'];

        self.battleRoyaleMapDuration = "Duration: "+data['battle_royale']['next']['DurationInMinutes'];
        self.arenasMapDuration = "Duration: "+data['arenas']['next']['DurationInMinutes'];
        self.rankedArenasMapDuration = "Duration: "+data['arenasRanked']['next']['DurationInMinutes'];

    }

    ko.applyBindings(new mapRotation(), document.querySelector("#map-rotation"));

});