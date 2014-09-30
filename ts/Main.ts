/// <reference path="typings/tsd.d.ts" />

/**
 * HTMLに結果を表示する。
 * @param id htmlのID
 * @param animal Animalのインスタンス
 */
function showAnimal(id:string, animal:Animal) {
	console.log(document.getElementById(id));
	// document.getElementById(id).innerHTML = animal.barks() + " " + animal.getWeight() + "kg";
	$("#" + id).html(animal.barks() + " " + animal.getWeight() + "kg");
} 

// main
window.onload = function() {
	console.log("hello!!2");
	var dog : Animal = new Dog();
	var goat : Animal = new Goat();
	
	showAnimal("dog", dog);
	showAnimal("goat", goat);
}
