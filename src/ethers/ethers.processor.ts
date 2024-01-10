import { Inject, OnApplicationBootstrap } from '@nestjs/common';
import { InfuraProvider } from '@ethersproject/providers';

/**
 * 블록체인 데이터 조회를 위한 ethers 연결 Providers
 */
export class EthersProcessor implements OnApplicationBootstrap {
  constructor(@Inject('ETHERS_CLIENT') private ethersProvider: InfuraProvider) {
    this.ethersProvider = ethersProvider;
  }
  onApplicationBootstrap() {
    this.ethersProvider.on('block', async (block) => {
      console.log(await this.ethersProvider.getBlockWithTransactions(block));
    });
    // const provider = new ethers.providers.InfuraProvider();
    // console.log(
    //   provider.connection.allowGzip == true ? '연결 완료' : '연결 에러!',
    // );
    // provider.on('block', async (block) => {
    //   console.log(await provider.getBlockWithTransactions(block));
    // });
  }
}
