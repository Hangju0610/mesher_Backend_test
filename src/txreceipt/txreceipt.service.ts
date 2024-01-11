import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TxReceipt } from './entities/txreceipt.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TxReceiptService {
  constructor(
    @InjectRepository(TxReceipt)
    private readonly txReceiptRepository: Repository<TxReceipt>,
  ) {}

  /**
   * Hash를 통해 transactionReceipt를 찾는 Method
   * @param hash transactionHash
   * @returns
   */
  async findReceiptByHash(transactionHash: string): Promise<TxReceipt> {
    return await this.txReceiptRepository.findOneBy({ transactionHash });
  }
}
