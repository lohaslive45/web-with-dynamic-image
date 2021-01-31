var prev = document.getElementById("prev");
var next = document.getElementById("next");
var ss = document.getElementsByClassName("ss");
var back = document.getElementById("back");

            
var bi =  new Array(     
    "ima/bg1.png",
    "ima/bg2.png",
    "ima/bg3.png",
    "ima/bg4.png",
    "ima/bg5.png"
) ;
            /*
            var bi = [
                'ima/bg1.png',
                'ima/bg2.png',
                'ima/bg3.png',
                'ima/bg4.png',
                'ima/bg5.png',
            ]
            */
let i = 0;
next.onclick = function(){

    if(i<4){
         back.style.bi = 'url("'+bi[i+1]+'")';
        i++;
    }
 }
            
 prev.onclick = function(){

    if(i>0){
         back.style.bi = 'url("'+bi[i-1]+'")';
        i--;
    }
}