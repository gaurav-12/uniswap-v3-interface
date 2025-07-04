import { Token } from '@alagunoff/uniswap-sdk-core'
import { ChainId } from 'constants/constants'

export const METALAMP = {
  [ChainId.POLYGON_AMOY]: new Token(
    ChainId.POLYGON_AMOY,
    '0x9d88cEdB5E1E7B09Df99e70580Fd36253Cd0690D',
    18,
    'METALAMP',
    'MetaLamp fun'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0x24Cf288aB45176d051700eb44C452D29E7988556',
    18,
    'METALAMP',
    'MetaLamp fun'
  ),
  [ChainId.BSC]: new Token(ChainId.BSC, '0x9d88cEdB5E1E7B09Df99e70580Fd36253Cd0690D', 18, 'METALAMP', 'MetaLamp fun'),
}
export const BNB = {
  [ChainId.POLYGON_AMOY]: new Token(
    ChainId.POLYGON_AMOY,
    '0xF61C6c1F4866C1296E2d239e9AEb20036272C3DD',
    18,
    'BNB',
    'BNB'
  ),
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, '0xDaedED73203C1fd21bf0c06B4e7ad567145d42BD', 18, 'BNB', 'BNB'),
  [ChainId.BSC]: new Token(ChainId.BSC, '0xF61C6c1F4866C1296E2d239e9AEb20036272C3DD', 18, 'BNB', 'BNB'),
}
export const USDT = {
  [ChainId.POLYGON_AMOY]: new Token(
    ChainId.POLYGON_AMOY,
    '0xF0602a35Fd6895bd62cDB4158BaC82689490afCE',
    6,
    'USDT',
    'Tether'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0x09F3eB025626c6daF179AFfB5Ae1Ab70aA338C3e',
    6,
    'USDT',
    'Tether'
  ),
  [ChainId.BSC]: new Token(ChainId.BSC, '0xF0602a35Fd6895bd62cDB4158BaC82689490afCE', 6, 'USDT', 'Tether'),
}
export const USDC = {
  [ChainId.POLYGON_AMOY]: new Token(
    ChainId.POLYGON_AMOY,
    '0x24BD3A3EeabC51f11Ff724F4D0ed4b52569952c2',
    6,
    'USDC',
    'USDC'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0xf3a1DB30Dcc7F835e932c849DdAEE97a74702056',
    6,
    'USDC',
    'USDC'
  ),
  [ChainId.BSC]: new Token(ChainId.BSC, '0x24BD3A3EeabC51f11Ff724F4D0ed4b52569952c2', 6, 'USDC', 'USDC'),
}
export const WBTC = {
  [ChainId.POLYGON_AMOY]: new Token(
    ChainId.POLYGON_AMOY,
    '0xDcaA4611e721ce9a06D568A0E45dfbBA161A28BA',
    8,
    'WBTC',
    'Wrapped Bitcoin'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0x7f0B7dEA6d05955303d3C12c2012c86e4f11aD75',
    8,
    'WBTC',
    'Wrapped Bitcoin'
  ),
  [ChainId.BSC]: new Token(ChainId.BSC, '0xDcaA4611e721ce9a06D568A0E45dfbBA161A28BA', 8, 'WBTC', 'Wrapped Bitcoin'),
}
export const SHIB = {
  [ChainId.POLYGON_AMOY]: new Token(
    ChainId.POLYGON_AMOY,
    '0x36fE2Bdb44f043034cb45A83C514a93a50b10489',
    18,
    'SHIB',
    'Shiba Inu'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0xf1EC19c1512E1664A5625168B22A9087fB75B1a9',
    18,
    'SHIB',
    'Shiba Inu'
  ),
  [ChainId.BSC]: new Token(ChainId.BSC, '0x36fE2Bdb44f043034cb45A83C514a93a50b10489', 18, 'SHIB', 'Shiba Inu'),
}
export const WETH9: { [chainId in ChainId]: Token } = {
  [ChainId.POLYGON_AMOY]: new Token(
    ChainId.POLYGON_AMOY,
    '0x79e79007884269CBd7F8022Ac738116f79A2eaE9',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0xA4E506F6d441E8DAaB68298dd865f8516cAc97e9',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.BSC]: new Token(ChainId.BSC, '0x4DB5a66E937A9F4473fA95b1cAF1d1E1D62E29EA', 18, 'WETH', 'Wrapped Ether'),
}
