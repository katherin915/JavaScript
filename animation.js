var a=0;
/*
var id= setInterval(frameElement,100);
/*function frameElement(){
    a+=10;
    console.log(a);

}
function frameElement(){
    a+=10;
    var target=document.getElementById("test");
    target.style.marginLeft=a+"px";
    target.style.width=a+"px";
    target.style.height=a+"px";

    if(a==300){
        clearInterval(id);
    }
}*/
//setTimeout
/*
var id= setTimeout(anim,3000);
function anim(){
    //console.log("hello");
    var target=document.getElementById("test");
    target.style.width="500px";
}
function stopAnimation(){
    clearTimeout(id);
}*/

//requestAnimationFrame
var id=setTimeout(function(){
    var target=document.getElementById("test");
    target.style.width="500px";
},100);

