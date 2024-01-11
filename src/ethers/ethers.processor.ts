import { Inject, OnApplicationBootstrap } from '@nestjs/common';
import { InfuraProvider } from '@ethersproject/providers';
import { InjectRepository } from '@nestjs/typeorm';
import { Block } from 'src/block/entities/block.entity';
import { Repository } from 'typeorm';
import { TxReceipt } from 'src/txreceipt/entities/txreceipt.entity';
import { BlockLog } from 'src/blocklog/entities/blocklog.entity';

/**
 * 블록체인 데이터 조회를 위한 ethers 연결 Providers
 * implements OnApplicationBootstrap
 */
export class EthersProcessor {
  constructor(
    @Inject('ETHERS_CLIENT') private ethersProvider: InfuraProvider,
    @InjectRepository(Block)
    private readonly blockRepository: Repository<Block>,
    @InjectRepository(TxReceipt)
    private readonly txReceiptRepository: Repository<TxReceipt>,
    @InjectRepository(BlockLog)
    private readonly blockLogRepository: Repository<BlockLog>,
  ) {
    this.ethersProvider = ethersProvider;
  }
  // onApplicationBootstrap() {
  //   this.ethersProvider.on('block', async (block) => {
  //     const blockDescription = await this.ethersProvider.getBlock(block);
  //     const txsReceipt = await Promise.all(
  //       blockDescription.transactions.map(async (value) => {
  //         return await this.ethersProvider.getTransactionReceipt(value);
  //       }),
  //     );

  //     await this.blockRepository.save(
  //       this.blockRepository.create({
  //         hash: blockDescription.hash,
  //         parentHash: blockDescription.parentHash,
  //         number: blockDescription.number,
  //         timestamp: new Date(blockDescription.timestamp),
  //         nonce: blockDescription.nonce,
  //         difficulty: blockDescription._difficulty.toNumber(),
  //         gasLimit: blockDescription.gasLimit.toString(),
  //         gasUsed: blockDescription.gasUsed.toString(),
  //         miner: blockDescription.miner,
  //         extraData: blockDescription.extraData,
  //       }),
  //     );

  //     await Promise.all(
  //       txsReceipt.map(async (txReceipt) => {
  //         await this.txReceiptRepository.save(
  //           this.txReceiptRepository.create({
  //             transactionHash: txReceipt.transactionHash,
  //             to: txReceipt.to,
  //             from: txReceipt.from,
  //             contractAddress: txReceipt.contractAddress,
  //             transactionIndex: txReceipt.transactionIndex,
  //             type: txReceipt.type,
  //             root: txReceipt.root,
  //             gasUsed: txReceipt.gasUsed.toString(),
  //             effectiveGasPrice: txReceipt.effectiveGasPrice.toString(),
  //             logsBloom: txReceipt.logsBloom,
  //             cumulativeGasUsed: txReceipt.cumulativeGasUsed.toString(),
  //             byzantium: txReceipt.byzantium,
  //             status: txReceipt.status,
  //             block: {
  //               hash: txReceipt.blockHash,
  //               number: txReceipt.blockNumber,
  //             },
  //           }),
  //         );
  //         if (txReceipt.logs.length !== 0) {
  //           await Promise.all(
  //             txReceipt.logs.map(async (log) => {
  //               await this.blockLogRepository.save(
  //                 this.blockLogRepository.create({
  //                   block: {
  //                     hash: log.blockHash,
  //                     number: log.blockNumber,
  //                   },
  //                   transaction: {
  //                     transactionHash: log.transactionHash,
  //                     transactionIndex: log.transactionIndex,
  //                   },
  //                   removed: log.removed,
  //                   address: log.address,
  //                   data: log.data,
  //                   topics: log.topics,
  //                   logIndex: log.logIndex,
  //                 }),
  //               );
  //             }),
  //           );
  //         }
  //       }),
  //     );
  //     // console.log(
  //     //   await this.ethersProvider.getTransactionReceipt(
  //     //     '0x6294725c039cef14c24d9fe1afd4a2cc0e5052aa67e555e7d98baec4991aa75f',
  //     //   ),
  //     // );

  //     // const provider = new ethers.providers.InfuraProvider();
  //     // console.log(
  //     //   provider.connection.allowGzip == true ? '연결 완료' : '연결 에러!',
  //     // );
  //     // provider.on('block', async (block) => {
  //     //   console.log(await provider.getBlockWithTransactions(block));
  //     // });
  //   });
  // }
  async ethersCheck(): Promise<boolean> {
    try {
      // 서버를 테스트하기 위해 getNetwork 메서드 사용
      this.ethersProvider.getNetwork();
      return true;
    } catch {
      return false;
    }
  }
}
