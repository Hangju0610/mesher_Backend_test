import { EthersProcessor } from './../ethers/ethers.processor';
import { Inject, Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { IncomingWebhook } from '@slack/webhook';
import { BlockService } from 'src/block/block.service';
import { BlockLogService } from 'src/blocklog/blocklog.service';
import { TxReceiptService } from 'src/txreceipt/txreceipt.service';

@Injectable()
export class AlarmService {
  constructor(
    @Inject('SLACK') private slackWebHook: IncomingWebhook,
    private blockLogService: BlockLogService,
    private blockService: BlockService,
    private txReceiptService: TxReceiptService,
    private ethersProcessor: EthersProcessor,
  ) {}

  @Cron(CronExpression.EVERY_5_MINUTES)
  async sendDBData(): Promise<void> {
    const counts = await Promise.all([
      await this.blockService.countBlocks(),
      await this.txReceiptService.countTxReceipts(),
      await this.blockLogService.countBlockLogs(),
    ]);
    this.slackWebHook.send({
      attachments: [
        {
          // 메세지 내용 전달
          text: 'Database 상황 보고',
          fields: [
            {
              // 제목
              title: 'Database 상황',
              value: `Blocks : ${counts[0]} 
              TransactionReceipts : ${counts[1]}
              BlockLogs : ${counts[2]}`,
            },
          ],
          ts: Math.floor(new Date().getTime() / 1000).toString(),
        },
      ],
    });
  }

  @Cron(CronExpression.EVERY_HOUR)
  async healthCheck(): Promise<void> {
    const ethersConnect = await this.ethersProcessor.ethersCheck();
    if (ethersConnect) {
      this.slackWebHook.send({
        attachments: [
          {
            // 메세지 내용 전달
            text: '서버 상황 보고',
            fields: [
              {
                // 제목
                title: 'Server 정상 동작 중',
                value: `AppServer: 양호
                ethersNetwork: 양호`,
              },
            ],
            ts: Math.floor(new Date().getTime() / 1000).toString(),
          },
        ],
      });
    }
  }
}
