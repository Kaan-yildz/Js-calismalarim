let sayac1 = 1;
while(sayac1 <= 10) {
    console.log(sayac1);
    sayac1++;
}

let sayac2 = 0;
while(sayac2 <= 10) {
    if(sayac2 % 2 == 1) {
        console.log(sayac2);
    }
    sayac2++;
}

let sayac3 = 0;
while(sayac3 <= 10) {
    if(sayac3 % 2 == 0) {
        console.log(sayac3);
    }
    sayac3++;
}

let sayac4 = 1;
while(true) {
    console.log(sayac4);
    if(sayac4 == 7) {
        break;
    }
    sayac4++;
}

let sayac5 = 1;

do {
    console.log(sayac5);
    sayac5++;
}
while(sayac5 <= 10);

let sayac6 = 1;
let toplam = 0;
do {
    if (sayac6 % 2 == 1) {
        toplam += sayac6;
    }
    sayac6++;
}
while(sayac6 <= 20);
console.log("toplam: ", toplam);
