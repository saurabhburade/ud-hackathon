import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";


 
function MyApp({ Component, pageProps }: AppProps) {
    const POLLING_INTERVAL = 12000;
    const { library } = useWeb3React();
    const getLibrary = (provider) => {
      // console.log({ provider })

      // const library = new Web3Provider(provider)
      // library.pollingInterval = POLLING_INTERVAL
      //  const _lib =   new Web3(provider)
      return provider;
    };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider attribute="class">
        {" "}
        <Component {...pageProps} />
      </ThemeProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
