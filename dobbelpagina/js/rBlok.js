window.onload = function(){
    var rLink1 = document.getElementById("rLink1");
    var rLink2 = document.getElementById("rLink2");
    var rLink3 = document.getElementById("rLink3");

    rLink1.addEventListener("mouseover", function(){
        document.getElementById("rReken1").style.display = "flex";
        document.getElementById("rReken1").style.transition = "ease-in-out 0.2s";
        document.getElementById("rReken2").style.display = "none";
        document.getElementById("rReken3").style.display = "none";
    })

    rLink2.addEventListener("mouseover", function(){
        document.getElementById("rReken1").style.display = "none";
        document.getElementById("rReken2").style.display = "flex";
        document.getElementById("rReken2").style.transition = "ease-in-out 0.2s";
        document.getElementById("rReken3").style.display = "none";
    })

    rLink3.addEventListener("mouseover", function(){
        document.getElementById("rReken1").style.display = "none";
        document.getElementById("rReken2").style.display = "none";
        document.getElementById("rReken3").style.display = "flex";
        document.getElementById("rReken3").style.transition = "ease-in-out 0.2s";
    })

    var con = document.getElementById("rBlok");

    con.addEventListener("mouseleave", function(){
        document.getElementById("rReken1").style.display = "none";
        document.getElementById("rReken2").style.display = "none";
        document.getElementById("rReken3").style.display = "none";
    })
}