import Layout from '@/components/Layout';
import { PostCard } from '@/components/PostCard';

export default function SavedPostPage() {
  return (
    <Layout>
      <h1>Твои сохраненные посты</h1>
      <PostCard />
      <PostCard />
    </Layout>
  );
}
