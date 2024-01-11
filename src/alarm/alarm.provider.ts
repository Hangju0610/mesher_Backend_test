import { ConfigService } from '@nestjs/config';
import { IncomingWebhook } from '@slack/webhook';

export const slackProvider = {
  provide: 'SLACK',
  inject: [ConfigService],
  useFactory: (configService: ConfigService): IncomingWebhook => {
    const SlackWebHook = new IncomingWebhook(
      configService.get('slack.webhook'),
    );
    console.log('Slack 연결 완료!');
    return SlackWebHook;
  },
};
