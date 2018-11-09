<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/8/2018
 * Time: 4:35 PM
 */

namespace src\models\Request;


use Liuggio\Filler\HTTPPropertyTrait;
use Slim\Http\Request;

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


    public function __construct(Request $request)
    {
        $this->fillProperties($request->getParsedBody());
    }
}