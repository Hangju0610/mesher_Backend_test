import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BlockLog } from 'src/blocklog/entities/blocklog.entity';

export class TxReceiptResDto {
  @ApiProperty({
    example:
      '0x4def093acfb110eee5ce40509b118908641fec6767067055816caa1b344eff74',
  })
  transactionHash: string;

  @ApiProperty({
    example:
      '0xa867a401819734982840482489c3176ff1e2035e86eecf3bf9fcef0a14bb9e1a',
  })
  blockHash: string;

  @ApiProperty({ example: 18981460 })
  blockNumber: number;

  @ApiProperty({ type: BlockLog, isArray: true })
  blockLog: BlockLog[];

  @ApiProperty({ example: 1 })
  transactionIndex: number;

  @ApiProperty({ example: '0xd9C4434a5294BD82979c73F52D239bb2930F7429' })
  from?: string;

  @ApiProperty({ example: '0x6719C6EbF80d6499Ca9ce170CDa72bEb3f1d1A54' })
  to: string;

  @ApiProperty({ nullable: true, example: null })
  contractAddress?: string;

  @ApiProperty({ example: 2 })
  type: number;

  @ApiPropertyOptional({ example: null, nullable: true })
  root?: string;

  @ApiProperty({ example: '108755' })
  gasUsed: string;

  @ApiProperty({ example: '111881888435' })
  effectiveGasPrice: string;

  @ApiProperty({
    example:
      '0x00200000000000000000000000000000000000001000000000000000000040020000000000000000000000000000010000000000000020000000000000002000000000000000000800000008000000000000000800000000000000000000000000000000002000040000000000000000000800000004000000000010000800000000000000000000000000000000800000000000000000000000000000100000000000000000000000020080000000000000000000000000000000000000000080000002000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000020000000000000000000000',
  })
  logsBloom?: string;

  @ApiProperty({
    description: '아직 미구현',
    example: '111111',
    nullable: true,
  })
  confirmations?: number;

  @ApiProperty({ example: '347637' })
  cumulativeGasUsed: string;

  @ApiProperty({ example: true })
  byzantium: boolean;

  @ApiProperty({ example: 1 })
  status: number;
}
