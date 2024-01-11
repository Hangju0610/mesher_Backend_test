import { ConfigService } from '@nestjs/config';
import { IncomingWebhook } from '@slack/webhook';

export const slackProvider = {
  provide: 'SLACK',
  inject: [ConfigService],
  useFactory: (configService: ConfigService): IncomingWebhook => {
    console.log(configService.get('slack.webHook'));
    const SlackWebHook = new IncomingWebhook(
      configService.get('slack.webHook'),
    );
    console.log('Slack 연결 완료!');
    return SlackWebHook;
  },
};
