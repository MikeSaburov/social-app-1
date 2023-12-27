import Card from '../components/Card';
import Layout from '../components/Layout';
import { Avatar } from '../components/Avatar';

export default function Profile() {
  return (
    <Layout>
      <Card noPadding={true}>
        <div className="relative overflow-hidden rounded-md">
          <div className="h-36 overflow-hidden flex justify-center items-center ">
            <img
              src="https://images.unsplash.com/photo-1621878983992-bac95a1e8dd2?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="absolute top-24 left-4">
            <Avatar size={'lg'} />
          </div>

          <div className="p-4 pb-24">
            <div className="ml-40">
              <h1 className=" text-3xl font-bold">Данила Мастер</h1>
              <div className="text-gray-500 leading-5">
                Южно-Сахалинск, Россия
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
