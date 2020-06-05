// window.onload = function(){
    
    
// }
var aHTML = document.getElementById("answer");
var err = document.getElementById("err");

function clearAns(){
    aHTML.innerHTML = "";
}


function tafelSom(){
    var tafelNum = document.getElementById("tNum").value;
    var tafelVal = "";
    var answer = "";
    if (tafelNum != ""){
        if (isNaN(tafelNum)){
            // Doesnt work
            err.innerHTML = "Werkt niet!";
        }
        else{
            // Works
            err.innerHTML="";
            for (x = 1; x < 11; x++){
                tafelVal = x * tafelNum;
                answer = answer + ""+tafelVal+" ";
            }
            aHTML.innerHTML = answer;
        }
    }
}

function machtSom(){
    var machtNum = document.getElementById("mNum").value;
    var machtVal = "";
    var answer = "";
    if (machtNum != ""){
        if (isNaN(machtNum)){
            // Doesnt work
            err.innerHTML = "Werkt niet!";
        }
        else{
            // Works
            err.innerHTML="";
            for (x = 1; x < 16; x++){
                machtVal = Math.pow(machtNum, x);
                answer = answer + ""+machtVal+" ";
            }
            aHTML.innerHTML = answer;
        }
    }
}

function breukSom(){
    var breukNum = document.getElementById("bNum").value;
    var breukVal = "";
    var answer = "";
    if (breukNum != ""){
        if (isNaN(breukNum)){
            // Doesnt work
            err.innerHTML = "Werkt niet!";
        }
        else{
            // Works
            err.innerHTML= "";
            for (x = 1; x < breukNum; x++){
                breukVal = 1 / x;
                answer = answer + ""+breukVal+" ";
            }
            answer = answer + ""+(1 / breukNum)+""
            aHTML.innerHTML = answer;
        }
    }
}

function kwadraatSom(){
    var kwadraatNum = document.getElementById("kNum").value;
    var kwadraatVal = "";
    var answer = "";
    if (kwadraatNum != ""){
        if (isNaN(kwadraatNum)){
            // Doesnt work
            err.innerHTML = "Werkt niet!";
        }
        else{
            // Works
            err.innerHTML="";
            for (x = 1; x < kwadraatNum; x++){
                kwadraatVal = Math.pow(x, 2);
                answer = answer + ""+kwadraatVal+" ";
            }
            answer = answer + ""+Math.pow(kwadraatNum, 2)+"";
            aHTML.innerHTML = answer;
        }
    }
}
