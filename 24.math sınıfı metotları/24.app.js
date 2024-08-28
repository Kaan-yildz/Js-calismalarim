/* 
1-Floor
2-Ceil
3-Round

4-Max
5-Min

6-Random:
8-Sqrt
9-Pow
---> PI sayısı
*/

//FLOOR: eğer küsüratlı bir sayı yazdıysak küsüratları atar

let a= 3.90;
console.log(Math.floor(a));

// CEİL: küsüratlı sayıyı en yüksek tamsayıya yuvarlar.

let b=3.11;
console.log(Math.ceil(a));

//ROUND: küsüratlı sayıyı en yakın olduğu tamsayıya yuvarlar.

let c=3.76;
let d=3.44;
console.log(Math.round(a));
console.log(Math.round(b));

//MAX: verilen sayılar içerisinden en büyük olanı gösterir.

console.log(Math.max(1,4,6,9,22));

//MİN: verilen sayılar içerisinden en küçük olanı gösterir.

console.log(Math.min(12,32,22,41,90));

//ABS: verilen sayının mutlak değerinş almak için kulanılır. 

let e= -54;
console.log(Math.abs(a));

//SQRT: verilen sayının karekökünü alır.

let f= 225;
console.log(Math.sqrt(225));

//POW: verilen sayının karesini almak için kullanılırç

console.log(Math.pow(5,3));

//PI

console.log(Math.PI);

//RANDOM: sıfırla bir arasında random değerler verir.

console.log(Math.random());

//farklı bir örnek yapalım aşağıda...

let randomdeger= Math.random();
let sonuc= randomdeger*100;
let sonucyuvarla= Math.floor(sonuc);

console.log(randomdeger);
console.log(sonuc);
console.log(sonucyuvarla);
