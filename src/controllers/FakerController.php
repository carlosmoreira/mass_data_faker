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
        die('in FakerController::Read');
    }
}