// break = yazdığımız herhangi bir satırdaki işlemden sonrasını yazdırmaz

// continue = aynı işlemi yapar fakat 1 defalığına kırar diğer işlemler devam eder

// 1 den 10 a kadar sayıları yazdıralım 8 e geldiğimizde döngüden çıkalım

let sayac = 1;
while (sayac <= 10) {
    console.log(sayac);
    if (sayac == 8) {
        break;
    }
    sayac++;
}

let sayac2 = 0;
while (sayac <= 10) {
    sayac++;
    if (sayac == 8) {
        continue;
    }
    if (sayac > 10) {
        break;
    }
    console.log(sayac);
}
