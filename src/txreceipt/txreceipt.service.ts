import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    const txReceipt = await this.txReceiptRepository.findOne({
      where: { transactionHash },
      relations: { block: true },
      select: {
        block: {
          hash: true,
          number: true,
        },
      },
    });
    if (!txReceipt) {
      throw new NotFoundException('조회된 데이터가 없습니다.');
    }
    return {
      blockHash: txReceipt.block.hash,
      blockNumber: txReceipt.block.number,
      ...txReceipt,
    };
  }

  /**
   * address 주소를 통해 찾는 메서드입니다. from 혹은 to를 입력해주어야 합니다.
   * 검색 조건이 없는 경우, 에러를 반환합니다.
   * @param from fromHash
   * @param to toHash
   * @returns
   */
  async findReceiptByAddress(
    from?: string,
    to?: string,
  ): Promise<TxReceiptResDto[]> {
    if (!from && !to) {
      throw new BadRequestException('검색 조건을 입력해주세요.');
    }
    const whereCondition = from ? { from } : { to };
    const txReceipts = await this.txReceiptRepository.find({
      where: whereCondition,
      relations: { block: true },
      select: {
        block: {
          hash: true,
          number: true,
        },
      },
    });
    return txReceipts.map((txReceipt) => {
      return {
        blockHash: txReceipt.block.hash,
        blockNumber: txReceipt.block.number,
        ...txReceipt,
      };
    });
  }

  /**
   * Receipt의 개수를 확인하기 위한 메서드
   * @returns TxsReceiptCount
   */
  async countTxReceipts(): Promise<number> {
    return await this.txReceiptRepository.count();
  }
}
