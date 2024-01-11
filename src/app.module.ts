import { Module } from '@nestjs/common';
import { EthersModule } from './ethers/ethers.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockModule } from './block/block.module';
import { TxReceiptModule } from './txreceipt/txreceipt.module';
import ormConfig from './config/orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig],
    }),
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
          synchronize: false,
          logging: true,
        };
      },
    }),
    // Controller, Service 완성 전까지 모듈 사용 진행 금지.
    // EthersModule,
    BlockModule,
    TxReceiptModule,
  ],
  providers: [],
})
export class AppModule {}
