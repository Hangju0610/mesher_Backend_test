import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlockLog } from './entities/blocklog.entity';

@Injectable()
export class BlockLogService {
  constructor(
    @InjectRepository(BlockLog)
    private readonly blockLogRepository: Repository<BlockLog>,
  ) {}

  /**
   * BlockLog의 개수를 측정하기 위한 메서드
   * @returns CountBlockLogs
   */
  async countBlockLogs(): Promise<number> {
    return await this.blockLogRepository.count();
  }
}
