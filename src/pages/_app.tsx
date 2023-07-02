import '@/styles/globals.css'
import Starlight from '@starlightcms/next-sdk'
import type { AppProps } from 'next/app'

/**
 * This is the only required step to set up the Starlight SDK.
 */
Starlight.configure({
  workspace: String(process.env.NEXT_APP_STARLIGHT_WORKSPACE_ID),
  baseUrl: 'https://query.starlightcms.io/v2'
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
