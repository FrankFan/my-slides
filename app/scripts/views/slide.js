define(['backbone'], function(Backbone) {
	var Slide = Backbone.View.extend({
		className: 'slide',

        el: '#wrapper',

		render: function() {
			this.$el.html(
				'<h1>' + this.model.get('title') + '</h1>'
			);
		}
	});


	return Slide;
});