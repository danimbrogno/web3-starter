import { createConfig } from '@ponder/core';
import { http } from 'viem';

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    // Add your contracts here
    // ExampleContract: {
    //   network: { mainnet: 1 },
    //   address: '0x...',
    //   abi: './abis/ExampleContract.json',
    //   startBlock: 18000000,
    // },
  },
});
