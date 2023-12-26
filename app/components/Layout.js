import { NavigationCard } from './NavigationCard';

export default function Layout({ children }) {
  return (
    <div className="flex mt-4  max-w-4xl mx-auto gap-4">
      <div className=" w-3/12 ml-1">
        <NavigationCard />
      </div>
      <div className="w-9/12 mr-1">{children}</div>
    </div>
  );
}
