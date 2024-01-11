import { Module } from '@nestjs/common';
import { BlockLogService } from './blocklog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockLog } from './entities/blocklog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlockLog])],
  providers: [BlockLogService],
})
export class BlockLogModule {}
