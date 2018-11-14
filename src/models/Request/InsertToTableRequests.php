<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/8/2018
 * Time: 4:35 PM
 */

namespace src\models\Request;


use Liuggio\Filler\HTTPPropertyTrait;

class InsertToTableRequests
{
    use HTTPPropertyTrait;

    /**
     * @var string $tableName
     */
    public $tableName;

    /**
     * @var ColumnFakerType[] $columns
     */
    public $columns;

}