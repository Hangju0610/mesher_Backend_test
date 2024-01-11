import { BlockService } from './block.service';
import { Controller, Get, Query } from '@nestjs/common';
import { Block } from './entities/block.entity';

@Controller('blocks')
export class BlockController {
  constructor(private readonly blockService: BlockService) {}

  @Get()
  async findBlockByHash(@Query('hash') hash: string): Promise<Block> {
    return await this.blockService.findBlockByHash(hash);
  }
}
