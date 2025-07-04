// a list of tokens by chain
import { Token } from '@alagunoff/uniswap-sdk-core'
import { ChainId } from 'constants/constants'
import { METALAMP, USDT, USDC, WBTC, WETH9 } from './tokens'

type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

const WETH_ONLY: ChainTokenList = {
  [ChainId.POLYGON_AMOY]: [WETH9[ChainId.POLYGON_AMOY]],
  [ChainId.BSC_TESTNET]: [WETH9[ChainId.BSC_TESTNET]],
  [ChainId.BSC]: [WETH9[ChainId.BSC]],
}
// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.POLYGON_AMOY]: [
    ...WETH_ONLY[ChainId.POLYGON_AMOY],
    METALAMP[ChainId.POLYGON_AMOY],
    USDC[ChainId.POLYGON_AMOY],
    USDT[ChainId.POLYGON_AMOY],
    WBTC[ChainId.POLYGON_AMOY],
  ],
  [ChainId.BSC_TESTNET]: [
    ...WETH_ONLY[ChainId.BSC_TESTNET],
    METALAMP[ChainId.BSC_TESTNET],
    USDC[ChainId.BSC_TESTNET],
    USDT[ChainId.BSC_TESTNET],
    WBTC[ChainId.BSC_TESTNET],
  ],
  [ChainId.BSC]: [
    ...WETH_ONLY[ChainId.BSC],
    METALAMP[ChainId.BSC],
    USDC[ChainId.BSC],
    USDT[ChainId.BSC],
    WBTC[ChainId.BSC],
  ],
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: Partial<ChainTokenList> = {
  [ChainId.POLYGON_AMOY]: [METALAMP[ChainId.POLYGON_AMOY], USDT[ChainId.POLYGON_AMOY]],
  [ChainId.BSC_TESTNET]: [METALAMP[ChainId.BSC_TESTNET], USDT[ChainId.BSC_TESTNET]],
  [ChainId.BSC]: [METALAMP[ChainId.BSC], USDT[ChainId.BSC]],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
}
