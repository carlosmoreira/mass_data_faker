<?php
/**
 * This class will be used a placeholder to connect to eloquent.
 *
 * The table name will be overridden in a private method before attempting a db save
 *
 */

namespace src\models;


use Illuminate\Database\Eloquent\Model;

class TempModel extends Model
{

    public $timestamps = false;


    public function overideTableName($tableName)
    {
        $this->table = $tableName;
    }

}