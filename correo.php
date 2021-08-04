<?php
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

$to = 'eoy0907@gmail.com';
$subject = 'Contacto página web jalisco';

mail($to, $subject, $message, $header);
echo'<script type="text/javascript">
        alert("Mensaje enviado");
        window.location.href="/";
        </script>';

?>


