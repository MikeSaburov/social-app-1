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
      .select('id, content, created_at, profiles(id, avatar, name)')
      .order('created_at', { ascending: false })
      .then((res) => {
        setPosts(res.data);
      });
  }, []);

  if (!session) {
    return <LoginPage />;
  }

  return (
    <div>
      <Layout>
        <PostFormCard />
        {posts.map((post) => (
          <PostCard key={post.created_at} {...post} />
        ))}
      </Layout>
    </div>
  );
}
