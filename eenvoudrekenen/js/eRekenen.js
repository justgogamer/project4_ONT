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

var select1 = document.getElementById("select1");
var select2 = document.getElementById("select2");
var select3 = document.getElementById("select3");
var select4 = document.getElementById("select4");
var reken1 = document.getElementById("reken1");
var reken2 = document.getElementById("reken2");
var reken3 = document.getElementById("reken3");
var reken4 = document.getElementById("reken4");

reken2.style.display = "none";
reken3.style.display = "none";
reken4.style.display = "none";

select1.addEventListener("click", function(){
    reken1.style.display = "block";
    reken2.style.display = "none";
    reken3.style.display = "none";
    reken4.style.display = "none";
});

select2.addEventListener("click", function(){
    reken2.style.display = "block";
    reken1.style.display = "none";
    reken3.style.display = "none";
    reken4.style.display = "none";
});

select3.addEventListener("click", function(){
    reken3.style.display = "block";
    reken2.style.display = "none";
    reken1.style.display = "none";
    reken4.style.display = "none";
});

select4.addEventListener("click", function(){
    reken4.style.display = "block";
    reken2.style.display = "none";
    reken3.style.display = "none";
    reken1.style.display = "none";
});