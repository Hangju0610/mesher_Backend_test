import { Module } from '@nestjs/common';
import { ethersModule } from './ethers/\bethers.module';

@Module({
  imports: [ethersModule],
  providers: [],
})
export class AppModule {}
