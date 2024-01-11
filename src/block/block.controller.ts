import { BlockService } from './block.service';
import { Controller, Get } from '@nestjs/common';
import { Block } from './entities/block.entity';

@Controller('blocks')
export class BlockController {
  constructor(private readonly blockService: BlockService) {}

  @Get()
  async findBlockByHash(@Query() { hash }: string): Promise<Block> {}
}
