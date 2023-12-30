import Layout from '../components/Layout';
import { PostCard } from '../components/PostCard';
import { PostFormCard } from '../components/PostFormCard';

export default function Home() {
  return (
    <div>
      <Layout>
        <PostFormCard />
        <PostCard />
      </Layout>
    </div>
  );
}