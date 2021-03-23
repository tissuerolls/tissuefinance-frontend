import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 9,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ROLL',
    lpAddresses: {
      97: '0x1868eD40FeD85678Ac0cC0Cf6b962959b327b2a3',
      56: '0x537976285A8a06046Fc040BB05354b3C44287f48',
    },
    tokenSymbol: 'ROLL',
    tokenAddresses: {
      97: '0x1868eD40FeD85678Ac0cC0Cf6b962959b327b2a3',
      56: '0x72ebB40B22fFbc1e181351bF6c71EBCe68657ED4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '0xb4Fe01432dCa4e769876054d1e31Ff61FA59540B',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xb4Fe01432dCa4e769876054d1e31Ff61FA59540B',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x2A163Ea4f4A72ADd64E69FA5bcD34D765f8F8b5C',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0x2A163Ea4f4A72ADd64E69FA5bcD34D765f8F8b5C',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '0xc7F5cfF49577717dc4f4823De417b054Fbd0eB41',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xc7F5cfF49577717dc4f4823De417b054Fbd0eB41',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 0,
    risk: 3,
    lpSymbol: 'ROLL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xf6a39c9f330bd7827212b13d85c906f711660590',
    },
    tokenSymbol: 'ROLL',
    tokenAddresses: {
      97: '',
      56: '0x72ebB40B22fFbc1e181351bF6c71EBCe68657ED4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'ROLL-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x537976285A8a06046Fc040BB05354b3C44287f48',
    },
    tokenSymbol: 'ROLL',
    tokenAddresses: {
      97: '',
      56: '0x72ebB40B22fFbc1e181351bF6c71EBCe68657ED4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
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
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 3,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 3,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]
export default farms
