<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/5/2018
 * Time: 12:31 PM
 */

namespace src\DbConnection;


use Illuminate\Database\Capsule\Manager;

class DbConnection
{

    private static $capsule;

    //Create array needed to connect
    //Attempt the db connection
    //If fails, throw an exception
    public static function connect($session){
        $capsule = new Manager();
        $capsule->addConnection( [
            'driver' => 'mysql',
            'host' => '',
            'database' => '',
            'username' => '',
            'password' => '',
            'charset' => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'prefix' => getenv('DB_PREFIX'),
        ]);
        $capsule->setAsGlobal();
        $capsule->bootEloquent();
        return $capsule;
    }

    public static function readDbStructure(){}

    public static function massInsert(){}

}