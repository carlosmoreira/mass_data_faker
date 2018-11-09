<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/5/2018
 * Time: 11:33 AM
 */

namespace src\controllers;

use Slim\Http\Request;
use src\DbConnection\DbConnection;
use src\models\Request\DbConnectionPropertiesRequest;
use src\models\Request\InsertToTableRequests;
use src\models\SqlTables\DbConnectionProperties;

class FakerController extends Controller
{

    public function read(Request $request)
    {

        $dbConnectionPropertiesRequest = new DbConnectionPropertiesRequest($request);
        $this->session->dbConnectionProperties = $dbConnectionPropertiesRequest;

        $connected = DbConnection::connect($this->session->dbConnectionProperties);

        if ($connected) {
            $this->session->save();
            $structure = DbConnection::readDbStructure();
        } else
            throw new \Exception("Unable to connect to DB");


        echo json_encode($structure);
    }


    public function create(Request $request)
    {
        $insertToTableRequest = new InsertToTableRequests($request);

        $connected = DbConnection::connect($this->session->dbConnectionProperties);

        if ($connected) {
            DbConnection::massInsert($insertToTableRequest);
        } else {
            throw new \Exception('Unable to connect to your database');
        }


        /**
         * When the db is created, pass back an array of faker types
         */

        /**
         * What will we do?
         *  - We will take the table name and convert it to an Eloquent ORM
         *  - We will go through all the columns and attach them to the class
         *      - Setting it a value corresponding to the faker type selected
         *  - We will wrap this in a 'Commit' and attempt to save
         *  - If valid we will return a 'Success' (400)
         *  - If error we will state why
         */
    }
}