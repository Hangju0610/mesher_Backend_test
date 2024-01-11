import { ApiProperty } from '@nestjs/swagger';
import { BlockLog } from 'src/blocklog/entities/blocklog.entity';
import { TxReceipt } from 'src/txreceipt/entities/txreceipt.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Block {
  @ApiProperty({
    description: 'BlockHash',
    example:
      '0xa867a401819734982840482489c3176ff1e2035e86eecf3bf9fcef0a14bb9e1a',
  })
  @PrimaryColumn()
  hash: string;

  @ApiProperty({ description: 'BlockNumber', example: 18981460 })
  @Column()
  number: number;

  @ApiProperty({
    example:
      '0xa3e29fade2c89502aa8befa2a74139357d1f0a191dbea2775591a18d160a95cb',
  })
  @Column()
  parentHash: string;

  @ApiProperty({ example: '1970-01-21 02:35:49.091' })
  @Column()
  timestamp: Date;

  @ApiProperty({ example: '0x0000000000000000' })
  @Column()
  nonce: string;

  @ApiProperty({ example: 0 })
  @Column()
  difficulty: number;

  @ApiProperty({ example: '30000000' })
  @Column()
  gasLimit: string;

  @ApiProperty({ example: '19125726' })
  @Column()
  gasUsed: string;

  @ApiProperty({ example: '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326' })
  @Column()
  miner: string;

  @ApiProperty({ example: '0x7273796e632d6275696c6465722e78797a' })
  @Column()
  extraData: string;

  @ApiProperty({ type: TxReceipt, isArray: true })
  @OneToMany(() => TxReceipt, (txReceipt) => txReceipt.block, {
    eager: true,
  })
  transactions: TxReceipt[];

  // @ApiProperty({ type: BlockLog, isArray: true })
  @OneToMany(() => BlockLog, (blockLog) => blockLog.block)
  blockLog: BlockLog[];
}
