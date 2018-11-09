<?php
/**
 * Created by PhpStorm.
 * User: cm10280
 * Date: 11/9/2018
 * Time: 4:05 PM
 */

namespace Tests\Functional;


use src\Helpes\FakerValueHelper;

class FakerValueHelperTest extends BaseTestCase
{
    public function testFakerHelperHasFormatters(){
        $formatters = FakerValueHelper::getFormatters();

        $this->assertNotEmpty($formatters);
    }
}