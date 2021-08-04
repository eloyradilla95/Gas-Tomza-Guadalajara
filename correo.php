<?php
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$header = 'From: ' . $correo . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion(). "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$message .= "Su correo es: " . $correo . " \r\n";
$message .= "Telefono :" . $telefono . " \r\n";
$message .= "Mensaje: " . $_POST['mensaje'] . "\r\n";
$message .= "Enviado el " . date('d/m/Y', time());

$to = 'soportesistemas.jalisco@tomza.com';
$subject = 'Contacto página web jalisco';

mail($to, $subject, utf8_decode($message), $header);
echo'<script type="text/javascript">
        alert("Mensaje enviado");
        window.location.href="/";
        </script>';

?>


