import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Block } from './entities/block.entity';

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
  async findBlockByHash(hash: string): Promise<Block> {
    return await this.blockRepository.findOneBy({ hash });
  }

  /**
   * Block 개수를 전달하기 위한 Methods
   * @returns blockCount
   */
  async countBlocks(): Promise<number> {
    return await this.blockRepository.count();
  }
}
