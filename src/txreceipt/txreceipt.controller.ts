import {
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { TxReceiptService } from './txreceipt.service';
import { Controller, Get, Query } from '@nestjs/common';
import { BlockLog } from 'src/blocklog/entities/blocklog.entity';
import { TxReceiptResDto } from './dto/res.dto';
import { TxReqDto } from './dto/req.dto';

@ApiTags('TxReceipt')
@ApiExtraModels(TxReqDto, BlockLog)
@Controller('txreceipts')
export class TxReceiptController {
  constructor(private readonly txReceiptService: TxReceiptService) {}

  @Get()
  @ApiOperation({
    description:
      'queryString을 통해 Hash, to, from 중 하나의 데이터를 받아 단일 Receipt를 검색하는 Router입니다.',
  })
  @ApiOkResponse({
    type: TxReceiptResDto,
    description:
      '하나의 단일 Receipt를 찾는 Router로, QueryString을 통해 데이터를 받습니다.',
  })
  async findReceipt(
    @Query() { transactionHash, from, to }: TxReqDto,
  ): Promise<TxReceiptResDto> {
    if (transactionHash) {
      return this.txReceiptService.findReceiptByHash(transactionHash);
    }
    if (from || to) {
      return this.txReceiptService.findReceiptByFromOrTo(from, to);
    }
  }
}
