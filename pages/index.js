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
    fetchPosts();
  }, []);

  //Получение всех постов с БД
  function fetchPosts() {
    supabase
      .from('posts')
      .select('id, content, created_at, profiles(id, avatar, name)')
      .order('created_at', { ascending: false })
      .then((res) => {
        setPosts(res.data);
      });
  }

  if (!session) {
    return <LoginPage />;
  }

  console.log(posts);

  return (
    <div>
      <Layout>
        <PostFormCard onPost={fetchPosts} />
        {posts?.length > 0 &&
          posts.map((post) => <PostCard key={post.id} {...post} />)}
      </Layout>
    </div>
  );
}
