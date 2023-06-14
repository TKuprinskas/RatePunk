import Head from 'next/head';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/navbar';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>RatePunk</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
    </>
  );
};

export default Home;
