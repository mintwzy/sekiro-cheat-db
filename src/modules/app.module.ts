import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
