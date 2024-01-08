import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Layout from '../components/Layout';
import { PostCard } from '../components/PostCard';
import { PostFormCard } from '../components/PostFormCard';
import LoginPage from './login';
import { useEffect, useState } from 'react';
import { UserContext } from '@/context/UserContext';

export default function Home() {
  const supabase = useSupabaseClient();
  const session = useSession();

  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!session?.user?.id) {
      return;
    }
    supabase
      .from('profiles')
      .select()
      .eq('id', session.user.id)
      .then((res) => {
        if (res.data.length) {
          setProfile(res.data[0]);
        }
      });
  }, [session?.user?.id]);

  //Получение всех постов с БД
  function fetchPosts() {
    supabase
      .from('posts')
      .select('id, content, created_at, photos profiles(id, avatar, name)')
      .order('created_at', { ascending: false })
      .then((res) => {
        setPosts(res.data);
      });
  }

  if (!session) {
    return <LoginPage />;
  }

  return (
    <Layout>
      <UserContext.Provider value={{ profile }}>
        <PostFormCard onPost={fetchPosts} />
        {posts?.length > 0 &&
          posts.map((post) => <PostCard key={post.id} {...post} />)}
      </UserContext.Provider>
    </Layout>
  );
}
