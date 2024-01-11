import { slackProvider } from './slack.provider';
import { Module } from '@nestjs/common';
import { AlarmService } from './alarm.service';

@Module({
  providers: [slackProvider, AlarmService],
})
export class AlarmModule {}
