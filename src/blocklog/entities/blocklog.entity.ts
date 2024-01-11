import { ApiProperty } from '@nestjs/swagger';
import { Block } from 'src/block/entities/block.entity';
import { TxReceipt } from 'src/txreceipt/entities/txreceipt.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlockLog {
  @ApiProperty({ description: 'DB에 저장되기 위해 지정한 PK', example: 13 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: false })
  @Column({ default: false })
  removed?: boolean;

  @ApiProperty({ example: '0xa6422E3E219ee6d4C1B18895275FE43556fd50eD' })
  @Column()
  address: string;

  @ApiProperty({
    example:
      '0x00000000000000000000000000000000000000000000033d4b40eb81dcfdfa50',
  })
  @Column()
  data: string;

  @ApiProperty({
    isArray: true,
    example: [
      '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
      '0x000000000000000000000000390a4d096ba2cc450e73b3113f562be949127ceb',
      '0x00000000000000000000000013307b8854a95946b54a904100afd0767a7a577b',
    ],
  })
  @Column({ type: 'text', array: true })
  topics: string[];

  @ApiProperty({ example: 9 })
  @Column()
  logIndex: number;

  @ManyToOne(() => Block, (block) => block.blockLog)
  block: Block;

  @ManyToOne(() => TxReceipt, (txReceipt) => txReceipt.blockLog)
  transaction: TxReceipt;
}
