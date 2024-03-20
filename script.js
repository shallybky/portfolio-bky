function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

document.getElementById("submitBtn").addEventListener("click", function() {
    document.getElementById("messageSent").classList.remove("hide");
    setTimeout(function() {
        document.getElementById("messageSent").classList.add("hide");
    }, 5000 ); 
});
