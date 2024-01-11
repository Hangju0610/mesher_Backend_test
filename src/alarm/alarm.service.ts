import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AlarmService {
  @Cron(CronExpression.EVERY_5_MINUTES)
  sendDBData(): void {}

  @Cron(CronExpression.EVERY_HOUR)
  healthCheck(): void {}
}
