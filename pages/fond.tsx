import Head from 'next/head';
import Header from '../src/components/Header';
import Fond from '../src/components/Fond';
import { Container } from '@mui/material';

export default function FondPage() {
  return (
    <>
      <Head>
        <title>Social Model</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container style={{ marginTop: 100, maxWidth: '40%' }}>
        <Header/>
        <Fond/>
      </Container>
    </>
  )
}
