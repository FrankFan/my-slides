define(['backbone', 'views/slide'], function(Backbone, SlideView) {
    var SlidesView = Backbone.View.extend({

        el: $('.slides'),

        initialize: function() {
            this.currentSlideIndex = 1;
            this.transitionSpeed = 4000;

            this.renderAll();

            App.Vent.on('init', this.hideAllButFirst, this);
            App.Vent.on('changeSlide', this.changeSlide, this);
        },

        hideAllButFirst: function() {

            this.$el.children(':nth-child(n+2)').hide();
        },

        changeSlide: function(opts) {
            var newSlide;
            var slides = this.$el.children();
            // 
            if( opts.slideIndex ) {
                this.currentSlideIndex = ~~opts.slideIndex;
            } else {
                this.nextSlide(opts.direction);
            }

            newSlide = slides.eq(this.currentSlideIndex - 1);
            
            this.hideAllButFirst();

            // transition to that slide
            slides.filter(':visible')
                .css('position', 'absolute') // TEMPORARY
                .animate({
                    top: opts.direction === 'next' ? '100%' : '-100%',
                    opacity: 'hide'
                }, this.transitionSpeed, function() {
                    // slide is gone from view
                    $(this).css('top', 0);

                    // bring new slide to view                    
                    newSlide
                        .animate({
                            top: 0,
                            opacity: 'show'
                        }, this.transitionSpeed);
                })
        },

        nextSlide: function() {

        },

        renderAll: function() {
            this.$el.empty();
            this.collection.each(this.render, this);
        },

        render: function(slide) {
            var slideView = new SlideView({ model: slide });
            this.$el.append(slideView.render().el);

            return this;
        }

    });


    return SlidesView;
});