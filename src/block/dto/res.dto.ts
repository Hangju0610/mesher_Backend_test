import { ApiProperty } from '@nestjs/swagger';
import { TxReceipt } from 'src/txreceipt/entities/txreceipt.entity';

export class BlockResDto {
  @ApiProperty({
    description: 'BlockHash',
    example:
      '0xa867a401819734982840482489c3176ff1e2035e86eecf3bf9fcef0a14bb9e1a',
  })
  hash: string;

  @ApiProperty({ description: 'BlockNumber', example: 18981460 })
  number: number;

  @ApiProperty({
    example:
      '0xa3e29fade2c89502aa8befa2a74139357d1f0a191dbea2775591a18d160a95cb',
  })
  parentHash: string;

  @ApiProperty({ example: '1970-01-21 02:35:49.091' })
  timestamp: Date;

  @ApiProperty({ example: '0x0000000000000000' })
  nonce: string;

  @ApiProperty({ example: 0 })
  difficulty: number;

  @ApiProperty({ example: '30000000' })
  gasLimit: string;

  @ApiProperty({ example: '19125726' })
  gasUsed: string;

  @ApiProperty({ example: '0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326' })
  miner: string;

  @ApiProperty({ example: '0x7273796e632d6275696c6465722e78797a' })
  extraData: string;

  @ApiProperty({ type: [TxReceipt], isArray: true })
  transactions: TxReceipt[];
}
