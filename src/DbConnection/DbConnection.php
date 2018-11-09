<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/5/2018
 * Time: 12:31 PM
 */

namespace src\DbConnection;


use Illuminate\Database\Capsule\Manager;
use src\models\Request\DbConnectionPropertiesRequest;
use src\models\Request\InsertToTableRequests;
use src\models\SqlTables\GenerateSqlTableStructure;
use src\models\TempModel;

class DbConnection
{
    /**
     * @var Manager $capsule
     */
    private static $capsule;

    /**
     * @var DbConnectionPropertiesRequest $dbConnectionPropertiesRequest
     */
    private static $dbConnectionPropertiesRequest;

    /**
     * @param DbConnectionPropertiesRequest $dbConnectionPropertiesRequest
     * @return bool
     */
    public static function connect(DbConnectionPropertiesRequest $dbConnectionPropertiesRequest)
    {
        try {
            $capsule = new Manager();
            $capsule->addConnection([
                'driver' => 'mysql',
                'host' => $dbConnectionPropertiesRequest->db_host,
                'database' => $dbConnectionPropertiesRequest->db_databaseName,
                'username' => $dbConnectionPropertiesRequest->db_username,
                'password' => $dbConnectionPropertiesRequest->db_password,
                'charset' => 'utf8',
                'collation' => 'utf8_unicode_ci',
                'prefix' => getenv('DB_PREFIX'),
            ]);
            $capsule->setAsGlobal();
            $capsule->bootEloquent();
            if ($capsule->getConnection()->getPdo()) {
                self::$capsule = $capsule;
                self::$dbConnectionPropertiesRequest = $dbConnectionPropertiesRequest;
                return true;
            }
            return false;
        } catch (\Exception $e) {
            return false;
        }

    }

    /**
     * @return array
     */
    public static function readDbStructure()
    {
        $sqlDataProperties = [];
        $dbName = self::$dbConnectionPropertiesRequest->db_databaseName;
        $rawQuery = "select * from information_schema.columns
                    where table_schema = '{$dbName}'
                    order by table_name,ordinal_position";
        $results = self::$capsule->getConnection()->getPdo()->query($rawQuery)->fetchAll();
        if ($results) {
            $sqlDataProperties = GenerateSqlTableStructure::createSqlTableStructures($results);
        }
        return $sqlDataProperties;
    }

    public static function massInsert(InsertToTableRequests $insertToTableRequests)
    {
        $model = new TempModel();
        $model->overideTableName("chapters");
        //Iterate through all columns, appending the props and values;
        $model->book_id = 2;
        $model->name = "name";
        $model->page = 1;

        $model->save();

    }

}