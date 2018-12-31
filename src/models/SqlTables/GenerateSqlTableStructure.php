<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/6/2018
 * Time: 4:42 PM
 */

namespace src\models\SqlTables;


class GenerateSqlTableStructure
{

    private static $sqlTableStructures = [];

    /**
     * @param $sqlDataRows
     * @return SqlTableStructure[]
     */
    public static function createSqlTableStructures($sqlDataRows)
    {
        
        foreach ($sqlDataRows as $row) {
            $tableName = $row['TABLE_NAME'];

            $sqlTableStructure = null;
            $indexOfTableStructure = self::searchTableStructureExists($tableName);
            if ($indexOfTableStructure > -1) {
                $sqlTableStructure = self::$sqlTableStructures[$indexOfTableStructure];
            } else {
                $sqlTableStructure = new SqlTableStructure();
                $sqlTableStructure->name = $tableName;
            }

            $sqlProperty = new SqlProperty();
            $sqlProperty->name = $row['COLUMN_NAME'];
            $sqlProperty->characterMaximumLength = $row['CHARACTER_MAXIMUM_LENGTH'];
            $sqlProperty->dataType = $row['DATA_TYPE'];
            $sqlProperty->isNullable = $row['IS_NULLABLE'];
            $sqlProperty->isPrimaryKey = ($row['COLUMN_KEY'] === "PRI");
            $sqlProperty->hasAutoIncrement = ( strpos($row['EXTRA'],"auto_increment") !== FALSE ) ;
            $sqlTableStructure->columns[] = $sqlProperty;

            if ($indexOfTableStructure < 0) {
                self::$sqlTableStructures[] = $sqlTableStructure;
            }
        }
        return self::$sqlTableStructures;
    }


    /**
     * Return index of object in relation SqlTableStructure
     * @param $tableName
     * @return int
     */
    private static function searchTableStructureExists($tableName)
    {
        if (empty(self::$sqlTableStructures)) {
            return -1;
        }
        foreach (self::$sqlTableStructures as $index => $sqlTableStructure) {
            if ($sqlTableStructure->name === $tableName) {
                return $index;
            }
        }
        return -1;
    }

}