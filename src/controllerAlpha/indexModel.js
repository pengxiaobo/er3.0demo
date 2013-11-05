define(
    function() {
        var Model = require('er/Model');
        function indexModel() {
            Model.apply(this, arguments);

            this.datasource = {
                mydata: function(){
                    return "I am controllerAlpha";
                }
            };
        }

        indexModel.prototype.prepare = function() {
            var mydata = this.get('mydata');
            this.set('demoInfo', mydata);
        };

        require('er/util').inherits(indexModel, Model);
        return indexModel;
    }
);