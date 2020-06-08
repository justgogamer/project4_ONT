var aHTML = document.getElementById("answer");
var err = document.getElementById("err");

function clearAns(){
    aHTML.innerHTML = "";
}

document.getElementById("fibBtn").addEventListener("click", function fibonacci(){
    var num1 = 0;
    var num2 = 1;
    var input = document.getElementById("fibIn").value;
    var ans = num1 + num2;
    var fibField = document.getElementById("answer");
    fibField.innerHTML = 0;

    while (ans < input){
        fibField.innerHTML += " - " + ans;
        ans = num1 + num2;
        num1 = num2;
        num2 = ans;
    }
}) ;

var priBtn = document.getElementById("priBtn");

priBtn.addEventListener("click", function display() {
    var priVal = document.getElementById("priIn").value;
    var uNum = [];
    var num = 2;
    for ( num = 2; num < priVal; num++ ) {
        if ( priCheck(num) ) {
            uNum.push(" "+num);
        }
    }
    document.getElementById("answer").innerHTML = uNum.toString();
})
var priVal = document.getElementById("priIn").value;

function priCheck(num) {
    for ( var count = 2; count < num; count++ ) {
        if ( num % count === 0 ) {
            return false;
        }
    }
    return true;
}