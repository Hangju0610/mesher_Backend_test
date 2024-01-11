import { ApiExtraModels, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TxReceiptService } from './txreceipt.service';
import { Controller, Get, Query } from '@nestjs/common';
import { BlockLog } from 'src/blocklog/entities/blocklog.entity';
import { TxReceiptResDto } from './dto/res.dto';

@ApiTags('TxReceipt')
@ApiExtraModels(BlockLog)
@Controller('txreceipts')
export class TxReceiptController {
  constructor(private readonly txReceiptService: TxReceiptService) {}

  @Get()
  @ApiOkResponse({
    type: TxReceiptResDto,
    description: 'Hash를 통해 찾습니다.',
  })
  async findReceiptByHash(
    @Query('transaction') transactionHash: string,
  ): Promise<TxReceiptResDto> {
    return this.txReceiptService.findReceiptByHash(transactionHash);
  }
}
