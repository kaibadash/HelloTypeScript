/// <reference path="typings/tsd.d.ts" />
/**
* HTMLに結果を表示する。
* @param id htmlのID
* @param animal Animalのインスタンス
*/
function showAnimal(id, animal) {
    console.log(document.getElementById(id));

    // document.getElementById(id).innerHTML = animal.barks() + " " + animal.getWeight() + "kg";
    $("#" + id).html(animal.barks() + " " + animal.getWeight() + "kg");
}

// main
window.onload = function () {
    console.log("hello!!2");
    var dog = new Dog();
    var goat = new Goat();

    showAnimal("dog", dog);
    showAnimal("goat", goat);
};
//# sourceMappingURL=Main.js.map
