<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/5/2018
 * Time: 11:32 AM
 */

namespace src\controllers;

use src\session\Session;

class Controller
{
    /**
     * @var Session $session
     */
    protected $session;

    public function __construct()
    {
        $this->session = Session::getInstance();
        //grab session,
        //if the session has a successful db connection
        // add to global slim object
        //Or just bootup eloquent
    }
}