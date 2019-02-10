var Model = /** @class */ (function () {
    function Model() {
        this.counter = this.Size();
    }
    Model.prototype.Set = function (list, index) {
        localStorage.setItem(index, list);
    };
    Model.prototype.Get = function (index) {
        return localStorage.getItem(index);
    };
    Model.prototype.Drop = function (index) {
        localStorage.removeItem(index.toString());
    };
    Model.prototype.Size = function () {
        return localStorage.length;
    };
    Model.prototype.Step = function () {
        return this.counter;
    };
    return Model;
}());
var receiver = new Model();
