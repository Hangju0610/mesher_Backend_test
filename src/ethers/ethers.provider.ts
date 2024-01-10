import { OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { ethers } from 'ethers';
/**
 * 블록체인 데이터 조회를 위한 ethers 연결 Providers
 */
export class ethersProvider implements OnApplicationBootstrap {
  onApplicationBootstrap() {
    const provider = new ethers.providers.InfuraProvider();
    console.log(
      provider.connection.allowGzip == true ? '연결 완료' : '연결 에러!',
    );
    provider.on('block', async (block) => {
      console.log(await provider.getBlockWithTransactions(block));
    });
  }
}
