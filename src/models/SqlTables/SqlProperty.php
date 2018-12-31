<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/6/2018
 * Time: 4:32 PM
 */

namespace src\models\SqlTables;


class SqlProperty
{
    public $name;

    public $dataType;

    public $isNullable;

    public $characterMaximumLength;

    public $isPrimaryKey;

    public $hasAutoIncrement;
}