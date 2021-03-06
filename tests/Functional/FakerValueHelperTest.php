<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/9/2018
 * Time: 4:05 PM
 */

namespace Tests\Functional;


use Faker\Factory;
use src\Helpes\FakerValueHelper;

class FakerValueHelperTest extends BaseTestCase
{
    public function testFakerHelperHasFormatters()
    {
        $formatters = FakerValueHelper::getFakerProviders();
        $this->assertNotEmpty($formatters);
    }

    public function testFormattersCanCreateValues()
    {
        $formatters = FakerValueHelper::getFakerProviders();
        $faker = Factory::create();

        foreach ($formatters as $formatter) {
            foreach ($formatter as $property) {
                $this->assertNotNull($faker->{$property}, "{$property} came back as null");
                if(!is_bool($faker->{$property}))
                    $this->assertNotEmpty($faker->{$property},"{$property} came bas as empty");
            }
        }
    }
}