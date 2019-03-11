/* rey read this 
 * this is for content.html and it is used and included in content.html only
 * 
 * 
 * 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function LeftRightMove(event){
    var x = event.which;
//  document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
if(x==37){
    NextContent();
}
if(x==39){
    PreviousContent();
}
}



function Start(){
    var ba= "";
document.getElementById("content").innerHTML='<iframe type="text/html" style="height: 100%; width: 100%; border-style: none;" src="about1.html" ></iframe>';
              }
var temp = 1
function NextContent()
    {
        if(temp<7)
        {
        temp++;
        SwitchCase(temp);
        console.log(temp); 
        }
//    var n='<object type="text/html" data="index.html" ></object>';                        //    document.getElementById("content").innerHTML= n ; Hey this is next line //    document.write("shjzjxkcjnalzkx");//    var number=5;//    alert(number*number*number);//    var n=document.getElementById("content").InnerHtml;//    document.getElementById(content).//    alert(n);    
    }
function PreviousContent()
    {
        if(temp>1)
        {
        temp--;
        SwitchCase(temp);
        console.log(temp); 
        }
   }
 
function SwitchCase(temp1)
    {
        switch (temp1) 
        {
                case 1:
//                  var n='<object type="text/html" data="about1.html" ></object>';
                  var n='<iframe type="text/html" style="height: 100%; width: 100%; border-style: none;" src="about1.html" ></iframe>';
                  
                  document.getElementById("content").innerHTML= n ;
                  break;
                case 2:
//                 var n='<object type="text/html" data="about2.html" ></object>';
                 var n='<iframe type="text/html" style="height: 100%; width: 100%; border-style: none;" src="about2.html" ></iframe>';
                 document.getElementById("content").innerHTML= n ;
                  break;
                case 3:
//                 var n='<object type="text/html" data="about3.html" ></object>';
                 var n='<iframe type="text/html" style="height: 100%; width: 100%; border-style: none;" src="about3.html" ></iframe>';
                 document.getElementById("content").innerHTML= n ;
                  break; 
                case 4:
//                 var n='<object type="text/html" data="about4.html" ></object>';
                 var n='<iframe type="text/html" style="height: 100%; width: 100%; border-style: none;" src="about4.html" ></iframe>';
                 document.getElementById("content").innerHTML= n ;
                  break;
                case 5:
//                 var n='<object type="text/html" data="about4.html" ></object>';
                 var n='<iframe type="text/html" style="height: 100%; width: 100%; border-style: none;" src="about5.html" ></iframe>';
                 document.getElementById("content").innerHTML= n ;
                  break;
                case 6:
//                 var n='<object type="text/html" data="about4.html" ></object>';
                 var n='<iframe type="text/html" style="height: 100%; width: 100%; border-style: none;" src="about6.html" ></iframe>';
                 document.getElementById("content").innerHTML= n ;
                  break;
                case 7:
//                 var n='<object type="text/html" data="about4.html" ></object>';
                 var n='<iframe type="text/html" style="height: 100%; width: 100%; border-style: none;" src="about7.html" ></iframe>';
                 document.getElementById("content").innerHTML= n ;
                  break;
        }

    }
