<?php
/*
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$header = 'From: ' . $correo . "\r\n";

$message = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$message .= "Su correo es: " . $correo . " \r\n";
$message .= "Telefono :" . $telefono . " \r\n";
$message .= "Mensaje: " . $_POST['mensaje'] . "\r\n";
$message .= "Enviado el " . date('d/m/Y', time());

include("Mailer/src/PHPMailer.php");
include("Mailer/src/SMTP.php");
include("Mailer/src/Exception.php");

$fromemail = "soportesistenas.jalisco@tomza.com";
$fromname = "Contacto página web";
$host = "smtp.office365.com";
$port = "587";
$SMTPAuth = "login";
$SMTPSecure = "ssl";
$password = "Corp%Jalisco#128";
$emailto = "sistemas.tomza.gdl@gmail.com";
$subject = "Contacto página web Guadalajara";

$mail = new PHPMailer\PHPMailer\PHPMailer();

try{
  $mail-> isSMTP(true);
  $mail-> isHTML(true);
  $mail-> SMTPdebug = 1;
  $mail-> Host = $host; // SMTP host
  $mail-> Port = $port; // set the SMTP port
  $mail-> SMTPAuth = true; 
  $mail-> SMTPSecure = $SMTPSecure; 
  $mail-> Username = $fromemail;
  $mail-> Password = $password;

  $mail-> setFrom($fromemail, $fromname)
  $mail-> addAddress($emailto);

  $mail->subject = $subject;
  $mail->Body = $message;

  if($mail->send()){
        echo'<script type="text/javascript">
        alert("Mensaje enviado");
        window.location.href="/";
        </script>';
  }
        echo'<script type="text/javascript">
        alert("Error al enviar");
        window.location.href="//";
        </script>';
}catch (Exception $e){
  
}
*/
echo'<script type="text/javascript">
        alert("Mensaje enviado");
        window.location.href="/";
        </script>';

?>


