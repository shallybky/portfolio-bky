<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    
    $to = "bakayoko.shally.b@gmail.com";

    $subject = "Nouveau message du formulaire de contact";

    $body = "Nom: $name\n";
    $body .= "E-mail: $email\n";
    $body .= "Message:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
}
?>