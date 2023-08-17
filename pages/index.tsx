import NavBar from '@/components/NavBar/NavBar';
import Timer from '@/components/Timer';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <p>{count}</p>
        <Head>
          <title> {count} </title>
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
