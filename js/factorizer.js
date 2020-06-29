var getalInvoer, resultaat, arPrime = [], arFactor = [];

function PrimeArray() {
  for(var i = 2; i <= 1000; i++) {
    var IsPrime = true;
    for (var x = 2; x < i; x++) {
      if (i % x == 0) {
        IsPrime = false;
      }
    }
    if (IsPrime == true) {
      arPrime.push(i);
    }
  }
}

function factorize() {
  resultaat = "";
  document.getElementById("answer").innerHTML = "";
  arFactor = [];
  getalInvoer = document.getElementById("factorizer").value;

  for (var i = 0; i <= arPrime.length; i++) {
    if (getalInvoer % arPrime[i] == 0) {
      arFactor.push(arPrime[i]);
      getalInvoer = getalInvoer / arPrime[i];
      if (getalInvoer == 1) {
        break;
      } else {
        i = -1;
      }
    }
  }

  for (var i = 0; i < arFactor.length; i++) {
    resultaat += arFactor[i] + " * ";
  }

  resultaat = resultaat.substr(0, (resultaat.length - 3));
  document.getElementById("answer").innerHTML = resultaat;    

}


var arHex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
var arOrigin = [];
var gtOrigin, gtDestination, midResult, endResult;

function convert() {
  var nbOrigin = document.getElementById("ipGetal").value;

  arOrigin = nbOrigin.split(' ')
  arOrigin.reverse();

  midResult = 0;
  endResult = 0;

  midResult = midStation();

  document.getElementById("answer").innerHTML =
  document.getElementById("ipGetal").value + "<sub>16</sub> = " +
  midResult + "<sub>10</sub>";
}

function midStation() {
  for (var i = 0; i < arOrigin.length; i++) {
    midResult += (hexValue(arOrigin[i].toString().toUpperCase()) * Math.pow(16, i));
  }
  return midResult;
}

function hexValue(val) {
  return arHex.indexOf(val);
}