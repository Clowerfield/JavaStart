var Controller = /** @class */ (function () {
    function Controller(receive) {
        this.model = receive;
    }
    Controller.prototype.next = function () {
        return this.model.Step();
    };
    Controller.prototype.create = function (Good, Article, Price) {
        this.model.Set((Good + "," + Article + "," + Price), (this.next()).toString());
    };
    Controller.prototype.ucreate = function (Good, Article, Price, index) {
        this.model.Set((Good + "," + Article + "," + Price), index.toString());
    };
    Controller.prototype.read = function (index) {
        return (this.model.Get(index.toString())).split(',');
    };
    Controller.prototype.upgrade = function (Good, Article, Price, index) {
        this.read(index);
        this.ucreate(Good, Article, Price, index.toString());
    };
    Controller.prototype["delete"] = function (index) {
        this.model.Drop(index);
    };
    return Controller;
}());
var rule = new Controller(new Model());
