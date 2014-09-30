var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* 動物園のアイドル、ヤギクラス。
*/
var Goat = (function (_super) {
    __extends(Goat, _super);
    /**
    * コンストラクタ
    */
    function Goat() {
        _super.call(this, 30);
    }
    /**
    * 鳴き声を返す。ムーと鳴く。
    * @return 鳴き声の文字列
    */
    Goat.prototype.barks = function () {
        return "Moo...";
    };
    return Goat;
})(AnimalBase);
//# sourceMappingURL=Goat.js.map
