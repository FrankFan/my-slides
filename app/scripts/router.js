define(['backbone'], function(Backbone) {
    var Main = Backbone.Router.extend({

        routes: {
            '': 'home',
            'slides/:id': 'showSlide'
        },

        home: function() {
            console.log('home router');
            App.Vent.trigger('init');
        },

        showSlide: function(slideIndex) {
            console.log('showSlide router index is ' + slideIndex);
            App.Vent.trigger('changeSlide', {
                slideIndex: slideIndex,
                direction: 'next'
            });
        }
    });

    return Main;
});