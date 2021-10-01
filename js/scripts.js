var x=document.querySelector(".nav-item button");
var y= document.getElementById("form1");
x.addEventListener('click',function(){
          y.style.paddingLeft="10px";
          y.classList.toggle("d-inline-block");
});

let masterimg=document.querySelector('.master');
let imgArr=document.querySelectorAll('#made img');
let swap;
for(var i in imgArr){
if (i>0){
    imgArr[i].onclick=function(){
        swap=masterimg.src;
        masterimg.src=this.src;
        this.src=swap;
    }
}
}
