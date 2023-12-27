import { NavigationCard } from './NavigationCard';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Social APP</title>
        <meta
          name="description"
          content="Social media website using React, Tailwind, Next, HTML, and CSS"
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="flex mt-4  max-w-4xl mx-auto gap-4">
        <div className=" w-3/12 ml-1">
          <NavigationCard />
        </div>
        <div className="w-9/12 mr-1">{children}</div>
      </div>
    </div>
  );
}
