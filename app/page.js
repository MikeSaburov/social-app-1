import { NavigationCard } from './components/NavigationCard';
import { PostCard } from './components/PostCard';
import { PostFormCard } from './components/PostFormCard';

export default function Home() {
  return (
    <div className="flex mt-4  max-w-4xl mx-auto gap-4">
      <div className=" w-4/12 ml-1">
        <NavigationCard />
      </div>
      <div className="w-8/12 mr-1">
        <PostFormCard />
        <PostCard />
      </div>
    </div>
  );
}
