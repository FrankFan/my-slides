/*global require*/
'use strict';

require.config({

	// 非AMD模块的js可使用shim配置导出
    shim: {
    	'backbone': {
    		deps: ['underscore', 'jquery'],
    		exports: 'Backbone'
    	}
    },

	// 根据路径定义别名 alias
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash'
    }
});

require([
    'models/slides',
    'views/slide'
], function (SlideModel, SlideView) {
    Backbone.history.start();

    var slide = new SlideModel({ title: 'My second Slide'});
    var slideView = new SlideView({ model: slide});

    slideView.render();

    console.log(slideView.el);
});
