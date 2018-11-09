<?php

namespace src\session;

use src\models\Request\DbConnectionPropertiesRequest;

class Session
{
    CONST SESSION_NAME = 'mass_data_faker';

    /**
     * @var DbConnectionPropertiesRequest $dbConnectionProperties
     */
    public $dbConnectionProperties;

    public $db_type;
    public $db_host;
    public $db_databaseName;
    public $db_username;
    public $db_password;

    /**
     * @var Session $instance
     */
    private static $instance;

    /**
     * @return Session
     */
    public static function getInstance()
    {
        if (self::$instance === null) {
            if (isset($_SESSION[self::SESSION_NAME])) {
                self::$instance = $_SESSION[self::SESSION_NAME];
            } else {
                $_SESSION[self::SESSION_NAME] = new Session();
                self::$instance = $_SESSION['mass_data_faker'];
            }
        }
        return self::$instance;
    }

    public function save()
    {
        $_SESSION[self::SESSION_NAME] = $this;
    }
}