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

class FakerController extends Controller
{

    public function read(Request $request)
    {
        $this->session->db_type = $request->getParsedBodyParam("dbType");
        $this->session->db_host = $request->getParsedBodyParam("host");
        $this->session->db_username = $request->getParsedBodyParam("dbUserName");
        $this->session->db_databaseName = $request->getParsedBodyParam("dbName");
        $this->session->db_password = $request->getParsedBodyParam("dbPassword");

        $connected = DbConnection::connect($this->session);

        if ($connected) {
            $this->session->save();
            $structure = DbConnection::readDbStructure();
        } else
            throw new \Exception("Unable to connect to DB");


        echo json_encode($structure);
    }


    public function create(Request $request)
    {
//        {
//            table : "TableName",
//            columns : [
//                {
//                    name : "first_name",
//                    fakerType : "firstName"
//                }
//            ]
//        }

        /**
         * Need to check all possible solutions for faker.
         *
         * //Grab a library to turn a request payload into an object
         */

        /**
         * What do we need?
         *  - Table Name
         *  - Array of columns and (Faker Type Data) Ex: Date, Name, Address, etc ...
         *
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