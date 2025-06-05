// import { ChainId } from '@alagunoff/uniswap-sdk-core'
import { ChainId } from 'constants/constants'

export function constructSameAddressMap<T extends string>(
  address: T,
  additionalNetworks: ChainId[] = []
): { [chainId: number]: T } {
  return {
    [ChainId.POLYGON_AMOY]: address,
    ...additionalNetworks.reduce<{ [chainId: number]: T }>((memo, chainId) => {
      memo[chainId] = address
      return memo
    }, {}),
  }
}
