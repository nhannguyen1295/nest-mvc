import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class MysqlDbConfigureService implements TypeOrmOptionsFactory {

    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        console.log('DATABASE_HOST', this.configService.get<string>('DATABASE_HOST'))
        console.log('DATABASE_UID', this.configService.get<string>('DATABASE_UID'))
        console.log('DATABASE_PWD', this.configService.get<string>('DATABASE_PWD'))
        console.log('DATABASE_NAME', this.configService.get<string>('DATABASE_NAME'))
        console.log('DATABASE_SYNC', this.configService.get<string>('DATABASE_SYNC') === 'true')
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