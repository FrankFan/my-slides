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


require(['views/app'], function(App) {
    new App();
});