import { Module } from '@nestjs/common';
import { ethersProvider } from './ethers.provider';

@Module({
  providers: [ethersProvider],
})
export class ethersModule {}
