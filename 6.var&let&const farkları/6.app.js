/*
var/let/const degiskenismi=degiskendegeri;
let sayi=10;
*/
//var: function scope olmasını sağlar(block scope u da function scope olarak düşünür ve çoğu yerden erişilebildiği için ram bellekte çok yer kaplar)
//let /const: block scope özelliğine sahiptir yani if dışında yazılırsa hata verir.

function selamver() {

    var selam = "herkese selam"; //function scope
    if (true) {
        var b = 10;
    }
    console.log(b);
    console.log(selam);
}
selamver();

function selamver() {
    var selam = "herkese selam"; //function scope
    if (true) {
        const b = 10; //console yazısı if dışında olduğu için hata verir.
    }
    console.log(b);
    console.log(selam);
}
selamver();


var a=5;
var a=10;
console.log(a); //sıkıntısız çalışır ve son yazılan 10 değeri olduğu için 10 çıktısını verir.

if(true){
    let a=5;
    let a=10;  //hata verir çünkü bir üstte zaten a tanımladık farklı bir değişken ismi tanımlamalıyız.
}
console.log(a);

// LET & CONST arasındaki fark?

const a=10;
a=15;
console.log(a);  //constta değer güncellemesi yapamayız.

let b=5;
b=7;
b=12;
console.log(b);  //ama let te değer güncellemesi yapabiliriz son değer 12 olur.

const user={
    username:"kaan",
    password:"12323"
}
user.username="kaanyildiz";
console.log(user);
