<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/5/2018
 * Time: 11:33 AM
 */

namespace src\controllers;

use Slim\Http\Request;

class FakerController extends Controller
{

    public function read(Request $request){
        /**
         * What do we need?
         *  - Db Name, User, Password (Credentials)
         *  - Db Type
         */

        //We will store the credentials in the session

        //We wil return an object that corresponds to the db structure

//        {
//            Tables : [
//                'column1' : 'type'
//            ]
//        }
    }


    public function create(Request $request){
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