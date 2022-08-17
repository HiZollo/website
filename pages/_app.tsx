import '@/styles/globals.css'
import Layout from '@/components/main';
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#A7B5D7"
        height={3}
        showOnShallow={true}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
