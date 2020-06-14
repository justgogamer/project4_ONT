var resultaatDraai1, randDeg, randTime, eindresultaat, resultaatDraai2, tijd;

function draaiRad(){
    randDeg= Math.floor((Math.random() * 1000)+360);
    randDeg2= Math.floor((Math.random() * 1000)+360);
    randTime= Math.floor((Math.random() * 7)+3);
    randTime2= Math.floor((Math.random() * 7)+3);
    document.getElementById("Rad1").style.transform= 'rotate('+ randDeg +'deg)';
    document.getElementById("Rad1").style.transition= randTime + 's';
    document.getElementById("Rad2").style.transform= 'rotate('+ randDeg2 +'deg)';
    document.getElementById("Rad2").style.transition= randTime2 + 's' ;
    randDeg = randDeg % 360;
    randDeg2 = randDeg2 % 360;
    tijd= Math.max(randTime , randTime2);
    setTimeout(wiel1, tijd * 1000);

}

function wiel1(){

    if (randDeg >= 0 && randDeg < 60){
        resultaatDraai1= 1;
    }else if (randDeg >= 60 && randDeg < 120){
        resultaatDraai1= 6;
    }else if (randDeg >= 120 && randDeg < 180){
        resultaatDraai1= 5;
    }else if (randDeg >= 180 && randDeg < 240){
        resultaatDraai1= 4;
    }else if (randDeg >= 240 && randDeg < 300){
        resultaatDraai1= 3;
    }else {
        resultaatDraai1= 2;
    }

    if (randDeg2 >= 0 && randDeg2 < 60){
    resultaatDraai2= 1;
    }else if (randDeg2 >= 60 && randDeg2 < 120){
        resultaatDraai2= 6;
    }else if (randDeg2 >= 120 && randDeg2 < 180){
        resultaatDraai2= 5;
    }else if (randDeg2 >= 180 && randDeg2 < 240){
        resultaatDraai2= 4;
    }else if (randDeg2 >= 240 && randDeg2 < 300){
        resultaatDraai2= 3;
    }else {
        resultaatDraai2= 2;
    }

    eindresultaat =resultaatDraai1 + resultaatDraai2 ;
    document.getElementById("resultaat").innerHTML = resultaatDraai1 + "+" + resultaatDraai2 + " = " + eindresultaat;
}

