/**
 * 動物インタフェース
 */
interface Animal {
	/**
	 * 鳴き声を返す。
	 * @return 鳴き声の文字列
	 */
	barks(): string;
	/**
	 * 重さを返す。単位はkg。
	 * @return 重さ
	 */
	getWeight(): number;
}