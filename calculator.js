function insert(num)
     {
       document.getElementById("result").value+=num
     }

function clr() 
     { 
        document.getElementById("result").value = "" 
     } 

function solve() 
         { 
             let x = document.getElementById("result").value 
             let y = eval(x) 
             document.getElementById("result").value = y 
         }      