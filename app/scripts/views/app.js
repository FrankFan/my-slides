define([
    'backbone', 
    'views/slides', 
    'collections/slides',
    'router'
], 
function(Backbone, SlidesView, SlidesCollection, MainRouter) {

    var AppView = Backbone.View.extend({

        el: 'body',

        initialize: function() {
            var testCollection = [
                { title: 'My First Slide' },
                { title: 'My Second Slide' },
                { title: 'My Third Slide' }
            ];

            new SlidesView({
                collection: new SlidesCollection(testCollection)
            });

            App.router = new MainRouter();
            // 开启Backbone路由支持
            Backbone.history.start();
        }
    });

    return AppView;
});