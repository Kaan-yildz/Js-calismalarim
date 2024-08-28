// KOŞUL YAPILARI

let not = 35;

if (not > 50) {
    console.log("geçtiniz, notunuz: " + not);
} else {
    console.log("kaldınız, notunuz :" + not);
}
let yas = Number(prompt("yaşınız: "));
console.log(typeof yas);
let para = Number(prompt("bütçeniz : "));

if (yas >= 18 && para >= 3000) {
    alert("ehliyet sınavına katılabilirsiniz");
} else {
    alert("ehliyet sınavına katılamazsınız...");
}

// --------DERS ORTALAMASI BULMA-------

// vize1 %30 , vize2 %30 , final %40

let vize1 = Number(prompt("vize 1 notunuzu girin : "));
let vize2 = Number(prompt("vize 2 notunuzu girin : "));
let final = Number(prompt("final notunuzu girin : "));

let ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);

if (ortalama >= 60) {
    alert("dersten geçtiniz tebrikler :) -->" + ortalama);
    console.log("dersten geçtiniz tebrikler :)");
} else {
    alert("kaldınız, geçmiş olsun :( -->" + ortalama);
    console.log("kaldınız, geçmiş olsun :(");
}


//------------- ELSE İF YAPISI

let secilenyol = prompt("lütfen gitmek istediğiniz yolu seçiniz: ");

if (secilenyol == 1) {
    alert("seçilen yol " + secilenyol + ". yoldur.");
} else if (secilenyol == 2) {
    alert("seçilen yol " + secilenyol + ". yoldur.");
} else if (secilenyol == 3) {
    alert("seçilen yol " + secilenyol + ". yoldur.");
} else {
    alert("lütfen geçerli bir yol seçiniz!!");
}


//------------- ÇOKLU İF KULLANMAK

/*
adını ve tckn
ad: boş geçilemez
tckn: 11 karakterden oluşmalıdır
*/


let ad = prompt("isminizi giriniz: ");
let tckn = prompt("tckn giriniz: ");
kontrolEt(ad, tckn);

function kontrolEt(ad, tckn) {
    if (ad != "") {
        if (tckn.length == 11) {
            console.log("isim ve tckn problemsiz girildi");
        } else {
            console.log("tckn 11 karakter olarak girilmelidir");
        }

    } else {
        console.log("lütfen isim alanını boş bırakmayın!!!");
    }

}


let ad2 = prompt("isminizi giriniz: ");
let tckn2 = prompt("tckn giriniz: ");
kontrolEt2(ad2, tckn2);

function kontrolEt2(ad2, tckn2) {
    if (ad2 == "") {
        console.log("lütfen isim alanını boş bırakmayın!!!");
        return;
    }
    if (tckn2.length != 11) {
        console.log("lütfen tc nizi 11 karakter olarak giriniz");
        return;
    }
    console.log("isim ve tckn problemsiz girildi");
}


// ---------BEDEN KİTLE ENDEKSİ HESAPLAMA--------

let kilo = Number(prompt("kilonuzu giriniz"));
let boy = Number(prompt("boyunuzu metre cinsinden giriniz"));

let sonuc = kilo / (boy * 2);

if (sonuc < 18.5) {
    console.log(" İdeal kilonun altında " + sonuc);
} else if (sonuc >= 18.5 && sonuc <= 24.9) {
    console.log(" İdeal kiloda " + sonuc);
} else if (sonuc >= 25 && sonuc <= 29.9) {
    console.log("İdeal kilonun üstünde " + sonuc);
} else if (sonuc >= 30 && sonuc <= 39.9) {
    console.log(" İdeal kilonun çok üstünde (obez) " + sonuc);
} else if (sonuc >= 40) {
    console.log(" İdeal kilonun çok üstünde (morbid obez) " + sonuc);
}


// -----------BENZİN İSTASYONU-------------

let dizel = 40.16, benzin = 42.67, lpg = 20.97;
const yenisatir = "\r\n"; // altsatıra geçmek için böyle bir tanımlama yaptık

const yakitmetni = "1-dizel" + yenisatir
    + "2-benzin" + yenisatir
    + "3-lpg" + yenisatir
    + "yakıt türünü seçiniz";

let yakittipi = prompt(yakitmetni);
if (yakittipi == "1" || yakittipi == "2" || yakittipi == "3") {
    let yakitlitresi = Number(prompt("yakıt litresini giriniz"));
    let bakiye = Number(prompt("bakiyenizi giriniz"));

    if (yakittipi == "1") {
        //dizel
        let odenecektutar = dizel * yakitlitresi;
        if (odenecektutar < bakiye) {
            //bakiyeniz yeterli
            bakiye = bakiye - odenecektutar;
            alert("yakıt alma işlemi başarılı" + yenisatir
                + "kalan bakiye: " + bakiye);
        } else {
            //bakiye yeterli değil
            alert("bakiyeniz yeterli değildir" + yenisatir
                + "ödenecek tutar: " + odenecektutar + yenisatir
                + "bakiye: " + bakiye + yenisatir
                + "eksik tutar: " + (odenecektutar - bakiye));
        }
    } else if (yakittipi == "2") {
        //benzin
        let odenecektutar = benzin * yakitlitresi;
        if (odenecektutar < bakiye) {
            //bakiyeniz yeterli
            bakiye = bakiye - odenecektutar;
            alert("yakıt alma işlemi başarılı" + yenisatir
                + "kalan bakiye: " + bakiye);
        } else {
            //bakiye yeterli değil
            alert("bakiyeniz yeterli değildir" + yenisatir
                + "ödenecek tutar: " + odenecektutar + yenisatir
                + "bakiye: " + bakiye + yenisatir
                + "eksik tutar: " + (odenecektutar - bakiye));
        }
    } else if (yakittipi == "3") {
        //lpg
        let odenecektutar = lpg * yakitlitresi;
        if (odenecektutar < bakiye) {
            //bakiyeniz yeterli
            bakiye = bakiye - odenecektutar;
            alert("yakıt alma işlemi başarılı" + yenisatir
                + "kalan bakiye: " + bakiye);
        } else {
            //bakiye yeterli değil
            alert("bakiyeniz yeterli değildir" + yenisatir
                + "ödenecek tutar: " + odenecektutar + yenisatir
                + "bakiye: " + bakiye + yenisatir
                + "eksik tutar: " + (odenecektutar - bakiye));
        }
    } else {
        alert("lütfen doğru yakıt numarasını giriniz");
    }
}
