import Card from '../components/Card';
import Layout from '../components/Layout';
import { Avatar } from '../components/Avatar';
import Link from 'next/link';
import { PostCard } from '@/components/PostCard';
import { useRouter } from 'next/router';
import { FriendsInfo } from '@/components/FriendsInfo';

export default function ProfilePage() {
  const router = useRouter();
  const { asPath: pathname } = router;
  const isPosts = pathname.includes('posts') || pathname === '/profile';
  const isAbout = pathname.includes('about');
  const isFriends = pathname.includes('friends');
  const isPhotos = pathname.includes('photos');

  const tabClasses =
    'flex gap-1 px-2 py-1 items-center border-b-4 border-b-white';
  const activeTabClasses =
    'flex gap-1 px-2 py-1 items-center border-socialBlue border-b-4 text-socialBlue font-bold';

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

          <div className="py-1 px-5 mb:p-4 pb-0">
            <div className="ml-24 md:ml-40">
              <h1 className="text-xl md:text-3xl font-bold">Данила Мастер</h1>
              <div className="text-gray-500 leading-4 text-sm md:text-xl ">
                Южно-Сахалинск, Россия
              </div>
            </div>
            <div className="mt-5 md:mt-10 flex gap-0">
              <Link
                href={'/profile/posts'}
                className={isPosts ? activeTabClasses : tabClasses}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                <span className="hidden sm:block"> Посты</span>
              </Link>
              <Link
                href={'/profile/about'}
                className={isAbout ? activeTabClasses : tabClasses}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                <span className="hidden sm:block">Обо мне</span>
              </Link>
              <Link
                href={'/profile/friends'}
                className={isFriends ? activeTabClasses : tabClasses}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
                <span className="hidden sm:block"> Друзья</span>
              </Link>
              <Link
                href={'/profile/photos'}
                className={isPhotos ? activeTabClasses : tabClasses}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
                <span className="hidden sm:block"> Фото</span>
              </Link>
            </div>
          </div>
        </div>
      </Card>
      {isPosts && (
        <div>
          <PostCard />
        </div>
      )}

      {isAbout && (
        <div>
          <Card>
            <h2 className="text-2xl mb-2 font-medium">Это страница обо мне</h2>
            <p className="mb-4 text-sm">
              С учётом сложившейся международной обстановки, высокотехнологичная
              концепция общественного уклада говорит о возможностях модели
              развития. С другой стороны, новая модель организационной
              деятельности играет важную роль в формировании инновационных
              методов управления процессами. И нет сомнений, что активно
              развивающиеся страны третьего мира являются только методом
              политического участия и заблокированы в рамках своих собственных
              рациональных ограничений.
            </p>
            <p className="mb-4 text-sm">
              Кстати, тщательные исследования конкурентов функционально
              разнесены на независимые элементы! Приятно, граждане, наблюдать,
              как независимые государства, инициированные исключительно
              синтетически, превращены в посмешище, хотя само их существование
              приносит несомненную пользу обществу.{' '}
            </p>
          </Card>
        </div>
      )}
      {isFriends && (
        <div>
          <Card>
            <div>
              <h2 className="text-2xl mb-2 font-medium">Мои друзья</h2>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendsInfo />
              </div>

              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendsInfo />
              </div>
            </div>
          </Card>
        </div>
      )}
      {isPhotos && (
        <div>
          <Card>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-md overflow-hidden h-36 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1571732267057-85da3fe8b25a?q=80&w=919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-36 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1505551071487-d4a3fd384857?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>

              <div className="rounded-md overflow-hidden h-36 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1556610961-2fecc5927173?q=80&w=1067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>

              <div className="rounded-md overflow-hidden h-36 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1559029881-7cfd01ac1f18?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>

            {/* <h2 className="text-2xl mb-2 font-medium">Мои фотографии</h2> */}
          </Card>
        </div>
      )}
    </Layout>
  );
}
