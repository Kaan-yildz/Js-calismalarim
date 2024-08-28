let yenisatır = "\r\n";
let metin = "1-pazartesi" + yenisatır
    + "2-salı" + yenisatır
    + "3-çarşamba" + yenisatır
    + "4-perşembe" + yenisatır
    + "5-cuma" + yenisatır
    + "6-cumartesi" + yenisatır
    + "7-pazar" + yenisatır
    + "lütfen bir seçim yapınız";

let deger = prompt(metin);
switch (deger) {
    case "1":
        console.log("bugün pazartesi");
        break;

    case "2":
        console.log("bugün salı");
        break;
    case "3":
        console.log("bugün çarşamba");
        break;
    case "4":
        console.log("bugün perşembe");
        break;
    case "5":
        console.log("bugün cuma");
        break;
    case "6":
        console.log("bugün cumartesi");
        break;
    case "7":
        console.log("bugün pazar");
        break;
    default:
        console.log("lütfen geçerli bir değer girin!");
}

let yenisatir = "\r\n";

let bakiye = 1000;
let metin2 = "1-bakiye görüntüleme" + yenisatir
    + "2-para çekme" + yenisatir
    + "3-para yatırma" + yenisatır
    + "4-çıkış" + yenisatir
    + "lütfen yapmak istediğiniz işlemi seçiniz.";

let secim = prompt(metin);
switch (secim) {
    case "1":
        alert("bakiyeniz: " + bakiye);
        break;

    case "2":
        let cekilecektutar = Number(prompt("çekmek istediğiniz tutarı giriniz: "));
        if (cekilecektutar < bakiye) {
            bakiye = bakiye - cekilecektutar;
            alert("kalan bakiye: " + bakiye);
        }
        else {
            alert("bakiyenizden fazla para çekilemez" + yenisatir
                + "bakiyeniz: " + bakiye + " " + "çekilecek tutar: " + cekilecektutar);
        }
        break;

    case "3":
        let yatirilacaktutar = Number(prompt("yatırılacak tutarı giriniz: "));
        bakiye = bakiye + yatirilacaktutar;
        alert("güncel bakiyeniz:" + bakiye);
        break;

    case "4":
        alert("sistemden çıkış yapılmıştır, iyi günler...");
        break;

    default:
        alert("lütfen 1-4 arasında bir değer giriniz! ");
}

let yenisatir2 = "\r\n";

let turkcedogru, turkceyanlis = 0;
let matematikdogru, matematikyanlis = 0;
let sosyaldogru, sosyalyanlis = 0;
let fendogru, fenyanlis = 0;
let puan = 0;
let okulpuani = 0;

let mesaj = "tyt puan hesaplama uygulamasına hoşgeldiniz" + yenisatir
    + "1-puan hesapla" + yenisatir
    + "2-çıkış yap";

let secim2 = prompt(mesaj);

switch (secim) {
    case "1":
        turkcedogru = Number(prompt("türkçe doğru sayısı: "));
        turkceyanlis = Number(prompt("türkçe yanlış sayısı: "));

        matematikdogru = Number(prompt("matematik doğru sayısı: "));
        matematikyanlis = Number(prompt("matematik yanlış sayısı: "));

        sosyaldogru = Number(prompt("sosyal doğru sayısı: "));
        sosyalyanlis = Number(prompt("sosyal yanlış sayısı: "));

        fendogru = Number(prompt("fen doğru sayısı: "));
        fenyanlis = Number(prompt("fen yanlış sayısı: "));

        okulpuani = Number(prompt("okul puanınız: "));

        let dogrusayisi = turkcedogru + matematikdogru + sosyaldogru + fendogru;
        let yanlissayisi = turkceyanlis + matematikyanlis + sosyalyanlis + fenyanlis;

        let toplamnet = dogrusayisi - (yanlissayisi + yanlissayisi / 4);

        puan = (toplamnet * 4.25) + 100 + (okulpuani) * 60 / 100;
        alert("tyt puanınız: " + puan);
        break;

    case "2":
        alert("uygulamadan çıkış yapıldı, iyi günler...");
        break;
    default:
        alert("lütfen geçerli aralıkta değer giriniz!");
}
