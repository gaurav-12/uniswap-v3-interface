import { Token } from '@alagunoff/uniswap-sdk-core'

export declare enum ChainId {
  POLYGON_AMOY = 80002,
  BSC_TESTNET = 97,
  BSC = 56,
}

export declare const WETH9: {
  [chainId in ChainId]: Token
}
