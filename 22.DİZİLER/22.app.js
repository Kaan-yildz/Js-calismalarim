// DİZİLERE BAŞLAYALIM

let sayilar=[0,1,2,3,4,5,"kaan",7,8,9,"mahmut"];
sayilar[sayilar.length-1]="mehmet";
console.log(sayilar[10]);


let isimler = ["kaan","rümeysa","hamdi","neslihan"];
isimler[2]= "yakup";
console.log(isimler);


let karisikdizi= ["kaan",7,8,true,null,undefined];
console.log(karisikdizi[3]);


let isimler= new Array("kaan","ahmet");
console.log(isimler);


//new Array: bu da dizi oluşturmaktır.

let dizi1= ["kaan","ali"];
let dizi2= new Array("kaan","ali");
console.log(typeof dizi2);
object(diziymiş)

// FOREACH DÖNGÜSÜ

//foreach sadece dizilerde kullanılır.

let isimler = ["kaan", "bilal", "hamza", "ismail", "ahmet", "mustafa"];
let sayac = 0;

isimler.forEach(function(isim){
    console.log(isim);
});

// aşağıdakii gibi de yapabiliriz.

while (sayac < isimler.length) {
    console.log(isimler[sayac]);
    sayac++;
}

for (let i = 0; i < isimler.length; i++){
    console.log(isimler[i]);
}


//------------- DİZİNİN METOTLARI -------------

/* 
push : dizinin sonuna eleman ekler, ayrıca dizinin ununluğunu döner.
unshift : dizinin başına eleman ekler, eleman sayısını geriye döner.

pop : dizinin sonundan eleman siler, eleman sayısını döner.
shift : dizinin başından eleman siler, eleman sayısını döner.

splice(index,incdex) : eleman eklemek ve silmek için kullanılır.

toString : diziyi stringe dönüştürebiliriz.
join : diziyi stringe çevirir. farkı ise araya eleman ekleyebiliriz.

concat : dizileri birleştirmek için kullanılır.
slice : diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
length : dizinin uzunluğunu verir.
reverse : dizinin elemanlarını ters çevirir.
split : belirli bir ifadeye göre bölüp diziye çevirir.
indexOf : elemanın index numarasını verir.
includes : verilen elemanı içeriyor mu ona bakar.

*/


//PUSH METODU
let arabalar1 = ["hyundai","mercedes","toyota","dodge","ford","bmw","porsche"];

console.log(arabalar1.length);
arabalar.push("opel");
console.log(arabalar1);


//UNSHİFT METODU
let arabalar4 = ["hyundai","mercedes","toyota","dodge","ford","bmw","porsche"];

arabalar4.unshift("audi");
console.log(arabalar4);


//POP METODU
let arabalar3 = ["hyundai","mercedes","toyota","dodge","ford","bmw","porsche"];

let silineneleman1=arabalar.pop();
console.log(arabalar);
console.log(silineneleman1);


//SHİFT METODU,
let arabalar5 = ["hyundai","mercedes","toyota","dodge","ford","bmw","porsche"];

let silineneleman= arabalar5.shift();
console.log(arabalar5);
console.log(silineneleman)


//SPLİCE METODU
let arabalar6 = ["hyundai","mercedes","toyota","dodge","ford","bmw","porsche"];

console.log(arabalar6);
arabalar6.splice(2,0,"alfa romeo") // bana başlangıç indexini ver,kaç tane eleman sileyim,silmiyorsan eleman ekle.
console.log(arabalar6);

arabalar6.splice(1,2);
console.log(arabalar6);

arabalar6.splice(2,2,"tesla");
console.log(arabalar6);


//TOSTRİNG METODU
let arabalar7 = ["hyundai","mercedes","toyota","dodge","ford","bmw","porsche"];

console.log(typeof arabalar);
let stringarabalar1= arabalar.toString();
console.log(typeof stringarabalar1);
console.log(stringarabalar1);


//JOİN METODU
let arabalar8 = ["hyundai","mercedes","toyota","dodge","ford","bmw","porsche"];

let stringarabalar= arabalar8.join("--");
console.log(stringarabalar);
console.log(typeof stringarabalar);


//CONCAT METODU
let arabalar9 = ["hyundai","mercedes","toyota","dodge","ford","bmw","porsche"];
let arabalar2 = ["subaru","mitsubishi","mazerati","nissan"];

let birlesmisdizi= arabalar9.concat(arabalar2);
console.log(birlesmisdizi);


//SLİCE METODU
let arabalar0 = ["hyundai","mercedes","toyota","dodge","ford","bmw","porsche"];

console.log(arabalar0);
let ayridizi= arabalar0.slice(3);
console.log(ayridizi);


//REVERSE METODU
let arabalar01 = ["hyundai","mercedes","toyota","dodge","ford","bmw","porsche"];

console.log(arabalar01);
arabalar01.reverse();
console.log(arabalar01);


//SPLİT METODU
let isimler = "kaan,koray,sercan";

let isimlerdizi = isimler.split(",");
console.log(isimlerdizi);


//İNDEXOF METODU
let arabalar02 = ["hyundai","mercedes","toyota","dodge","ford","bmw","porsche"];

let index = arabalar02.indexOf("mercedes");
console.log(index);

let index2 = arabalar02.indexOf("audi");
console.log(index2);


//İNCLUDES METODU
let arabalar03 = ["hyundai","mercedes","toyota","dodge","ford","bmw","porsche"];

let sonuc = arabalar03.includes("toyota");
console.log(sonuc);

let sonuc2 = arabalar03.includes("mazerati");
console.log(sonuc2);


//ÜRÜN ARAMA ALGORİTMASI

let urun1= {
    isim: "ACER Swift",
    kategori: "Teknoloji",
    fiyat: 6.219
}

let urun2= {
    isim: "ACER Nitro 5",
    kategori: "Teknoloji",
    fiyat: 15.999
}

let urun3= {
    isim: "LENOVO V15",
    kategori: "Teknoloji",
    fiyat: 10.999
}

let urun4= {
    isim: "LENOVO V14",
    kategori: "Teknoloji",
    fiyat: 4.399
}

let urun5= {
    isim: "LENOVO Ideapad",
    kategori: "Teknoloji",
    fiyat: 4.510
}

let urunler = [urun1,urun2,urun3,urun4,urun5];
let filtreliurunler = [];
let kullaniciurunismi = prompt("bir ürün ismi giriniz: ");

filtreliurunleridoldur(urunler);
filtreliurunleriyazdir(filtreliurunler);


function filtreliurunleridoldur(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(kullaniciurunismi.toUpperCase(),0)){
            filtreliurunler.push(urun);
        }
    });
}

function filtreliurunleriyazdir(urunler){
    urunler.forEach(function(urun){
        console.log("------------------------------");
        console.log("| "+ urun.isim+"| "+urun.fiyat+"| "+urun.kategori);
        console.log("------------------------------");
    });
}



//-------------------KİTAP BULMA UYGULAMASI------------------

let kitap1 = { isim: "Her Şeyi Düşünme", yazar: "Anne Bogel", fiyat: 25 ,raf:"1.5.RAF"}
let kitap2 = { isim: "Hiçbir Karşılaşma Tesadüf Değildir", yazar: "Hakan Mengüç", fiyat: 56,raf:"2.3.RAF" }
let kitap3 = { isim: "İnsan Neyle Yaşar", yazar: "Tolstoy", fiyat: 34 ,raf:"3.4.RAF"}
let kitap4 = { isim: "Zafer Sızlanarak Kazanılmaz", yazar: "Haluk Tatar", fiyat: 45,raf:"4.1.RAF" }
let kitap5 = { isim: "Şeker Portakalı", yazar: "José Mauro de Vasconcelos", fiyat: 22,raf:"5.3.RAF"}

let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5];


let raf11 = { kod: "1.1.RAF", goster: false }
let raf12 = { kod: "1.2.RAF", goster: false }
let raf13 = { kod: "1.3.RAF", goster: false }
let raf14 = { kod: "1.4.RAF", goster: false }
let raf15 = { kod: "1.5.RAF", goster: false }


let raf21 = { kod: "2.1.RAF", goster: false }
let raf22 = { kod: "2.2.RAF", goster: false }
let raf23 = { kod: "2.3.RAF", goster: false }
let raf24 = { kod: "2.4.RAF", goster: false }
let raf25 = { kod: "2.5.RAF", goster: false }

let raf31 = { kod: "3.1.RAF", goster: false }
let raf32 = { kod: "3.2.RAF", goster: false }
let raf33 = { kod: "3.3.RAF", goster: false }
let raf34 = { kod: "3.4.RAF", goster: false }
let raf35 = { kod: "3.5.RAF", goster: false }

let raf41 = { kod: "4.1.RAF", goster: false }
let raf42 = { kod: "4.2.RAF", goster: false }
let raf43 = { kod: "4.3.RAF", goster: false }
let raf44 = { kod: "4.4.RAF", goster: false }
let raf45 = { kod: "4.5.RAF", goster: false }

let raf51 = { kod: "5.1.RAF", goster: false }
let raf52 = { kod: "5.2.RAF", goster: false }
let raf53 = { kod: "5.3.RAF", goster: false }
let raf54 = { kod: "5.4.RAF", goster: false }
let raf55 = { kod: "5.5.RAF", goster: false }


let raflar = [
    [raf51,raf52,raf53,raf54,raf55],
    [raf41,raf42,raf43,raf44,raf45],
    [raf31,raf32,raf33,raf34,raf35],
    [raf21,raf22,raf23,raf24,raf25],
    [raf11,raf12,raf13,raf14,raf15]];


    function rafOlustur(){
        console.clear();
        let satir="";
        for(let i =0  ; i<raflar.length ; i++){
            for(let j=0 ; j<5 ; j++){
                satir+="|"+ (raflar[i][j].goster ? raflar[i][j].kod : "---")+"";
              
            }
            console.log(satir);
            console.log("--------------------");
            satir="";
        }
        
    }

    function kodBul(kitapIsmi){
        let rafKod=null;
        kitaplar.forEach(function(kitap){
            if(kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(),0)){
                rafKod=kitap.raf;
            }
        });
        return rafKod;
    }

    function raftaGoster(rafKodu){
        for(let i =0 ; i<raflar.length; i++){
            for(let j=0 ; j<5 ; j++){
                if(raflar[i][j].kod==rafKodu){
                    raflar[i][j].goster=true;
                    break;
                }
            }
        }
    }

    rafOlustur();

    let kitapIsmi = prompt("Lütfen bir kitap ismi giriniz.");
    let rafKod = kodBul(kitapIsmi);
   
    if(rafKod!=null){
        raftaGoster(rafKod);
        rafOlustur();
    }else{
        alert("Girdiğiniz kitap kütüphanemizde bulunmamaktadır.");
    }
