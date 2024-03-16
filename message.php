<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nom = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $destinataire = "bakayoko.shally.b@gmail.com";

    $sujet_email = "Nouveau message de $nom";

    $corps_email = "De: $nom\n";
    $corps_email .= "Email: $email\n\n";
    $corps_email .= "Message:\n$message";

    mail($destinataire, $sujet_email, $corps_email);

    header("Location: confirmation.html");
} else {
    header("Location: erreur.html");
}

?>
