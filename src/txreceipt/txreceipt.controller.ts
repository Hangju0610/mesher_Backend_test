import { ApiOkResponse } from '@nestjs/swagger';
import { TxReceipt } from './entities/txreceipt.entity';
import { TxReceiptService } from './txreceipt.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('txreceipts')
export class TxReceiptController {
  constructor(private readonly txReceiptService: TxReceiptService) {}

  @Get()
  @ApiOkResponse({ type: TxReceipt, description: 'Hash를 통해 찾습니다.' })
  async findReceiptByHash(
    @Query('transaction') transactionHash: string,
  ): Promise<TxReceipt> {
    return this.txReceiptService.findReceiptByHash(transactionHash);
  }
}
