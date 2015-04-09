define(['backbone'], function(Backbone) {
    var Main = Backbone.Router.extend({

        routes: {
            '': 'home',
            'slides/:id': 'showSlide'
        },

        home: function() {
            App.Vent.trigger('init');
        },

        showSlide: function(slideIndex) {
            console.log( slideIndex );
        }
    });

    return Main;
});