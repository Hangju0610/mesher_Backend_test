import { Module } from '@nestjs/common';
import { EthersProcessor } from './ethers.processor';
import { ethersProvider } from './ethers.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Block } from 'src/block/entities/block.entity';
import { TxReceipt } from 'src/txreceipt/entities/txreceipt.entity';
import { BlockLog } from 'src/blocklog/entities/blocklog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Block, TxReceipt, BlockLog])],
  providers: [ethersProvider, EthersProcessor],
})
export class EthersModule {}
