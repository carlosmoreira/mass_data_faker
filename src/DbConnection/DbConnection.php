<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/5/2018
 * Time: 12:31 PM
 */

namespace src\DbConnection;


use Illuminate\Database\Capsule\Manager;
use src\session\Session;

class DbConnection
{

    /**
     * @var Manager $capsule
     */
    private static $capsule;

    /**
     * @var Session $session
     */
    private static $session;

    //Create array needed to connect
    //Attempt the db connection
    //If fails, throw an exception
    public static function connect(Session $session)
    {
        try {
            $capsule = new Manager();
            $capsule->addConnection([
                'driver' => 'mysql',
                'host' => $session->db_host,
                'database' => $session->db_databaseName,
                'username' => $session->db_username,
                'password' => $session->db_password,
                'charset' => 'utf8',
                'collation' => 'utf8_unicode_ci',
                'prefix' => getenv('DB_PREFIX'),
            ]);
            $capsule->setAsGlobal();
            $capsule->bootEloquent();
            if ($capsule->getConnection()->getPdo()) {
                self::$capsule = $capsule;
                self::$session = $session;
                return true;
            }
            return false;
        } catch (\Exception $e) {
            return false;
        }

    }

    public static function readDbStructure()
    {
        $dbName = self::$session->db_databaseName;
        $rawQuery = "select * from information_schema.columns
                    where table_schema = '{$dbName}'
                    order by table_name,ordinal_position";
        $results = self::$capsule->getConnection()->getPdo()->query($rawQuery)->fetchAll();
        //$results = Capsul::select('select * from users where id = ?', array(1));
        var_dump($results);
        die();
    }

    public static function massInsert()
    {
    }

}