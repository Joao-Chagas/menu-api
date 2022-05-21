import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export class DatabaseService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({ log: ['query'] });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
