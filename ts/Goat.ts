/**
 * 動物園のアイドル、ヤギクラス。
 */
class Goat extends AnimalBase {
	/**
	 * コンストラクタ
	 */
	constructor() {
		super(30);
	}
	
	/**
	 * 鳴き声を返す。ムーと鳴く。
	 * @return 鳴き声の文字列
	 */
	barks(): string {
		return "Moo...";
	}
}