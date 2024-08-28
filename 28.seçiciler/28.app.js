//Selectors(seçiciler) - Style özellikleri

//classname,id,tag name

//getElementById: id ye göre elementi yakalar.

const button = document.getElementById("todoAddButton");
console.log(button);

console.log(button.id);
console.log(button.getAttribute("id"));

console.log(button.className);
console.log(button.getAttribute("class"));

const classlistesi1 = button.classList[3];
const classlistesi2 = button.classList[2];

//getElementByClassName: class ismine göre yakalar.

const classlistesi3 = button.classList;

classlistesi.forEach(function (classname) {
    console.log(classname);
})

console.log(classlistesi4);

let buttontext = button.textContent; // etiketleri de string ifade olarak algılar
let buttontext2 = button.innerHTML; // ifadesnin iki ucunda html varsa onları da algılar

console.log(buttontext);
console.log(buttontext2);

button.innerHTML = "<b> Todo Ekleyin </b>";

const todolist1 = Array.from(document.getElementsByClassName("list-group-item"));
todolist.forEach(function (todo) {
    console.log(todo);
})

console.log(todolist1);

//getElelmentbyTagName: etiket ismine göre yakalar.

const forms = Array.from(document.getElementsByTagName("form"));
forms.forEach(function (form) {
    console.log(form);
})
console.log(forms[1]);

const todolist2 = document.getElementsByTagName("li");
console.log(todolist2);

querySelector - querySelectorAll // yukardaki üç metodun yaptıklarını yapar.id lerde başa # yazarak seçeriz,classlarda da . koyarak seçeriz 

const clearButton = document.querySelector("#todoClearButton");
console.log(clearButton);

console.log(document.getElementById("todoClearButton"));

const todolist3 = document.querySelector(".list-group");
console.log(todolist3);

//kullanılan attribute birden fazla kez kullanılmışsa veya id gibi tek defa kullanıma özgün olmayanları yazdırmak için

const todolist4 = document.querySelectorAll(".list-group-item");
console.log(todolist4);

const todolist5 = document.querySelectorAll(".list-group-item")[2];
console.log(todolist5);

const todolist6 = document.querySelectorAll(".list-group-item")[document.querySelectorAll(".list-group-item").length - 1];
console.log(todolist6);

//odd: tek, even: çift
const todolist = Array.from(document.querySelectorAll("li:nth-child(odd)"));

todolist.forEach(function (todo) {
    todo.style.backgroundColor = "lightgrey";
})
console.log(todolist);
