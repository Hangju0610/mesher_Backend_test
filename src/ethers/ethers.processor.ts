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
      const blockDescription = await this.ethersProvider.getBlock(block);
      const txsReceipt = await Promise.all(
        blockDescription.transactions.map(async (value) => {
          return await this.ethersProvider.getTransactionReceipt(value);
        }),
      );
      // console.log(
      //   await this.ethersProvider.getTransactionReceipt(
      //     '0x6294725c039cef14c24d9fe1afd4a2cc0e5052aa67e555e7d98baec4991aa75f',
      //   ),
      // );

      // const provider = new ethers.providers.InfuraProvider();
      // console.log(
      //   provider.connection.allowGzip == true ? '연결 완료' : '연결 에러!',
      // );
      // provider.on('block', async (block) => {
      //   console.log(await provider.getBlockWithTransactions(block));
      // });
    });
  }
  private async getTxsReceipt() {}
}
