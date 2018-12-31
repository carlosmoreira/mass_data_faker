<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/9/2018
 * Time: 3:43 PM
 */

namespace src\Helpes;


use Faker\Factory as FakerFactory;

class FakerValueHelper
{
    const BASE_NAME_SPACE = "Faker\Provider\Base";
    const EXCLUDE_METHODS = ['file','setDefaultTimezone','getDefaultTimezone'];

    public static function createValue($type)
    {
        $faker = FakerFactory::create();
        return $faker->$type;
    }

    /**
     * Retrieves all possible properties of faker | separated by sections
     * @return array
     */
    public static function getFakerProviders()
    {
        $methodsInClass = [];
        $faker = FakerFactory::create();
        $providers = $faker->getProviders();
        for($i = 0; $i < (count($providers) - 1) ; $i++){
            $reflection = new \ReflectionClass($providers[$i]);
            foreach($reflection->getMethods(\ReflectionMethod::IS_PUBLIC) as $method) {
                $requiredParams = $method->getNumberOfRequiredParameters();
                if($requiredParams > 0 || in_array($method->name,self::EXCLUDE_METHODS)){
                    continue;
                }
                if ($method->class != self::BASE_NAME_SPACE) {
                    $methodsInClass[$reflection->getShortName()][] = $method->name;
                }

            }
        }
        return $methodsInClass;
    }
}