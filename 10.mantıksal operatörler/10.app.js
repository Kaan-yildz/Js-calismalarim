// --------MANTIKSAL OPERATÖRLER--------

/* 

&& : VE
|| : VEYA
! : DEĞİL

*/

// yaşınız 18 den büyükse ve 300 tl para varsa ve sağlığınız yerindeyse

let yas = 20;
let para = 3500;
let sagliklimi = false;
let haksayisi = 3;

console.log(yas > 18 && para > 3000 || sagliklimi == true);

console.log(5 > 3 || 2 < 1);

console.log(!(sagliklimi));

console.log((para > 3000 && haksayisi > 1) || (yas > 18 && sagliklimi));

