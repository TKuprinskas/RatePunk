import Head from 'next/head';
import Navbar from '@/components/navbar/navbar';

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name='description' content='Page not found' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The webpage you are looking for does not exist.</p>
      </div>
    </>
  );
};

export default NotFound;
