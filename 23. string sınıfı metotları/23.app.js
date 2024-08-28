//STRING SINIFININ METOTLARI

//charAt(): vermiş olduğumuz index numarasındaki karakteri döner.

let kurs1= "modern web geliştirme";
let karakter = kurs1.charAt(3);
console.log(karakter);

//concat(): stringleri birleştirmek için kullanılır.

let kurs2= "modern web geliştirme";
let tarih= "2024";
let sonuc1= kurs2.concat(" ",tarih," kaan");
console.log(sonuc);

//indexOf(): vermiiş olduğumuz karakterin index numarasının verir.

let kurs3= "modern web geliştirme";
let index1 = kurs3.indexOf("w");
console.log(index);

//lastinndexof(): indexof ile benzer.

let kurs4= "modern web geliştirme";
let index2= kurs4.lastIndexOf("web");
console.log(index);

//toUpperCase(): kelimelerin hepsini büyük harfe çevirir.

let kurs5= "modern web geliştirme";
let sonuc2= kurs5.toUpperCase();
console.log(kurs5);
console.log(sonuc);

//toLowerCase(): kelimlerin tamamını küçük harfe çevirir.

let kurs6= "Modern Web Geliştirme";
let sonuc = kurs6.toLowerCase();
console.log(sonuc);

//trim(): boşlukları temizlemek için kullanılır.

let kurs7= "             modern web geliştirme           ";
console.log(kurs7.trim());

//slice():başlangıç indexi veriyoruz bitiş indexi veriyoruz,
//o da bize bunların arasındaki karakterleri veriyo

let kurs8= "modern web geliştirme";
console.log(kurs8);
console.log(kurs8.slice(7,10));

//substring(): slice ile aynı gibi.

let kurs9= "modern web geliştirme";
console.log(kurs9);
console.log(kurs9.substring(0,6));

//replace(): halihazırda var olan metindeki veriyi istediğimiz veriyle değiştirir.

let kurs0= "modern web geliştirme";
console.log(kurs0);
console.log(kurs0.replace("modern","güncel"));

//split(): verdiğimiz koşula göre verileri dilim dilim yapar ve birer dizi haline getirir.

let kurs01= "modern,web,geliştirme";
console.log(kurs01);
let dizi=kurs01.split(",");
console.log(dizi);

//valueOf(): daha sonra göreecekmişiz

let kurs02= "modern web geliştirme";
console.log(kurs02.valueOf());

//startsWith():bana bir harf veya kelime ver bende verdiğin harfle mi başlıyo onu söyliyim diyo

let kurs03= "modern web geliştirme";
console.log(kurs03);
console.log(kurs03.startsWith("m"));
if(kurs03.startsWith("m")){
    console.log("m harfi ile başlamakatadır");
}

//endsWith(): bana bir harf veya kelime ver yazdığın şey o harfle mi bitiyor bakayım.

let kurs04= "modern web geliştirme";
console.log(kurs04);
console.log(kurs04.endsWith("geliştirme"));
