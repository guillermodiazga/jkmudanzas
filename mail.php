
<?
$cabeceras = "Content-type: text/html ". "\r\n" .
	"From: JK Mudanzas< info@jkmudanzas.com.co>" . "\r\n" .
    "Reply-To:  info@jkmudanzas.com.co";

$para      = "info@jkmudanzas.com.co";
$titulo    = "Info JK Mudanzas: ".$_POST['nombre'];
$mensaje   = "<b><img width='220' src='www.jkmudanzas.com.co/img/logo.png'><br> Mensaje de:</b> ".$_POST['nombre'].
			 "<br>Email: ".$_POST['email'].
			 "<br>Celular: ".$_POST['celular'].
			 "<br>Mensaje: ".$_POST['mensaje'];


mail($para, $titulo, $mensaje, $cabeceras);

//Confirmacion al usuario que envio el mail:
if($_POST['email']!=''){
	$para      = $_POST['email'];
	$titulo    = "Info JK Mudanzas";
	$mensaje   = "<img width='220' src='www.jkmudanzas.com.co/img/logo.png'><br>".
				" <b>Hola</b> ".$_POST['nombre'].":  Hemos recibido tu mensaje, ".
				 " pronto te responderemos.".
				 "<br><br> Mensaje: ".$_POST['mensaje'];
	mail($para, $titulo, $mensaje, $cabeceras);
}
echo "...Enviando";

?>
