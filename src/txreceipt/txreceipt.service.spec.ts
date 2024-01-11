import { Test, TestingModule } from '@nestjs/testing';
import { TxReceiptService } from './txreceipt.service';

describe('TxreceiptService', () => {
  let service: TxReceiptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TxReceiptService],
    }).compile();

    service = module.get<TxReceiptService>(TxReceiptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
