import { ApiProperty } from '@nestjs/swagger';

export class BlockHashReqDto {
  @ApiProperty({
    example:
      '0xa867a401819734982840482489c3176ff1e2035e86eecf3bf9fcef0a14bb9e1a',
  })
  hash: string;
}
