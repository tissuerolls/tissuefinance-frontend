import { MenuEntry } from '@tissueswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Telegram Announcements',
        href: 'https://t.me/TissueRollsAnnouncement',
      },
      {
        label: 'Docs',
        href: 'https://tissuerolls.gitbook.io/tis/',
      },
    ],
  },
]

export default config
