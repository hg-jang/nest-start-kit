import { HttpAdapterHost, NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

import { HttpExceptionFilter } from './core/filters/http-exception/http-exception.filter';

import { ResponseInterceptor } from './core/interceptors/response/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;

  const httpAdapterHost = app.get(HttpAdapterHost);

  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter(httpAdapterHost));
  app.useGlobalInterceptors(new ResponseInterceptor())

  await app.listen(port);
}
bootstrap();
