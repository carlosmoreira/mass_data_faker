<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/5/2018
 * Time: 12:31 PM
 */

namespace src\DbConnection;


class DbConnection
{

    private static $capsule;

    public static function connect($session){
//        $capsule = new \Illuminate\Database\Capsule\Manager;
//        $capsule->addConnection($container['settings']['db']);
//        $capsule->setAsGlobal();
//        $capsule->bootEloquent();
//        return $capsule;
    }

    public static function readDbStructure(){

    }


}