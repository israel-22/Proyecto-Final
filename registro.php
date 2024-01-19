<?php
include'comexion.php';
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$email=$_POST['email'];

$consulta="INSERT into usuario(nombre, apellido, email)values($db_nombre,$db_apellido,$db_email)";
values('Israel,Santos,isacultra@gmail.com') values($nombre','$','isacultra@gmail.com);
$resultado=mysqli_query($conexion, $consulta);

if($resultado){
    echo "Registro Exitoso"
}else{
    echo "No se pudo registrar";
} 
?>
