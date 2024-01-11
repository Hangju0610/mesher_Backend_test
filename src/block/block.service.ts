import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Block } from './entities/block.entity';

@Injectable()
export class BlockService {
  constructor(
    @InjectRepository(Block)
    private readonly blockRepository: Repository<Block>,
  ) {}

  /**
   * Hash를 통해 블록을 조회하는 메서드
   * @param {string} hash Block의 hash
   * @returns {Block}
   */
  async findBlockByHash(hash: string): Promise<Block> {
    return await this.blockRepository.findOneBy({ hash });
  }
}
