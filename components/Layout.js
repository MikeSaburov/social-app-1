import { NavigationCard } from './NavigationCard';
import Head from 'next/head';

export default function Layout({ children, hideNavigation }) {
  let rightColumnClasses = '';

  if (hideNavigation) {
    rightColumnClasses += 'w-full';
  } else {
    rightColumnClasses += 'md:w-8/12 lg:w-9/12 md:mx-2 mx-4';
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
      <div className="md:flex mt-4  max-w-4xl mx-auto md:gap-1 lg:gap-4">
        {!hideNavigation && (
          <div className="fixed md:static md:ml-2 w-full bottom-0 -mb-5 md:w-4/12 lg:w-3/12 ">
            <NavigationCard />
          </div>
        )}

        <div className={rightColumnClasses}>{children}</div>
      </div>
    </div>
  );
}
