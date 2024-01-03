import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Layout from '../components/Layout';
import { PostCard } from '../components/PostCard';
import { PostFormCard } from '../components/PostFormCard';
import LoginPage from './login';
import { useEffect, useState } from 'react';

export default function Home() {
  const supabase = useSupabaseClient();
  const session = useSession();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    supabase
      .from('posts')
      .select()
      .then((res) => {
        console.log(res);
      });
  }, []);

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
