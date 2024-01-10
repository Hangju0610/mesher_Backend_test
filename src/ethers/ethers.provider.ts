import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';
import { InfuraProvider } from '@ethersproject/providers';

export const ethersProvider = {
  provide: 'ETHERS_CLIENT',
  inject: [ConfigService],
  useFactory: (configService: ConfigService): InfuraProvider => {
    const provider = new ethers.providers.InfuraProvider();
    console.log('ethers connected!');
    return provider;
  },
};
