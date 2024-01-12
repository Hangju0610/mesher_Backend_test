import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Block } from './entities/block.entity';
import { BlockResDto } from './dto/res.dto';

@Injectable()
export class BlockService {
  constructor(
    @InjectRepository(Block)
    private blockRepository: Repository<Block>,
  ) {}

  /**
   * Hash를 통해 블록을 조회하는 메서드
   * @param {string} hash Block의 hash
   * @returns {Block}
   */
  async findBlockByHash(hash: string): Promise<BlockResDto> {
    const block = await this.blockRepository.findOne({
      where: { hash },
      relations: {
        transactions: true,
      },
      select: {
        transactions: true,
      },
    });
    if (!block) {
      throw new NotFoundException('Block을 찾을 수 없습니다.');
    }
    return block;
  }

  /**
   * Block 개수를 전달하기 위한 Methods
   * @returns blockCount
   */
  async countBlocks(): Promise<number> {
    return await this.blockRepository.count();
  }
}
