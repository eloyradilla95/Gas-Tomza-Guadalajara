<?php
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$header = 'From: ' . $correo . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion(). "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su correo es: " . $correo . " \r\n";
$mensaje .= "Telefono :" . $telefono . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . "\r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$destinario = 'eoy0907@gmail.com';
$asunto = 'Contacto página web jalisco';

mail($destinario, $asunto, utf8_decode($mensaje), $header);

header("Location:/");

?>


