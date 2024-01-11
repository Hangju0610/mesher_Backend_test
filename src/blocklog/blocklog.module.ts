import { Module } from '@nestjs/common';
import { BlockLogService } from './blocklog.service';

@Module({
  providers: [BlockLogService],
})
export class BlockLogModule {}
