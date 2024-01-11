import { ApiExtraModels, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TxReceipt } from './entities/txreceipt.entity';
import { TxReceiptService } from './txreceipt.service';
import { Controller, Get, Query } from '@nestjs/common';
import { BlockLog } from 'src/blocklog/entities/blocklog.entity';

@ApiTags('TxReceipt')
@ApiExtraModels(BlockLog)
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
