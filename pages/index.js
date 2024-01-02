import { useSession } from '@supabase/auth-helpers-react';
import Layout from '../components/Layout';
import { PostCard } from '../components/PostCard';
import { PostFormCard } from '../components/PostFormCard';

export default function Home() {
  const session = useSession();
  return (
    <div>
      <Layout>
        <PostFormCard />
        <PostCard />
      </Layout>
    </div>
  );
}
