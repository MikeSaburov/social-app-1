import { useSession } from '@supabase/auth-helpers-react';
import Layout from '../components/Layout';
import { PostCard } from '../components/PostCard';
import { PostFormCard } from '../components/PostFormCard';
import LoginPage from './login';

export default function Home() {
  const session = useSession();

  if (!session) {
    return <LoginPage />;
  }

  return (
    <div>
      <Layout>
        <PostFormCard />
        <PostCard />
      </Layout>
    </div>
  );
}
