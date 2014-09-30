/**
 * 猫より愛しい犬クラス。
 */
class Dog extends AnimalBase {
	/**
	 * コンストラクタ
	 */
	constructor() {
		super(15);
	}
	
	/**
	 * 鳴き声を返す。バウと鳴く。
	 * @return 鳴き声の文字列
	 */
	barks(): string {
		return "Bow!";
	}
}