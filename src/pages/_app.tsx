import Layout from '@/components/layout';
import '@/assets/css/globals.css';
import { 
  ThirdwebProvider, 
  metamaskWallet,
  coinbaseWallet, } from "@thirdweb-dev/react";
//import Mumbai  from "@thirdweb-dev/chains";
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store, { RootState } from '@/app/store';

type AppOwnProps = { example: string }
 
export default function MyApp({
  Component,
  pageProps,
  example,
}: AppProps & AppOwnProps) {
  return (
    <>
      <Provider store={store}>
        <ThirdwebProvider 
          activeChain={"mumbai"}
          clientId="76d52242f5c4eacdf3b7ef104005365f"
          supportedWallets={[metamaskWallet(), coinbaseWallet()]}
          dAppMeta={{
            name: "Emerald",
            description: "Crypto Luxury for everyone",
            logoUrl: "https://example.com/logo.png",
            url: "https://example.com",
            isDarkMode: true,
          }}
          >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThirdwebProvider>
      </Provider>
    </>
  )
}
 
MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, example: 'data' }
}