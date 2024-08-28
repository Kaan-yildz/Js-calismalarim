//HTML elementleri üzerinde gezinmek.

const todo= document.querySelector(".list-group-item");
const todolist= document.querySelector(".list-group");
const card= document.querySelector(".card");

let value;

//Anneden çocuklara erişmek

value= todolist;
value= todolist.children[0];
value= todolist.children[3];
value= todolist.children[todolist.children.length-1];
value= todolist.children[3].textContent="değiştirdim";

 value= Array.from(todolist.children);

 value.forEach(function(todo){
     console.log(todo.textContent);
 })

//Çocuktan anneye erişmek


console.log(value);