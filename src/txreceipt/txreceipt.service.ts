import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TxReceipt } from './entities/txreceipt.entity';
import { Repository } from 'typeorm';
import { TxReceiptResDto } from './dto/res.dto';
import { NotFoundError } from 'rxjs';

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
    const TxReceipt = await this.txReceiptRepository.findOne({
      where: { transactionHash },
      relations: { block: true },
      select: {
        block: {
          hash: true,
          number: true,
        },
      },
    });
    if (!TxReceipt) {
      throw new NotFoundException('조회된 데이터가 없습니다.');
    }
    return {
      blockHash: TxReceipt.block.hash,
      blockNumber: TxReceipt.block.number,
      ...TxReceipt,
    };
  }

  async findReceiptByFromOrTo(
    from?: string,
    to?: string,
  ): Promise<TxReceiptResDto> {
    const whereCondition = from ? { from } : { to };
    const TxReceipt = await this.txReceiptRepository.findOne({
      where: whereCondition,
      relations: { block: true },
      select: {
        block: {
          hash: true,
          number: true,
        },
      },
    });
    if (!TxReceipt) {
      throw new NotFoundException('조회된 데이터가 없습니다.');
    }
    return {
      blockHash: TxReceipt.block.hash,
      blockNumber: TxReceipt.block.number,
      ...TxReceipt,
    };
  }

  async countTxReceipts(): Promise<number> {
    return await this.txReceiptRepository.count();
  }
}
