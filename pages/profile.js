import Card from '@/app/components/Card';
import Layout from '../app/components/Layout';
import { Avatar } from '@/app/components/Avatar';

export default function Profile() {
  return (
    <Layout>
      <Card noPadding={true}>
        <div className="h-36 overflow-hidden flex justify-center items-center ">
          <img
            src="https://images.unsplash.com/photo-1621878983992-bac95a1e8dd2?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <Avatar size={'lg'} />

        <div className="p-4">Данила Мастер</div>
      </Card>
    </Layout>
  );
}
