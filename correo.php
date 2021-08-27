<?php

include("Mailer/src/PHPMailer");


$mail = new PHPMailer();

try{
        $mail -> isSMTP();
        
}













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

$to = "soportesistema.jalisco@tomza.com";
$subject = "Contacto página web jalisco";
function Send_Mail($to,$subject,$body)
{
require 'class.phpmailer.php';
$from       = $correo;
$mail       = new PHPMailer();
$mail->IsSMTP(true);            // use SMTP
$mail->IsHTML(true);
$mail->SMTPAuth   = true;                  // enable SMTP authentication
$mail->Host       = "smtp.gmail.com"; // SMTP host
$mail->Port       =  465;                    // set the SMTP port
$mail->Username   = "sistemas.tomza.gdl@gmail.com";  // SMTP  username
$mail->Password   = "m0n0u5u4r10";  // SMTP password
$mail->SetFrom($from, 'From Name');
$mail->AddReplyTo($from,'From Name');
$mail->Subject    = $subject;
$body = $message;
$mail->MsgHTML($body);
$address = $to;
$mail->AddAddress($address);
$mail->Send(); 
};
echo'<script type="text/javascript">
        alert("Mensaje enviado");
        window.location.href="/";
        </script>';

?>


