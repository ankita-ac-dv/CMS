<?php
   $host="localhost";
   $user="root";
   $password="";
   $database="priya";
   $connect=mysqli_connect($host,$user,$password,$database);
   if (mysqli_connect_error()) {
    die("database not connect".mysqli_connect_error);
   }
   else{
    echo("database successful connect");
   }
?>