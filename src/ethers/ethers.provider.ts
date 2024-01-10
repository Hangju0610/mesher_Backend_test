import { OnModuleInit } from '@nestjs/common';
import { ethers } from 'ethers';
/**
 * 블록체인 데이터 조회를 위한 ethers 연결 Providers
 */
export class ethersProvider implements OnModuleInit {
  onModuleInit() {
    const provider = new ethers.providers.InfuraProvider();
    console.log(
      provider.connection.allowGzip == true ? '연결 완료' : '연결 에러!',
    );
    provider.on('block', (block) => {
      console.log(block);
    });
  }
}
