<?php

namespace src\Helpes;

use Faker\Factory as FakerFactory;
use Faker\Generator;
use Faker\Provider\Base;

class FakerValueHelper
{
    const BASE_NAME_SPACE = "Faker\Provider\Base";
    const EXCLUDE_METHODS = ['file','setDefaultTimezone','getDefaultTimezone','randomKey','shuffle','shuffleArray', 'shuffleString','toUpper','toLower','optional','valid','regexify'];

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
        $base = null;
        foreach($providers as $provider){
            $reflection = new \ReflectionClass($provider);
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

        $methodsInClass = array_merge($methodsInClass,self::getBaseProvider($faker));

        return $methodsInClass;
    }

    /**
     * Return the methods in 'Base Provider'
     * @param Generator $generator
     * @return array
     */
    private static function getBaseProvider(Generator $generator){
        $base = new Base($generator);
        $reflection =  new \ReflectionClass($base);
        $methodsInClass = [];
        foreach($reflection->getMethods(\ReflectionMethod::IS_PUBLIC) as $method) {
            $requiredParams = $method->getNumberOfRequiredParameters();
            if($requiredParams > 0 || in_array($method->name,self::EXCLUDE_METHODS)){
                continue;
            }
            $methodsInClass[$reflection->getShortName()][] = $method->name;
        }
        return $methodsInClass;
    }
}