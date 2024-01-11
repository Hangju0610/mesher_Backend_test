import { Test, TestingModule } from '@nestjs/testing';
import { BlockLogService } from './blocklog.service';

describe('BlocklogService', () => {
  let service: BlockLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlockLogService],
    }).compile();

    service = module.get<BlockLogService>(BlockLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
