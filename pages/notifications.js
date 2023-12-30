import { Avatar } from '@/components/Avatar';
import Card from '@/components/Card';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Notifications() {
  return (
    <Layout>
      <h1 className="text-3xl mb-4 text-gray-400">Уведомления</h1>
      <Card noPadding={true}>
        <div className="flex gap-2 items-center border-b border-b-gray-100 p-4">
          <Link
            href="/profile"
            className="hover:scale-125 transition ease-in cursor-pointer"
          >
            <Avatar />
          </Link>

          <div className="text-sm">
            <Link
              href="/profile"
              className="font-semibold hover:underline mr-1"
            >
              Данила Мастер
            </Link>
            лайкнул
            <Link href="" className="text-socialBlue hover:underline ml-1">
              твое фото
            </Link>
          </div>
        </div>
        <div className="flex gap-2 items-center border-b border-b-gray-100 p-4">
          <Link
            href="/profile"
            className="hover:scale-125 transition ease-in cursor-pointer"
          >
            <Avatar />
          </Link>

          <div className="text-sm">
            <Link
              href="/profile"
              className="font-semibold hover:underline mr-1"
            >
              Данила Мастер
            </Link>
            лайкнул
            <Link href="" className="text-socialBlue hover:underline ml-1">
              твое фото
            </Link>
          </div>
        </div>
        <div className="flex gap-2 items-center border-b border-b-gray-100 p-4">
          <Link
            href="/profile"
            className="hover:scale-125 transition ease-in cursor-pointer"
          >
            <Avatar />
          </Link>

          <div className="text-sm">
            <Link
              href="/profile"
              className="font-semibold hover:underline mr-1"
            >
              Данила Мастер
            </Link>
            лайкнул
            <Link href="" className="text-socialBlue hover:underline ml-1">
              твое фото
            </Link>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
