import { Module } from '@nestjs/common';
import { EthersProcessor } from './ethers.processor';
import { ethersProvider } from './ethers.provider';

@Module({
  providers: [ethersProvider, EthersProcessor],
})
export class EthersModule {}
