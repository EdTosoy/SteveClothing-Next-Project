import "../styles/globals.css";

import "tailwindcss/tailwind.css";
// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import { AuthProvider } from "../lib/auth";
import { useApollo } from "../lib/apolloClient";
import Head from "next/head";
import React from "react";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />;
  </Head>;
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;