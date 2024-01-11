import { BlockService } from './block.service';
import { Controller, Get, Query } from '@nestjs/common';
import { Block } from './entities/block.entity';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('blocks')
@Controller('blocks')
export class BlockController {
  constructor(private readonly blockService: BlockService) {}

  @Get()
  @ApiOkResponse({
    type: Block,
    description: 'Hash를 통해 Block을 찾을 경우입니다.',
  })
  async findBlockByHash(@Query('hash') hash: string): Promise<Block> {
    return await this.blockService.findBlockByHash(hash);
  }
}
