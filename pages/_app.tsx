import Layout from '@/components/Layout/Layout'

import '@/styles/reset.css'
import '@/styles/global.css'
import 'antd/dist/reset.css'
import '@/styles/antd.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
