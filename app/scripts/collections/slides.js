define(['backbone', 'models/slides'], function(Backbone, SlideModel) {
    var Slides = Backbone.Collection.extend({
        model: SlideModel
    });

    return Slides;
});