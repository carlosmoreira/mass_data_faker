<?php

use Slim\Http\Request;
use Slim\Http\Response;

$app->post(
'/readDatabase',
    \src\controllers\FakerController::class . ':read'
);

$app->post(
    '/create',
    \src\controllers\FakerController::class . ':create'
);