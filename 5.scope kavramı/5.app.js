/*
-----------SCOPE (KAPSAM) ------------

-->Global Scope: heryerden erişebilirsin(kıvırcık parantez içinde olmamalı)
-->Function Scope: sadece kıvırcık parantezdekilere erişebilen
-->Block Scope

*/

var degiskenismi = 10;

console.log(degiskenismi);

var a = 5;

if (true) {

}
function method1() {
    console.lo(a);
}

method1();

var b = 13; //global scope

function method1() {
    var sayi = 10;
    console.log(b);
}


method1();


function method1() {
    var a = 5; // function scope
    if (true) {
        var b = 10; // block scope
    }
    while (true) {

    }
    for (let i = 0; i <= 10; i++) {

    }
}

method1();