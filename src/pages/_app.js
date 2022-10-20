import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import ProgressBar from '@badrap/bar-of-progress';
import { Router } from 'next/router';


const progress = new ProgressBar({
  delay:100,
  className:"z-50",
  size:4,
  color:"#FE595E"
})

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);


const MyApp = ({ Component, pageProps }) => {
  return (
<SessionProvider session={pageProps.session}>
<Provider store={store}>
    <Component {...pageProps} />
      </Provider>
</SessionProvider>
      
  
  )
}

export default MyApp
