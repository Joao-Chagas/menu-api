import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
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
  @Post('create')
  async create(@Body() menu: MenuRequest) {
    return this.menuService.create(menu);
  }

  @ApiOkResponse({
    description: 'This route finds the item from menu by name',
  })
  @ApiParam({
    name: 'name',
    example: 'hamburger artesanal',
  })
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
