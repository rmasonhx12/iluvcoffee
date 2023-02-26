// coffees controller
import {
  Body,
  Controller,
  Delete,
  Get,
  //HttpCode,
  //HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  //Res,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    return this.coffeesService.findAll();
    //const { limit, offset } = paginationQuery;
    //return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
  }

  // add id parameter --
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
    //return `This action returns #${id} coffee`;
  }

  // body decorator
  @Post()
  //@HttpCode(HttpStatus.GONE)
  //create (@Body('name') body) {  --> pulls name out  ==> susceptible to vslidation errors USE WITH CAUTION
  create(@Body() body) {
    return this.coffeesService.create(body);
    //return body;
    //return `This action creates a coffee`;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeesService.update(id, body);
    //return `This action updates #${id} coffee`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
    //return `This action removes #${id} coffee`;
  }
}
