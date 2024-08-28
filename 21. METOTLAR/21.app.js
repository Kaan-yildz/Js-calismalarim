// PARAMETRESİZ VE GERİYE DEĞER DÖNDÜRMEYEN METOT TANIMLAMAK

/* 
*
* function yazdir(){
*   kodlar yazılacak
* }
*
*
*/

function yazdir(){
    console.log("kaan");
}
yazdir();
yazdir();

topla();
function topla(){
    console.log(5+7);
}

function yazdir(isim,soyisim){
  debugger;
  console.log(isim+" "+soyisim);
}
debugger;
yazdir("kaan","yıldız");
yazdir("ismail","kemikli");

kup(5);
kup(3);

function kup(sayi){
    console.log(sayi*sayi*sayi);
}

let yas= Number(prompt("yaşınızı giriniz: "));
kontrolEt(yas);
function kontrolEt(yas){
    if(yas>18){
        console.log("ehliyeti alabilirsiniz");
    }
    else{
        console.log("ehliyet alamazsınız");
    }
}

// bir şeyin metot olup olmadığını anlamak için yazıp enter yaptığımızda 
// yanında () parantez çıkarsa metottur.örneğin parseInt(),toString(),parseFloat....

// GERİYE DEĞER DÖNDÜREN METOT TANIMLAMAK
// return: geriye döndürmek
// 1- bir değeri metodun dışarısına çıkarmak,taşımak için kullanılır
// 2- bir metodu bitiren anahtar kelimedir yani
// metot içinde yazıldıktan sonra alt satırda yazılan kodların çıktısını vermez.

let donendeger =cube(2);
kareal(donendeger);

function kareal(sayi){
    let sonuc = sayi*sayi;
    console.log(sonuc);
}
function cube(sayi){
    let sonuc =sayi*sayi*sayi;
    return sonuc;
    console.log("kaan");
}

yazdir();
function yazdir(){
    console.log("kaan");
    // void: geriye değer döndürmeyen demektir.
}

// KELİME SAYISI BULMA UYGULAMASI
// metin.length: seçilen metindeki her bir harfe gitmeyi sağlar
// metin.charAt():i ye verilen herhangi bir sayının karakterini döner
// toLowerCase():büyük küçük harf farketmeksizin karakterleri algılar.

let metin2="Şuanda Kayseri'de kütüphanede Javascript çalışmaktayım.";
let harf= prompt("harfi griniz");
let sonuc= bul(harf);
alert("harf sayısı: "+ sonuc);

function bul(harf){
    let toplam= 0;
    for(let i=0;i<metin.length; i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
            toplam+=1;
        }
    }
    return toplam;
}

// birden fazla defa kullanıp harf çağırmak istediğimiz zamaaann..

let metin="Şuanda Kayseri'de kütüphanede Javascript çalışmaktayım.";

bul("a");
bul("k");
bul("d");

function bul(harf){
    let toplam= 0;
    for(let i=0;i<metin.length; i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
            toplam+=1;
        }
    }
    return toplam;
}

// MÜKEMMEL SAYI UYGULAMASI

// bir sayının tam bölenlerinin toplamının yarısı sayıyı veriyorsa mükemmel sayıdır.
// 6 - 28 - 496 --> mükemmel sayılara örnek

muksayi(21);

function muksayi(number){
    let toplam= 0;
    for(let i=2;i<=number/2; i++){
        if(number%i==0){
            toplam+=i;
        }
    }
    toplam+=1+number;
    if(toplam/2==number){
            console.log("mükemmel sayıdır...");
    }
    else{
        console.log("mükemmel sayı değildir...");
    }
}

// ONLUK SAYIYI BİNARY SİSTEME ÇEVİRME

cevirbinary(25);

function cevirbinary(number){
    let binary =" ";
    while(true){
        binary+=(number%2).toString();
        number=Math.floor(number/2);
        if(number==1){
            //artık bölmek yok döngüden çıkacağız.
            binary+=1;
            break;
        }
    }
    let result = reverse(binary);
    console.log("sonuç: "+result);
}
function reverse(binary){
    let reversebinary=" ";
    for(let i=binary.length-1 ;i>=0;i--){
        reversebinary+=binary.charAt(i);
    }
    return reversebinary;
}

// BİNARY SAYIYI ONLUK SAYIYA ÇEVİRME

let binary="1011";

function cevironluk(binary){
    let toplam=0;
    let ust=0;

    for(let i=binary.length-1;i>=0;i--){
        toplam+=Number(binary.charAt(i)) * Math.pow(2,ust);
        ust++; 
    }
    console.log("sonuç: "+ toplam);
}
cevironluk(binary);
