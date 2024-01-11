import { Module } from '@nestjs/common';
import { BlockController } from './block.controller';
import { BlockService } from './block.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Block } from './entities/block.entity';
import { TxReceipt } from 'src/txreceipt/entities/txreceipt.entity';
import { BlockLog } from 'src/blocklog/entities/blocklog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Block, TxReceipt, BlockLog])],
  controllers: [BlockController],
  providers: [BlockService],
})
export class BlockModule {}
