import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'YFBK2-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
    },
    tokenSymbol: 'YFBK2',
    tokenAddresses: {
      97: '',
      56: '0x55611cfF96F5D149fC6ccc25D2336De716d98C4a',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'YFBK2-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
    },
    tokenSymbol: 'YFBK2',
    tokenAddresses: {
      97: '',
      56: '0x55611cfF96F5D149fC6ccc25D2336De716d98C4a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },


  {
    pid: 12,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'YFBK2',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // YFBK2-BUSD LP
    },
    tokenSymbol: 'YFBK2',
    tokenAddresses: {
      97: '',
      56: '0x55611cfF96F5D149fC6ccc25D2336De716d98C4a',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
