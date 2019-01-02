<?php

use Slim\Http\Request;
use Slim\Http\Response;

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

$app->post(
'/readDatabase',
    \src\controllers\FakerController::class . ':read'
);

$app->post(
    '/create',
    \src\controllers\FakerController::class . ':create'
);