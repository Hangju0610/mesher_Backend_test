import { BlockService } from './block.service';
import { Controller, Get, Query } from '@nestjs/common';
import { Block } from './entities/block.entity';
import {
  ApiExtraModels,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { BlockHashReqDto } from './dto/req.dto';
import { BlockResDto } from './dto/res.dto';

@ApiTags('blocks')
@ApiExtraModels(BlockHashReqDto)
@Controller('blocks')
export class BlockController {
  constructor(private readonly blockService: BlockService) {}

  @Get()
  @ApiOperation({
    description: 'Hash를 통해 하나의 블록을 찾습니다.',
  })
  @ApiOkResponse({
    type: Block,
    description: 'Hash를 통해 Block을 찾을 경우입니다.',
  })
  @ApiNotFoundResponse({
    description: '해당하는 block을 찾을 수 없는 경우 에러를 발생시킵니다.',
  })
  async findBlockByHash(
    @Query() { hash }: BlockHashReqDto,
  ): Promise<BlockResDto> {
    return await this.blockService.findBlockByHash(hash);
  }
}
