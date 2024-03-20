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

document.addEventListener('scroll', function() {
    var competencesSection = document.getElementById('competences');
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset;

    var competencesSectionTop = competencesSection.getBoundingClientRect().top + scrollY;

    if (scrollY > competencesSectionTop - windowHeight + 200) {
        competencesSection.classList.add('animate');
    }
});


