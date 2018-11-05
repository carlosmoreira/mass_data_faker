<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/5/2018
 * Time: 12:17 PM
 */

namespace src\DbConnection;


interface DbConnection
{
    public function connect($dbName, $username, $password);
    public function readDb();
}