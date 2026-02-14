var element;
//element=document

//element=document.all[9];

//element=document.head;

//element=document.title;

//element=document.body;

//element=document.links;

//element=document.images;

//element=document.forms;

//element=document.doctype;

//element=document.URL;

//element=document.domain;

//elemnt=document.baseURI;

//element=document .getElementById('header');


//element=document.body;



//Get and Set methods
//element=document.getElementById('content').innerText;

//element=document.getElementById('content').innerHTML;

//element=document.getElementById('header').getAttribute("class");

//element=document.getElementById('header').getAttribute("id");
//element=document.getElementById('header').getAttributeNode("class");

//element=document.getElementById('header').attributes;

//set methods
/*
document.getElementById("header").innerText="<h1>Hello</h1> ";

document.getElementById("header").innerHTML="<h1>Hello</h1> ";

//setAttribute


document.getElementById("header").setAttribute("class","xyz");
element=document.getElementById('header').getAttribute("class");

//removeAttribute
//document.getElementById("header").removeAttribute("class");


element=document.getElementById('header').innerHTML;*/


/*querySelector
document.querySelector("#header").innerHTML="<h1>Hello</h1> ";

element=document.querySelector(".list");

//element=document.querySelector('#header').getAttribute("class");
*/

//querySelecetorAll
/*
document.querySelector("#header").innerHTML="<h1>Hello</h1> ";

element=document.querySelectorAll("ul");

//Advance selector
element=document.querySelectorAll("ul li:nth-child(2)");
*/


//css styling
//style method
//element=document.querySelector("#header").style.backgroundColor="yellow";

//className method
//document.querySelector("#header").className="xyz abc pqr";
//element=document.querySelector("#header").className;

//classList method
/*
document.querySelector("#header").classList.add("xyz" ,"abc", "pqr");
//element=document.querySelector("#header").classList;

document.querySelector("#header").classList.remove("xyz");
element=document.querySelector("#header").classList;
*/


//addEventListener method
document.getElementById("header").addEventListener("mouseleave",f1);

document.getElementById("header").addEventListener("click",f2);

document.getElementById("header").addEventListener("click",function (){
    //document.getElementById("header").style.border=" 10px solid red";
    this.style.border=" 10px solid red";
});

function f1(){
    document.getElementById("header").style.backgroundColor="yellow";
}

//removeEventListener method
function f2(){
    document.getElementById("header").removeEventListener("mouseleave",f1);
}
//console.log(element);
