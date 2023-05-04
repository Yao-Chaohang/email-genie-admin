import '@/styles/reset.css'
import '@/styles/global.css'
import 'antd/dist/reset.css'
import '@/styles/antd.scss'
import type { AppProps } from 'next/app'

import Layout from '@/components/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
