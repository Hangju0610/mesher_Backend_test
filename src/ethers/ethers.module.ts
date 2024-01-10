import { Module } from '@nestjs/common';
import { EthersProcessor } from './ethers.processor';

@Module({
  providers: [EthersProcessor],
})
export class EthersModule {}
