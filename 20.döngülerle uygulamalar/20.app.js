// ----------ÇARPIM TABLOSU-----------

for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++) {
        console.log(i + "*" + j + "=" + (i * j));
    }
    console.log("--------------------------------");
}

//---------- ASAL SAYI UYGULAMASI-----------

let sayi1 = Number(prompt("lütfen bir sayı giriniz: "));
let sonuc = true;
for(let i = 2; i <= Math.floor(sayi / 2); i++) {
    if(sayi1 % i == 0) {
        sonuc = false;
        break;
    }
}
if(sonuc) {
    alert(sayi1 + " asaldır.");
} else {
    alert(sayi1 + " asal değildir");
}

//---------FAKTÖRİYEL HESAPLAMA---------

let sayi2 = Number(prompt("bir sayı giriniz: "));
let carpim = 1;

for(let i = 1; i <= sayi2; i++) {
    carpim = carpim * i;
}
alert("sonuc " + carpim);

//-------ARMSTRONG SAYISI BULMA-------

// bir sayının rakamlarının küplerinin toplamı sayıyı vermesidir.
// 153-370-407 birer armstrong sayısıdır

let sayi3 = prompt("sayı giriniz");
let toplam = 0;
for(let i = 0; i < sayi3.length; i++) {
    let rakam = sayi3.charAt(i);
    toplam += rakam * rakam * rakam;
}
if(Number(sayi) == toplam) {
    alert("armstrong sayısıdır");
} else {
    alert("armstrong sayısı değildir");
}
