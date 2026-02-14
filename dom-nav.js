//parentElement
/*document.getElementById("child-c").parentElement.style.background=" red";
var a=document.getElementById("child-c").parentElement;
console.log(a);*/


//parentNode
/*document.getElementById("child-c").parentElement.style.background=" red";
var a=document.getElementById("main").parentNode;
console.log(a)
*/

//children
/*document.getElementById("inner").children[0].style.background=" red";
var a=document.getElementById("inner").children[1];
console.log(a);
console.log(a[1]);
console.log(a.length);*/

//childNodes
/*
document.getElementById("inner").children[0].style.background=" red";
var a=document.getElementById("inner").childNodes;
console.log(a);*/

//firstElementChild
/*
document.getElementById("outer").firstElementChild.style.background=" red";
var a=document.getElementById("outer").firstElementChild;
console.log(a);
*/
//nextElementSibling
document.getElementById("child-c").nextElementSibling.style.background=" red";
var b=document.getElementById("child-c").nextElementSibling;
console.log(b);
//nextSibling
//will give error-----document.getElementById("child-c").nextSibling.style.background=" red";
var a=document.getElementById("child-c").nextSibling;
console.log(a);


