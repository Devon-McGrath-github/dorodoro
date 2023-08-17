import NavBar from '@/components/NavBar/NavBar';
import Timer from '@/components/Timer';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <Head>
          <title> DoroDoro </title>
          <meta property="og:title" content="My page title" key="title" />
        </Head>
        <NavBar />
        <Timer duration={1500} />
        <Timer duration={900} />
        <Timer duration={300} />
      </div>
    </main>
  );
}
