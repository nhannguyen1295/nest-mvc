import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class MysqlDbConfigureService implements TypeOrmOptionsFactory {

    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.configService.get<string>('DATABASE_HOST'),
            username: this.configService.get<string>('DATABASE_UID'),
            password: this.configService.get<string>('DATABASE_PWD'),
            database: this.configService.get<string>('DATABASE_NAME'),
            entities: ["dist/**/*.entity{.ts,.js}"],
            synchronize:this.configService.get<string>('DATABASE_SYNC') === 'true'
        };
    }
}