<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/14/2018
 * Time: 2:32 PM
 */

namespace src\Helpes;


class JsonToObjectHelper
{
    /**
     * @param string $json
     * @param object $object
     * @return object
     */
    public static function Convert($json, $object)
    {
        $json = json_decode($json);
        $mapper = new \JsonMapper();
        $classInstance = $mapper->map($json, new $object);
        return $classInstance;
    }
}