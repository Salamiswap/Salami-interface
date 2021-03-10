import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://salamiswap.xyz/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://salamiswap.xyz/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://salamiswap.xyz/syrup'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pancakeswap.info'
      },
      {
        label: 'Tokens',
        href: 'https://pancakeswap.info/tokens'
      },
      {
        label: 'Pairs',
        href: 'https://pancakeswap.info/pairs'
      },
      {
        label: 'Accounts',
        href: 'https://pancakeswap.info/accounts'
      }
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap'
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com'
      }
    ]
  }
]

export default config
