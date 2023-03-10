import { ThemingProps } from '@chakra-ui/react'
import { mainnet, goerli, sepolia, polygon, optimism, arbitrum } from '@wagmi/chains'

export const SITE_NAME = 'Ethereum Starter'
export const SITE_DESCRIPTION = 'Next.js + Ethereum starter kit deployment'

export const THEME_INITIAL_COLOR = 'system'
export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'gray'
export const THEME_CONFIG = {
  initialColorMode: THEME_INITIAL_COLOR,
}

export const SOCIAL_TWITTER = 'thisisrozel'
export const SOCIAL_GITHUB = 'alenpragma/ethereum-starter'

export const ETH_CHAINS = [mainnet, goerli, sepolia, polygon, optimism, arbitrum]
