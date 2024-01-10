import { Module } from '@nestjs/common';
import { EthersModule } from './ethers/ethers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EthersModule,
  ],
  providers: [],
})
export class AppModule {}
