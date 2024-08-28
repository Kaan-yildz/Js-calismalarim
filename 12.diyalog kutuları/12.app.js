/* 
    -------DİYALOG KUTULARI------
  
    -ALERT
    -PROMPT
    -CONFİRM : tamama tıklarsak true,iptale tıklarsak false döndürür.

*/

console.log(window);

alert("işleminize devam etmek için önce kaydetmelisiniz!");

// prompt() : kullanıcıdan değer alabiliyoruz...

// kullanıcıdan alınan değerler her zaman string döner.
let isim = prompt("isminizi giriniz :");
let yas = prompt("yaşınızı giriniz :");
console.log(typeof isim);
console.log(typeof yas);

let sonuc = confirm("silmek istediğinize emin misiniz ?");
console.log(sonuc);

