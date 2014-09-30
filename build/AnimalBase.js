/**
* 動物抽象クラス。
* TypeScriptに抽象クラスはないので、抽象メソッドは例外を投げる。
*/
var AnimalBase = (function () {
    /**
    * コンストラクタ
    */
    function AnimalBase(weight) {
        this.weight = weight;
    }
    /**
    * 鳴き声を返す。
    * @return 鳴き声の文字列
    */
    AnimalBase.prototype.barks = function () {
        throw new Error('This method is abstract');
    };

    /**
    * 重さを返す。単位はkg。
    * @return 重さ
    */
    AnimalBase.prototype.getWeight = function () {
        return this.weight;
    };
    return AnimalBase;
})();
//# sourceMappingURL=AnimalBase.js.map
