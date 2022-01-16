define(['jquery', 'knockout', 'view/ui_components/corusel/scripts/newsdata'], function($,ko,newsdata){

    var data = newsdata;


    return {
        init:function(){
            ko.applyBindings(new this.getData(), document.querySelector("#corusel"));
        },
        getData:function(){
            var self = this;

            var i = 0;

            var numberofnews = data.length;

            self.imageSrc = ko.observable(data[i]['img']);
            self.coruselHeading = ko.observable(data[i]['title']);
            self.shortDes = ko.observable(data[i]['short_desc']);
            self.link = ko.observable(data[i]['link']);

            setInterval(function(){ 
                if(i < numberofnews){
                    i++;
                }
                else{
                    i = 0
                }
                self.imageSrc(data[i]['img']);
                self.coruselHeading(data[i]['title']);
                self.shortDes(data[i]['short_desc']);
                self.link(data[i]['link']);
            }, 8000);

            self.coruselPrev = function(){
                if(i > 0){
                    i--;
                }
                else{
                    i = numberofnews-1;
                }
                self.imageSrc(data[i]['img']);
                self.coruselHeading(data[i]['title']);
                self.shortDes(data[i]['short_desc']);
                self.link(data[i]['link']);
            }

            self.coruselNext = function(){
                if(i < numberofnews){
                    i++;
                }
                else{
                    i = 0
                }
                self.imageSrc(data[i]['img']);
                self.coruselHeading(data[i]['title']);
                self.shortDes(data[i]['short_desc']);
                self.link(data[i]['link']);
            }
        }
    }

});