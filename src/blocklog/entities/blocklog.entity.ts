import { Block } from 'src/block/entities/block.entity';
import { TxReceipt } from 'src/txreceipt/entities/txreceipt.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlockLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  removed?: boolean;

  @Column()
  address: string;

  @Column()
  data: string;

  @Column({ array: true, type: 'string' })
  topics: string[];

  @Column()
  logIndex: number;

  @ManyToOne(() => Block, (block) => block.blockLog)
  block: Block;

  @ManyToOne(() => TxReceipt, (txReceipt) => txReceipt.blockLog)
  transaction: TxReceipt;
}
