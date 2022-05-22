import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { UpperCasePipe } from 'src/pipes/upper-case';
import { MenuRequest } from './dto/request/menu';
import { MenuResponse } from './dto/response/menu';
import { MenuService } from './menu.service';

@ApiTags('Menu Controller')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @ApiOkResponse({
    description: 'This route returns the created menu',
    type: () => MenuResponse,
  })
  @ApiBody({
    type: () => MenuRequest,
  })
  @UsePipes(new UpperCasePipe())
  @Post('create')
  async create(@Body() menu: MenuRequest) {
    return this.menuService.create(menu);
  }

  @ApiOkResponse({
    description: 'This route finds the item from menu by name',
    type: () => MenuResponse,
  })
  @ApiParam({
    name: 'name',
    example: 'hamburger artesanal',
  })
  @Put('update/:id')
  async update(@Param('id') id: number, @Body() data: MenuRequest) {
    return this.menuService.update(id, data);
  }

  @ApiOkResponse({
    description: 'This route finds the item from menu by name',
    type: () => MenuResponse,
  })
  @ApiParam({
    name: 'name',
    example: 'hamburger artesanal',
  })
  @UsePipes(new UpperCasePipe())
  @Get(':name')
  async findByName(@Param('name') name: string) {
    return this.menuService.findByName(name);
  }

  @ApiOkResponse({
    description: 'This route returns the complete menu',
  })
  @Get()
  async getAll() {
    return this.menuService.findAll();
  }

  @ApiOkResponse({
    description: 'This route deletes the current item',
  })
  @ApiParam({
    name: 'id',
    example: 1,
  })
  @Delete('delete/:id')
  async destroy(@Param('id') id: number) {
    return this.menuService.destroy(id);
  }
}
