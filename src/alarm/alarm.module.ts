import { slackProvider } from './slack.provider';
import { Module } from '@nestjs/common';
import { AlarmService } from './alarm.service';
import { BlockLogService } from 'src/blocklog/blocklog.service';
import { BlockService } from 'src/block/block.service';
import { TxReceiptService } from 'src/txreceipt/txreceipt.service';
import { BlockModule } from 'src/block/block.module';
import { BlockLogModule } from 'src/blocklog/blocklog.module';
import { TxReceiptModule } from 'src/txreceipt/txreceipt.module';

@Module({
  imports: [BlockModule, BlockLogModule, TxReceiptModule],
  providers: [slackProvider, AlarmService],
})
export class AlarmModule {}
