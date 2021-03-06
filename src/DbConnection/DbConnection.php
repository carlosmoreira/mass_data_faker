<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/5/2018
 * Time: 12:31 PM
 */

namespace src\DbConnection;


use Illuminate\Database\Capsule\Manager;
use src\Helpes\FakerValueHelper;
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
                'driver' => $dbConnectionPropertiesRequest->db_type,// 'mysql' or 'sqlsrv'
                'host' => $dbConnectionPropertiesRequest->db_host,
                'database' => $dbConnectionPropertiesRequest->db_databaseName,
                'username' => $dbConnectionPropertiesRequest->db_username,
                'password' => $dbConnectionPropertiesRequest->db_password,
                'charset' => 'utf8',
                'collation' => 'utf8_unicode_ci',
                'prefix' => getenv('DB_PREFIX'),
                'port' => $dbConnectionPropertiesRequest->db_port
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
            var_dump($e->getMessage());
            return false;
        }

    }

    /**
     * @return array|\src\models\SqlTables\SqlTableStructure[]
     * @throws \Exception
     */
    public static function readDbStructure()
    {
        $sqlDataProperties = [];
        $dbName = self::$dbConnectionPropertiesRequest->db_databaseName;
        switch (self::$dbConnectionPropertiesRequest->db_type) {
            case 'mysql' :
                $rawQuery = "select * from information_schema.columns
                    where table_schema = '{$dbName}'
                    order by table_name,ordinal_position";
                break;
            case 'sqlsrv' :
                $rawQuery = "SELECT TABLE_SCHEMA ,
                           TABLE_NAME ,
                           COLUMN_NAME ,
                           CHARACTER_MAXIMUM_LENGTH ,
                           DATA_TYPE ,
                           IS_NULLABLE
                    FROM INFORMATION_SCHEMA.COLUMNS
                    Where TABLE_CATALOG Like '{$dbName}'";
                break;
            default :
                throw new \Exception('Incorrect Database type used. Must be mysql or sqlsrv');
        }

        $results = self::$capsule->getConnection()->getPdo()->query($rawQuery)->fetchAll();
        if ($results) {
            $sqlDataProperties = GenerateSqlTableStructure::createSqlTableStructures($results);
        }
        return $sqlDataProperties;
    }

    public static function massInsert(InsertToTableRequests $insertToTableRequests)
    {
        if ($insertToTableRequests->props->rows < 1) {
            throw new \Exception("Rows must be greater than 0");
        }

        if ($insertToTableRequests->props->truncate) {
            $result = self::$capsule->getConnection()->getPdo()->query("truncate table {$insertToTableRequests->name}")->execute();
            if(!$result)
                throw new \Exception("Error, unable to truncate table");
        }

        for ($i = 0; $i < $insertToTableRequests->props->rows; $i++) {
            self::insertRow($insertToTableRequests);
        }
    }

    /**
     * @param InsertToTableRequests $insertToTableRequests
     */
    private static function insertRow(InsertToTableRequests $insertToTableRequests)
    {
        $model = new TempModel();
        $model->overideTableName($insertToTableRequests->name);

        //Iterate through all columns, appending the props and values;
        foreach ($insertToTableRequests->columns as $property) {
            if ($property->manualValue) {
                $model->{$property->name} = $property->manualValue; //Value: Is a string directly from requset, that we dont need to generate a faker value
            } else {
                $model->{$property->name} = FakerValueHelper::createValue($property->faker);
            }


        }
        $model->save();
    }

}