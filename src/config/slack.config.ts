import { registerAs } from '@nestjs/config';

export default registerAs('slack', () => ({
  webHook: process.env.SLACK_WEBHOOK,
}));
