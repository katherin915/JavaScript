var newElement=document.createElement("h2");
var newText=document.createTextNode("This is just text");
//var newComment=document.createComment("This is a comment");

//AppendChild
/*
newElement.appendChild(newText);

document.getElementById("test").appendChild(newElement);
console.log(newElement);
console.log(newText);
console.log(newComment);
*/


//InsertBefore
/*
var target=document.getElementById("test");
target.insertBefore(newElement,target.childNodes[2]);*/



//JS insertAdjacentElement
/*
var newElement=document.createElement("h2");
var newText=document.createTextNode("This is just text");
newElement.appendChild(newText);
var target=document.getElementById("test");
target.insertAdjacentElement(   "afterbegin", newElement );*/

//Js insertAdjacentHTML
/*
var target=document.getElementById("test");
var newElement="<h2> this is heading</h2>";
target.insertAdjacentHTML(   "beforeend", newElement );*/


//js insertAdjacentText
/*
var target=document.getElementById("test");
var newtext=" This is heading";
target.insertAdjacentText(   "afterend", newtext );
*/

//ReplaceChild
/*
var newElement=document.createElement("li");
var newText=document.createTextNode("Guava");
newElement.appendChild(newText);
var target=document.getElementById("list");
var oldElement=target.children[0];
console.log(oldElement);
target.replaceChild(newElement,oldElement);*/

//RemoveChild
/*
var target=document.getElementById("list");
var oldElement=target.children[0];

target.removeChild(oldElement);*/

//cloneNode
/*
var target=document.getElementById("list1").children[0];
//var copyElement=target.cloneNode(false);
var copyElement=target.cloneNode(true);
console.log(copyElement);
document.getElementById("test").appendChild(copyElement);*/

//contains()
/*
var parent=document.getElementById("test");
var targetchild=document.getElementById("abc");
var find=parent.contains(targetchild);
console.log(find);
*/


//hasAttribute()
/*
var target=document.getElementById("test");
var find=target.hasAttribute("class");
console.log(find);*/

//hasChildNodes()
/*
var target=document.getElementById("test");
var find=target.hasChildNodes();
console.log(find);*/


//isEqualNode()
var target1=document.getElementById("list1").firstElementChild;
var target2=document.getElementById("list2").children[1];
var equal=target1.isEqualNode(target2);
console.log(equal);