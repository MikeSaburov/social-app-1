import Layout from '@/components/Layout';
import { PostCard } from '@/components/PostCard';
import { useState } from 'react';

export default function SavedPostPage() {
  const [posts, setPosts] = useState([]);

  return (
    <Layout>
      <h1 className="text-3xl mb-4 text-gray-400">Твои сохраненные посты</h1>
    </Layout>
  );
}
