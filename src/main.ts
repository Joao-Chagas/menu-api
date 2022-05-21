import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Menu API')
    .setDescription('This API is meant to show food menu')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
}

async function init() {
  const port = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  await app.listen(port);
  Logger.log(`Server started on port ${port}`, 'Nest Application');
}
init();
