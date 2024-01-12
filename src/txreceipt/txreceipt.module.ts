import { Module } from '@nestjs/common';
import { TxReceiptController } from './txreceipt.controller';
import { TxReceiptService } from './txreceipt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TxReceipt } from './entities/txreceipt.entity';
import { BlockLog } from 'src/blocklog/entities/blocklog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TxReceipt, BlockLog])],
  controllers: [TxReceiptController],
  providers: [TxReceiptService],
  exports: [TxReceiptService],
})
export class TxReceiptModule {}
