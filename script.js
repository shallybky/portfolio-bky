function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

function afficherMessage() {
    var messageDiv = document.createElement("div");
    messageDiv.textContent = "Message envoyé";
    messageDiv.classList.add("message-envoye");

    document.body.appendChild(messageDiv);

    setTimeout(function() {
        messageDiv.classList.add('hide');
    }, 0); 
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    afficherMessage();
    this.submit(); 
});