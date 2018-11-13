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

    public static function createValue($type)
    {
        $faker = FakerFactory::create();
        return $faker->$type;
    }

    //Create a unit test for this that loops through all values and confirm a property can be created.

    /**
     * Retrieves all possible properties of faker | separated by sections
     * @return array
     */
    public static function getFormatters()
    {
        return [
            'base' => [
                'randomDigit',
                'randomDigitNotNull',
            ],
            'person' => [
                'title',
                'titleMale',
                'titleFemale',
                'suffix',
                'name',
                'firstName',
                'firstNameMale',
                'firstNameFemale',
                'lastName'
            ],
            'lorem' => [],
            'address' => [],
            'phoneNumber' => [],
            'company' => [],
            'text' => [],
            'datetime' => [],
            'internet' => [],
            'userAgent' => [],
            'payment' => [],
            'color' => [],
            'file' => [],
            'image' => [],
            'uuid' => [],
            'barCode' => [],
            'miscellaneous' => [],
        ];
    }
}