define(
    function(require) {
        var Action = require('er/Action');

        function indexAction() {
            Action.apply(this, arguments);
        }

        indexAction.prototype.modelType = require('controllerAlpha/indexModel');
        indexAction.prototype.viewType = require('controllerAlpha/indexView');

        require('er/util').inherits(indexAction, Action);

        return indexAction;
    }
);