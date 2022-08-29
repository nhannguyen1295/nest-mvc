import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {ProductsController} from "./product.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {MysqlDbConfigureService} from "./config/mysql-db-configure.service";
import {AppService} from "./app.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: MysqlDbConfigureService,
    })],
  controllers: [AppController, ProductsController],
  providers: [AppService, MysqlDbConfigureService],
})
export class AppModule {}
