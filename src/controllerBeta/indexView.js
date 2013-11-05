define(
    function(require) {
        require('er/tpl!./index.tpl');
        var View = require('er/View');
        function indexView() {
            View.apply(this, arguments);
        }

        indexView.prototype.template = 'targetBeta';

        require('er/util').inherits(indexView, View);
        return indexView;
    }
);