import { Test, TestingModule } from '@nestjs/testing';
import { TxReceiptController } from './txreceipt.controller';

describe('TxReceiptController', () => {
  let controller: TxReceiptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TxReceiptController],
    }).compile();

    controller = module.get<TxReceiptController>(TxReceiptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
