import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { MenuRequest } from './dto/request/menu';
import { MenuResponse } from './dto/response/menu';

@Injectable()
export class MenuService {
  constructor(private readonly database: DatabaseService) {}

  async create(data: MenuRequest): Promise<MenuResponse> {
    return this.database.menu.create({ data });
  }

  async update(id: number, data: MenuRequest): Promise<MenuResponse> {
    return this.database.menu.update({
      data,
      where: { id },
    });
  }

  async findAll(): Promise<MenuResponse[]> {
    return this.database.menu.findMany();
  }

  async findByName(name: string): Promise<MenuResponse[]> {
    return this.database.menu.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
  }

  async destroy(id: number): Promise<MenuResponse> {
    return this.database.menu.delete({
      where: { id },
    });
  }
}
