/**
 * @file 全局初始化模块
 */

define(function(require) {
    require('er/config').indexURL = '/controllerAlpha/index';

    var actionConf = require('./actionConf');
    require(actionConf, function() {
        registerAction(arguments);
        require('er').start();
    });

    function registerAction(list) {
        var config = [];
        $.each(list, function(index, item) {
            $.merge(config, item);
        });
        $.each(config, function(index, item) {
            require('er/controller').registerAction(item);
        });
    }

});