import { Module } from '@nestjs/common';
import { EthersModule } from './ethers/\bethers.module';

@Module({
  imports: [EthersModule],
  providers: [],
})
export class AppModule {}
