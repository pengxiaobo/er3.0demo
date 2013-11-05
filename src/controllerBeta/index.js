define(
    function(require) {
        var Action = require('er/Action');

        function indexAction() {
            console.log(this);
            Action.apply(this, arguments);
        }

        indexAction.prototype.modelType = require('controllerBeta/indexModel');
        indexAction.prototype.viewType = require('controllerBeta/indexView');

        require('er/util').inherits(indexAction, Action);

        return indexAction;
    }
);