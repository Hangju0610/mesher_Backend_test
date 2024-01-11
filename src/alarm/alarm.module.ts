import { slackProvider } from './slack.provider';
import { Module } from '@nestjs/common';
import { AlarmService } from './alarm.service';
import { BlockModule } from 'src/block/block.module';
import { BlockLogModule } from 'src/blocklog/blocklog.module';
import { TxReceiptModule } from 'src/txreceipt/txreceipt.module';
import { EthersModule } from 'src/ethers/ethers.module';

@Module({
  imports: [BlockModule, BlockLogModule, TxReceiptModule, EthersModule],
  providers: [slackProvider, AlarmService],
  exports: [slackProvider],
})
export class AlarmModule {}
