import { BlockLog } from 'src/blocklog/entities/blocklog.entity';
import { TxReceipt } from 'src/txreceipt/entities/txreceipt.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Block {
  @PrimaryColumn()
  hash: string;

  @Column()
  number: number;

  @Column()
  parentHash: string;

  @Column()
  timestamp: Date;

  @Column()
  nonce: string;

  @Column()
  difficulty: number;

  @Column()
  gasLimit: string;

  @Column()
  gasUsed: string;

  @Column()
  miner: string;

  @Column()
  extraData: string;

  @OneToMany(() => TxReceipt, (txReceipt) => txReceipt.block, {
    eager: true,
  })
  transactions: TxReceipt[];

  @OneToMany(() => BlockLog, (blockLog) => blockLog.block)
  blockLog: BlockLog[];
}
