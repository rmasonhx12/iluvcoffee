import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Res() response) {
    response.status(200).send('This action returns all coffees');
  }

  // add id parameter --
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  // body decorator
  @Post()
  @HttpCode(HttpStatus.GONE)
  //create (@Body('name') body) {  --> pulls name out  ==> susceptible to vslidation errors USE WITH CAUTION
  create(@Body() body) {
    return body;
    //return `This action creates a coffee`;
  }
}
