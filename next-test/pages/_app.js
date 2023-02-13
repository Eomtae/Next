import '@/styles/main.scss'
import Head from 'next/head'
import {Nav} from '@/pages/Nav'
export default function App({ Component, pageProps }) {
  return (
        <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>
      <Component {...pageProps} />
    </>
  )
}