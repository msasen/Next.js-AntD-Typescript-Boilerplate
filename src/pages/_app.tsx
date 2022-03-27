import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@store/index'
 import '../styles/global.less'

function MyApp({ Component, pageProps }: AppProps) {
  // const defaultLocale = navigator.language

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
