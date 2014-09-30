var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* 猫より愛しい犬クラス。
*/
var Dog = (function (_super) {
    __extends(Dog, _super);
    /**
    * コンストラクタ
    */
    function Dog() {
        _super.call(this, 15);
    }
    /**
    * 鳴き声を返す。バウと鳴く。
    * @return 鳴き声の文字列
    */
    Dog.prototype.barks = function () {
        return "Bow!";
    };
    return Dog;
})(AnimalBase);
//# sourceMappingURL=Dog.js.map
