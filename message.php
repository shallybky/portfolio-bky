<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if(isset($_POST["send"])){
    $mail = new PHPMailer(true);

    $mail->Host       = 'smtp.gmail.com';                    
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = 'bakayoko.shally.b@gmail.com';                     
    $mail->Password   = 'kaykay123gmailbakayoko';                               
    $mail->SMTPSecure = 'ssl';            
    $mail->Port       = 465;                                   

    $mail->setFrom('bakayoko.shally.b@gmail.com');

    $mail->addAddress($_POST["email"]);

    $mail->isHTML(true);       

    $mail->Subject = $_POST["subject"];
    $mail->Body    = $_POST["message"];

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

