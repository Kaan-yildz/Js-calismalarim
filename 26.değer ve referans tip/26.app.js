//DEĞER VE REFERANS TİPLER

let a=7;
let b=a;
console.log("a:" + a);
console.log("b:"+ b);
console.log("------------------------------");
b=10;
console.log("a:"+a);
console.log("b: "+b);

let dizi1= [1,2,3];
let dizi2= [1,2,3];
if(dizi1==dizi2){
    console.log("eşittr");
}
else{
    console.log("eşit değildir");
}

let dizi3= [1,2,3];
let dizi4= dizi4;
let dizi5= dizi5;

dizi3.push(23);

console.log(dizi3);
console.log(dizi4);
console.log(dizi5);
