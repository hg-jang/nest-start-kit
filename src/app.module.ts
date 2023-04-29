import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { CatsModule } from './cats/cats.module';

const env = process.env.NODE_ENV || 'local';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${env}`,
    }),
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
