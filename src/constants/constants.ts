import { Token } from '@alagunoff/uniswap-sdk-core'

export declare enum ChainId {
  POLYGON_AMOY = 80002,
}

export declare const WETH9: {
  [chainId in ChainId]: Token
}
