<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/6/2018
 * Time: 4:39 PM
 */

namespace src\models\SqlTables;


class SqlTableStructure
{
    /**
     * @var string $name
     */
    public $name;

    /**
     * @var SqlProperty[] $columns
     */
    public $columns;
}