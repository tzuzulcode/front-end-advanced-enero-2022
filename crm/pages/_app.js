import '../styles/globals.css'

import {SessionProvider} from "next-auth/react"
import Base from '../components/layout/base'

function MyApp({ Component, pageProps }) {
  return <SessionProvider session={pageProps.session}>
    <Base>
      <Component {...pageProps} />
    </Base>
  </SessionProvider>
}

export default MyApp
