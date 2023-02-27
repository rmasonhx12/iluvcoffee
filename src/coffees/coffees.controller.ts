import { CreateCoffeeDto } from './dto/create-coffee.dto';
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
  }

  // add id parameter --
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  // body decorator
  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeesService.update(id, body);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
