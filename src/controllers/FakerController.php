<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/5/2018
 * Time: 11:33 AM
 */

namespace src\controllers;

use Slim\Http\Request;
use Slim\Http\Response;
use src\DbConnection\DbConnection;
use src\Helpes\FakerValueHelper;
use src\Helpes\JsonToObjectHelper;
use src\models\Request\DbConnectionPropertiesRequest;
use src\models\Request\InsertToTableRequests;

class FakerController extends Controller
{

    public function read(Request $request, Response $response)
    {
        try {
            $dbConnectionPropertiesRequest = new DbConnectionPropertiesRequest($request);
            $this->session->dbConnectionProperties = $dbConnectionPropertiesRequest;

            $connected = DbConnection::connect($this->session->dbConnectionProperties);

            if ($connected) {
                $this->session->save();
                $structure = DbConnection::readDbStructure();
            } else
                throw new \Exception("Unable to connect to DB");

            return $response->withJson(['dbStructure' => $structure, 'fakerTypes' => FakerValueHelper::getFakerProviders()], 200);

        } catch (\Exception $exception) {
            return $response->withJson(['error' => $exception->getMessage()], 400);
        }

    }

    public function create(Request $request, Response $response)
    {
        try {
            /**
             * @var InsertToTableRequests $insertToTableRequest
             */
            $insertToTableRequest = JsonToObjectHelper::Convert($request->getBody(), new InsertToTableRequests());

            $connected = DbConnection::connect($this->session->dbConnectionProperties);

            if ($connected) {
                DbConnection::massInsert($insertToTableRequest);
                return $response->withJson([
                    'success' => 'ok'
                ], 200);
            } else {
                throw new \Exception('Unable to connect to your database, please connect again');
            }
        } catch (\Exception $exception) {
            return $response->withJson(['error' => $exception->getMessage(),'trace' => $exception->getTrace()], 400);
        }
    }
}