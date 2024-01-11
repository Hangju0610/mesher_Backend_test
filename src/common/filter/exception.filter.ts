import { IncomingWebhook } from '@slack/webhook';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { response } from 'express';
import { UnCatchedException } from '../exceptions/uncatched.exceptions';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptions implements ExceptionFilter {
  constructor(
    @Inject('SLACK') private readonly slackWebHook: IncomingWebhook,
    private readonly httpAdapterHost: HttpAdapterHost,
  ) {}
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const res =
      exception instanceof HttpException
        ? exception
        : new UnCatchedException(exception.message, exception.stack);

    this.slackWebHook.send({
      attachments: [
        {
          fields: [
            {
              title: '서버 에러 발생!',
              value: `${res.stack}`,
            },
          ],
        },
      ],
    });
    response.status(res.getStatus()).json({
      message: res.message,
      statusCode: res.getStatus(),
      name: res.name,
    });
  }
}
