// import { ChainId } from '@alagunoff/uniswap-sdk-core'
import { ChainId } from 'constants/constants'
import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import getLibrary from '../utils/getLibrary'

import { NetworkConnector } from './NetworkConnector'
import { SupportedChainId, SUPPORTED_CHAIN_IDS } from 'constants/addresses'

export const NETWORK_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.POLYGON_AMOY]: 'https://rpc-amoy.polygon.technology',
  [SupportedChainId.BSC_TESTNET]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  [SupportedChainId.BSC]: 'https://bsc-dataseed.binance.org/',
}

export const DEFAULT_CHAIN_ID = ChainId.BSC_TESTNET

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: DEFAULT_CHAIN_ID,
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider))
}

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
})
