/*
? Veri Tipleri

1-string
2-number
3-boolean
4-null
5-undefined
6-object
7-function

!tanımladığımız ifadeyi" " içine yazarsak otomatik olarak string ifade olarak algılar.
*/
// ------------STRİNG VERİTİPİ------------
let isim ="kaan yıldız 23 yaşındadır.";
console.log(isim);
console.log(typeof isim);

let sayi1 = 10.5;
let sayi2 = 5.3;
console.log(sayi1+sayi2);
console.log(typeof sayi1);

// ------------NUMBER VERİTİPİ------------
let a ="5";
let b ="4";
console.log(a+b);

let k = 5;
let l = 4;
console.log(k+l);

let stringdegisken ="yaşınız: ";
let yas = 21;
console.log(stringdegisken + yas);

// ------------BOOLEAN   VERİTİPİ------------
// boolean : true ve false dan oluşur;

console.log(3>6);

let x = 3;
let y= 11;
let sonuc = x+y;
console.log(sonuc<15);

// ------------NULL VERİTİPİ------------

let r = null;

r=21;
console.log(r);

// ------------UNDEFİNED VERİTİPİ------------

let q;
console.log(typeof q);

// ------------OBJECT VERİTİPİ------------

let insan = {
     ad : "kaan",
    soyisim : "yıldız",
     yas : 21
}

console.log(insan);
console.log(typeof insan);

let rakamlar =[1,2,3,4,5];
console.log(typeof rakamlar);

let func = function(){
    console.log("merhaba");
}

func(); 
console.log(typeof func);
