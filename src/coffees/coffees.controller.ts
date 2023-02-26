import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll() {
    return 'This action returns all coffees';
  }

  // add id parameter --
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  // body decorator
  @Post()
  //create (@Body('name') body) {  --> pulls name out  ==> susceptible to vslidation errors USE WITH CAUTION
  create(@Body() body) {
    return body;
    //return `This action creates a coffee`;
  }
}
