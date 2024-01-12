import { Module } from '@nestjs/common';
import { EthersModule } from './ethers/ethers.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockModule } from './block/block.module';
import { TxReceiptModule } from './txreceipt/txreceipt.module';
import { AlarmModule } from './alarm/alarm.module';
import ormConfig from './config/orm.config';
import { ScheduleModule } from '@nestjs/schedule';
import { BlockLogModule } from './blocklog/blocklog.module';
import slackConfig from './config/slack.config';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptions } from './common/filter/exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig, slackConfig],
    }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('postgres.host'),
          port: configService.get('postgres.port'),
          database: configService.get('postgres.database'),
          username: configService.get('postgres.username'),
          password: configService.get('postgres.password'),
          autoLoadEntities: true,
          synchronize: true,
          logging: false,
        };
      },
    }),
    // Controller, Service 완성 전까지 모듈 사용 진행 금지.
    EthersModule,
    BlockModule,
    TxReceiptModule,
    BlockLogModule,
    AlarmModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptions,
    },
  ],
})
export class AppModule {}
