import {
  ApiBadRequestResponse,
  ApiExtraModels,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { TxReceiptService } from './txreceipt.service';
import { Controller, Get, Query } from '@nestjs/common';
import { BlockLog } from 'src/blocklog/entities/blocklog.entity';
import { TxReceiptResDto } from './dto/res.dto';
import { TxAddressReqDto, TxHashReqDto } from './dto/req.dto';
@ApiTags('TxReceipt')
@ApiExtraModels(TxHashReqDto, TxAddressReqDto, BlockLog)
@Controller('txreceipts')
export class TxReceiptController {
  constructor(private readonly txReceiptService: TxReceiptService) {}

  @Get('txhash')
  @ApiOperation({
    description:
      'queryString을 통해 Hash, to, from 중 하나의 데이터를 받아 단일 Receipt를 검색하는 Router입니다.',
  })
  @ApiOkResponse({
    type: TxReceiptResDto,
    description:
      '하나의 단일 Receipt를 찾는 Router로, QueryString을 통해 데이터를 받습니다.',
  })
  @ApiBadRequestResponse({
    description: 'Parameter가 아무것도 없을 때 나오는 에러입니다.',
  })
  @ApiNotFoundResponse({
    description: '조회 시 해당하는 데이터가 없을 때 발생하는 에러입니다.',
  })
  async findReceipt(
    @Query() { transactionHash }: TxHashReqDto,
  ): Promise<TxReceiptResDto> {
    return this.txReceiptService.findReceiptByHash(transactionHash);
  }

  @Get('address')
  @ApiOperation({
    description: 'from 혹은 to를 통해 모든 데이터를 찾습니다.',
  })
  @ApiOkResponse({
    type: [TxReceiptResDto],
    description: 'from 혹은 to를 통해 해당하는 모든 데이터를 출력합니다.',
  })
  @ApiBadRequestResponse({
    description: 'from 혹은 to가 입력되지 않았을 경우 발생하는 에러',
  })
  async findReceiptByFromOrTo(@Query() { from, to }: TxAddressReqDto) {
    return this.txReceiptService.findReceiptByAddress(from, to);
  }
}
