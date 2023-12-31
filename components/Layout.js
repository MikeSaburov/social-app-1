import { NavigationCard } from './NavigationCard';
import Head from 'next/head';

export default function Layout({ children, hideNavigation }) {
  let rightColumnClasses = '';

  if (hideNavigation) {
    rightColumnClasses += 'w-full';
  } else {
    rightColumnClasses += 'md:w-9/12 md:mx-2 mx-4';
  }

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
      <div className="md:flex mt-4  max-w-4xl mx-auto gap-4">
        {!hideNavigation && (
          <div className=" w-3/12 ml-1">
            <NavigationCard />
          </div>
        )}

        <div className={rightColumnClasses}>{children}</div>
      </div>
    </div>
  );
}
