import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import { UserContextProvider } from '@/context/UserContext';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';

export default function SavedPostPage() {
  const [posts, setPosts] = useState([]);
  const session = useSession();
  const supabase = useSupabaseClient();

  useEffect(() => {
    if (!session?.user?.id) {
      return;
    }
    supabase
      .from('saved_posts')
      .select('post_id')
      .eq('user_id', session.user.id)
      .then((res) => {
        const postIds = res.data.map((post) => post.post_id);
        supabase
          .from('posts')
          .select('*, profiles(*)')
          .in('id', postIds)
          .then((res) => {
            setPosts(res.data);
          });
      });
  }, []);

  return (
    <Layout>
      <UserContextProvider>
        <h1 className="text-3xl mb-4 text-gray-400">Твои сохраненные посты</h1>
        {posts.length > 0 &&
          posts.map((post) => (
            <div key={post.id}>
              <PostCard {...post} />
            </div>
          ))}
      </UserContextProvider>
    </Layout>
  );
}
