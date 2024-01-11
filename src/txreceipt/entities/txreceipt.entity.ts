import { Block } from 'src/block/entities/block.entity';
import { BlockLog } from 'src/blocklog/entities/blocklog.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class TxReceipt {
  @PrimaryColumn({ type: 'string' })
  transactionHash: string;

  @ManyToOne(() => Block, (block) => block.transactions)
  block: Block;

  @OneToMany(() => BlockLog, (blockLog) => blockLog.transaction)
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

  @Column()
  confirmations: number;

  @Column()
  cumulativeGasUsed: string;

  @Column()
  byzantium: boolean;

  @Column()
  status: number;
}
