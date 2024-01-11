import { HttpException, HttpStatus } from '@nestjs/common';

export class UnCatchedException extends HttpException {
  constructor(message: string, stack: string) {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR);
    this.stack = stack;
  }
  stack: string;
}
