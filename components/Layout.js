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
        <link rel="icon" href="/icon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&family=Nunito:wght@200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400&display=swap"
          rel="stylesheet"
        ></link>
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
