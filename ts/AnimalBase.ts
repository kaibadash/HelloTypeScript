/**
 * 動物抽象クラス。
 * TypeScriptに抽象クラスはないので、抽象メソッドは例外を投げる。
 */
class AnimalBase implements Animal {
	private weight : number;
	
	/**
	 * コンストラクタ
	 */
	constructor(weight : number) {
		this.weight = weight;
	}
	
	/**
	 * 鳴き声を返す。
	 * @return 鳴き声の文字列
	 */
	barks(): string {
		throw new Error('This method is abstract');
	}
	
	/**
	 * 重さを返す。単位はkg。
	 * @return 重さ
	 */
	getWeight() : number {
		return this.weight;
	}
}