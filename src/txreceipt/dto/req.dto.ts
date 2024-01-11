import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TxReqDto {
  @ApiPropertyOptional({
    nullable: true,
    description: 'TransactionHash를 queryString으로 전달받습니다.',
  })
  transactionHash?: string;

  @ApiPropertyOptional({
    nullable: true,
    description: 'from을 받아서 검색합니다.',
  })
  from?: string;

  @ApiPropertyOptional({
    nullable: true,
    description: 'to를 받아서 검색합니다.',
  })
  to?: string;
}

export class TxFromToReqDto {
  @ApiProperty({ nullable: true, description: 'from을 받아서 검색합니다.' })
  from?: string;

  @ApiProperty({ nullable: true, description: 'to를 받아서 검색합니다.' })
  to?: string;
}
