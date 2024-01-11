import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Block } from 'src/block/entities/block.entity';
import { BlockLog } from 'src/blocklog/entities/blocklog.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class TxReceipt {
  @ApiProperty({
    example:
      '0x4def093acfb110eee5ce40509b118908641fec6767067055816caa1b344eff74',
  })
  @PrimaryColumn()
  transactionHash: string;

  @ManyToOne(() => Block, (block) => block.transactions)
  block: Block;

  @ApiProperty({ type: BlockLog, isArray: true })
  @OneToMany(() => BlockLog, (blockLog) => blockLog.transaction, {
    eager: true,
  })
  blockLog: BlockLog[];

  @ApiProperty({ example: 1 })
  @Column()
  transactionIndex: number;

  @ApiProperty({ example: '0xd9C4434a5294BD82979c73F52D239bb2930F7429' })
  @Column({ nullable: true, default: null })
  from?: string;

  @ApiProperty({ example: '0x6719C6EbF80d6499Ca9ce170CDa72bEb3f1d1A54' })
  @Column()
  to: string;

  @ApiProperty({ nullable: true, example: null })
  @Column({ nullable: true, default: null })
  contractAddress?: string;

  @ApiProperty({ example: 2 })
  @Column()
  type: number;

  @ApiPropertyOptional({ example: null })
  @Column({ nullable: true, default: null })
  root?: string;

  @ApiProperty({ example: '108755' })
  @Column()
  gasUsed: string;

  @ApiProperty({ example: '111881888435' })
  @Column()
  effectiveGasPrice: string;

  @ApiProperty({
    example:
      '0x00200000000000000000000000000000000000001000000000000000000040020000000000000000000000000000010000000000000020000000000000002000000000000000000800000008000000000000000800000000000000000000000000000000002000040000000000000000000800000004000000000010000800000000000000000000000000000000800000000000000000000000000000100000000000000000000000020080000000000000000000000000000000000000000080000002000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000020000000000000000000000',
  })
  @Column()
  logsBloom: string;

  @ApiProperty({ description: '아직 미구현', example: '111111' })
  // Column에서 삭제 진행 후 ? 옵셔널 표기 진행
  // @Column()
  confirmations?: number;

  @ApiProperty({ example: '347637' })
  @Column()
  cumulativeGasUsed: string;

  @ApiProperty({ example: true })
  @Column()
  byzantium: boolean;

  @ApiProperty({ example: 1 })
  @Column()
  status: number;
}
