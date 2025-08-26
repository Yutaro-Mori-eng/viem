import { defineChain } from '../../utils/chain/defineChain.js'

export const mocachainTestnet = /*#__PURE__*/ defineChain({
  id: 222_888,
  name: 'Mocachain Testnet',
  nativeCurrency: { name: 'MOCA', symbol: 'MOCA', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://testnet-rpc.mocachain.org'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Moca Chain Scan',
      url: 'https://testnet-scan.mocachain.org',
    },
  },
  testnet: true,
})
