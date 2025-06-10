// import { ChainId } from '@alagunoff/uniswap-sdk-core'
import { SUPPORTED_CHAIN_IDS } from 'constants/addresses'

export function constructSameAddressMap<T extends string>(address: T): { [chainId: number]: T } {
  return {
    ...SUPPORTED_CHAIN_IDS.reduce<{ [chainId: number]: T }>((memo, chainId) => {
      memo[chainId] = address
      return memo
    }, {}),
  }
}
