<?php
    $retour = mail('bakayoko.shally.b@gmail.com', 'Envoi depuis la page Contact', $_POST['message'], 'From: https://shallybky.github.io/portfolio-bky/');
    if ($retour)
        echo '<p>Votre message a bien été envoyé.</p>';
    ?>