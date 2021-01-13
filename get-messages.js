function instructionMessage(){
    console.log('Parancssori Todo applikáció\n ============================= \n\n Parancssori argumentumok:\n -l   Kilistázza a feladatokat\n -a   Új feladatot ad hozzá\n -r   Eltávolít egy feladatot\n -c   Teljesít egy feladatot');

}
function wrongArg(){
    console.log("\nNem támogatott argumentum! \n");
}
function argA(){
    console.log("Nem lehetéges új feladat hozzáadása:\nnincs megadva a feladat!");
}
function withoutIndex(elem){
    console.log("Nem lehetséges a(z) " + elem + ", nem adott meg indexet!");
}
function NotANumber(elem){
    console.log("Nem lehetséges a(z) " + elem + ": a megadott index nem szám!");
}
function indexOutOfBound(elem){
    console.log("Nem lehetséges a(z) " + elem + ": túlindexelési probléma adódott");
}
function noMoreTodos(){
    console.log("Nincs mára tennivalód! :)");
}

export {instructionMessage, wrongArg, argA, withoutIndex, NotANumber, indexOutOfBound, noMoreTodos};
