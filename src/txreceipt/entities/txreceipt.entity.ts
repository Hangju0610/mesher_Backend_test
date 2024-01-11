import { Block } from 'src/block/entities/block.entity';
import { BlockLog } from 'src/blocklog/entities/blocklog.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class TxReceipt {
  @PrimaryColumn()
  transactionHash: string;

  @ManyToOne(() => Block, (block) => block.transactions)
  block: Block;

  @OneToMany(() => BlockLog, (blockLog) => blockLog.transaction, {
    eager: true,
  })
  blockLog: BlockLog[];

  @Column()
  transactionIndex: number;

  @Column({ nullable: true, default: null })
  from?: string;

  @Column()
  to: string;

  @Column({ nullable: true, default: null })
  contractAddress?: string;

  @Column()
  type: number;

  @Column({ nullable: true, default: null })
  root?: string;

  @Column()
  gasUsed: string;

  @Column()
  effectiveGasPrice: string;

  @Column()
  logsBloom: string;

  // Column에서 삭제 진행 후 ? 옵셔널 표기 진행
  // @Column()
  confirmations?: number;

  @Column()
  cumulativeGasUsed: string;

  @Column()
  byzantium: boolean;

  @Column()
  status: number;
}
