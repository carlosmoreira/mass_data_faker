<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/5/2018
 * Time: 12:17 PM
 */

namespace src\DbConnection;


class MySqlConnection implements DbConnection
{

    public function connect($dbName, $username, $password)
    {
        //Instantiate the ORM Connection
    }

    public function readDb()
    {
        //Query the table and retrieve the db tables and columns
    }

}