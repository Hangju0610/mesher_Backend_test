import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TxHashReqDto {
  @ApiProperty({
    nullable: false,
    description: 'TransactionHash를 queryString으로 전달받습니다.',
  })
  transactionHash: string;
}

export class TxAddressReqDto {
  // 이거 Optional을 안하면 요청 데이터에 Required가 필수로 나온다.
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
