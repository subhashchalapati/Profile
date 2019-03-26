/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//function f1(){
//document.getElementById("welcome").style.color="red";
//}
//    document.getElementById("welcome").style.color = "red";

//    console.log("working")
//var wl=document.getElementById("welcome");
//wl.addEventListener("mouseover",WelcomeSubhash);
//wl.addEventListener("mouseout",WelcomeSubhashout);
var x=document.getElementById("welcome");
//var temp = x.style.color;
//     console.log(temp);
 var In = document.getElementById("In1");

x.style.fontSize = "xx-large";
x.addEventListener("mouseover", WelcomeSubhashOver);
x.addEventListener("mouseout", WelcomeSubhashOut);
function WelcomeSubhashOver(){
//     console.log(temp);     
     x.value="subhash";
//     x.textContent="Subhash";
    x.style.color = "red";
    
    var ch=["s","u","b","h","a","s","h"];
    var len=7;
    for (var i=0;i<=len-1;i++){
//        x.style.animation.wel;
        setTimeout(myFunction(), 1000);
            function myFunction(){
  
                x.textContent=ch[i];
                console.log(ch[i]);
            }
        }
    function inover(){  
       
        windows.alert("jahdb");
    In.valueOf("hello");
}

    
    
    
    
    
}
function WelcomeSubhashOut(){
//     console.log(temp);
     x.textContent="Welcome"
    x.style.color = "inherit";
}

