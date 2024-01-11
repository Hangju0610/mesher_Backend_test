import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TxReceipt } from './entities/txreceipt.entity';
import { Repository } from 'typeorm';
import { TxReceiptResDto } from './dto/res.dto';

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
  async findReceiptByHash(transactionHash: string): Promise<TxReceiptResDto> {
    const a = await this.txReceiptRepository.findOne({
      where: { transactionHash },
      relations: { block: true },
      select: {
        block: {
          hash: true,
          number: true,
        },
      },
    });
    return {
      blockHash: a.block.hash,
      blockNumber: a.block.number,
      ...a,
    };
  }
}
