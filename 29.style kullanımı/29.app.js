//STYLE ÖZELLİĞİNİ ANLAMAK 
//https://www.w3schools.com/jsref/prop_style_borderimageslice.asp

const todo= document.querySelectorAll(".list-group-item")[0];

console.log(todo);

todo.style.color="#fff";
todo.style.backgroundColor= "purple";
todo.style.fontWeight= "bold";
todo.style.paddingTop= "20px";
todo.style.paddingLeft= "70px";


const todolist= document.querySelector(".list-group");

console.log(todolist);

todolist.style.marginTop= "60px";
// todolist.style.marginLeft= "100px";


const clearButton= document.querySelector("#todoClearButton");

clearButton.style.backgroundColor="red";
clearButton.style.fontWeight="bold";
clearButton.style.padding="10px";
clearButton.style.borderRadius="50px";

