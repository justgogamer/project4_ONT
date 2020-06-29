window.onload = function(){
    var ham = document.getElementById("mobNav");
    var navBar = document.getElementById("nBar");

    ham.addEventListener("click", function(){
        if (navBar.style.display != "block"){
            navBar.style.display = "block";
        } else{
            navBar.style.display = "none";
        }
    })
}