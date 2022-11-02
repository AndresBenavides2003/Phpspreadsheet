<?php
//conexion a base de datos SIGINV
class Conexion{
    public  static function conectar(){
        $link = new PDO("mysql:host=localhost; dbname=senasubs_siginv", "root", "");
        return $link;
    }
}
