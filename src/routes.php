<?php

use Slim\Http\Request;
use Slim\Http\Response;

$app->get(
'/',
    \src\controllers\FakerController::class . ':read'
);
