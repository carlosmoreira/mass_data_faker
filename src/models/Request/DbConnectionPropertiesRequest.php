<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/9/2018
 * Time: 2:54 PM
 */

namespace src\models\Request;


use Liuggio\Filler\HTTPPropertyTrait;
use Slim\Http\Request;

class DbConnectionPropertiesRequest
{
    use HTTPPropertyTrait;

    public $db_type;

    public $db_host;

    public $db_username;

    public $db_databaseName;

    public $db_password;

    public $db_port = 3306;

    public function __construct(Request $request)
    {
        $this->fillProperties($request->getParsedBody());
    }
}