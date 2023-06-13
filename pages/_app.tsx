import '@/styles/index.scss';
import { Noto_Sans, Caveat_Brush } from 'next/font/google';
import type { AppProps } from 'next/app';

const notoSans = Noto_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const caveatBrush = Caveat_Brush({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --notoSans-font: ${notoSans.style.fontFamily};
          --caveatBrush-font: ${caveatBrush.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
