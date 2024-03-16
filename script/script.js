document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("boutonEnvoyer").addEventListener("click", function() {
        document.getElementById("messageEnvoye").style.display = "none";
    });

    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault(); 
        document.getElementById("messageEnvoye").style.display = "block";

        document.querySelector("form").reset();
    });
});