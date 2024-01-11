import { Module } from '@nestjs/common';
import { TxReceiptController } from './txreceipt.controller';
import { TxReceiptService } from './txreceipt.service';

@Module({
  controllers: [TxReceiptController],
  providers: [TxReceiptService],
})
export class TxReceiptModule {}
