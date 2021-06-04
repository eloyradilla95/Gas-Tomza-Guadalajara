<?php
$destinario = 'JPerez.N@tomza.com';
$asunto = 'Contacto página web jalisco';
//correo al que llegara el mensaje
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];


$header = "Mensaje enviado desde la página de tomza jalisco";
$mensajecompleto = $nombre . "\n" . $telefono . "\n" . $correo . "\n" . $mensaje;

@mail($destinario, $asunto, $header, $mensajecompleto );
echo "<script>alert('Correo enviado exitosamente')</script>";
?>