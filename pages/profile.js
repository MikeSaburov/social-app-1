import Card from '../components/Card';
import Layout from '../components/Layout';
import { Avatar } from '../components/Avatar';
import Link from 'next/link';
import { PostCard } from '@/components/PostCard';
import { useRouter } from 'next/router';
import { FriendsInfo } from '@/components/FriendsInfo';
import { useEffect, useState } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Cover from '@/components/Cover';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');

  const supabase = useSupabaseClient();

  const router = useRouter();
  const session = useSession();
  const userId = router.query.id;

  useEffect(() => {
    if (!userId) {
      return;
    }
    fetchUser();
  }, [userId]);

  function fetchUser() {
    supabase
      .from('profiles')
      .select()
      .eq('id', userId)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        if (res.data) {
          setProfile(res.data[0]);
        }
      });
  }

  function saveProfile() {
    supabase
      .from('profiles')
      .update({
        name,
        place,
      })
      .eq('id', session.user.id)
      .then((res) => {
        console.log(res);
        setEditMode(false);
      });
  }

  const { asPath: pathname } = router;
  const isPosts = pathname.includes('posts') || pathname === '/profile';
  const isAbout = pathname.includes('about');
  const isFriends = pathname.includes('friends');
  const isPhotos = pathname.includes('photos');

  const tabClasses =
    'flex gap-1 px-2 py-1 items-center border-b-4 border-b-white';
  const activeTabClasses =
    'flex gap-1 px-2 py-1 items-center border-socialBlue border-b-4 text-socialBlue font-bold';

  const isMyUser = userId === session?.user?.id;

  return (
    <Layout>
      <Card noPadding={true}>
        <div className="relative overflow-hidden rounded-md">
          <Cover
            url={profile?.cover}
            editable={isMyUser}
            onChange={fetchUser}
          />
          <div className="absolute top-24 left-4 z-20">
            {profile && (
              <Avatar
                size={'lg'}
                url={profile?.avatar}
                editable={isMyUser}
                onChange={fetchUser}
              />
            )}
          </div>

          <div className="py-1 px-5 mb:p-4 pb-0">
            <div className="ml-24 md:ml-40 flex justify-between gap-2 ">
              <div>
                {editMode && (
                  <div className="mb-2">
                    <input
                      type="text"
                      placeholder={'Твое имя?'}
                      value={name}
                      onChange={(ev) => setName(ev.target.value)}
                      className="w-full px-2 py-1 border rounded-md"
                    />
                  </div>
                )}
                {!editMode && (
                  <h1 className="text-xl md:text-3xl font-bold">
                    {profile?.name}
                  </h1>
                )}

                {editMode && (
                  <div>
                    <input
                      type="text"
                      placeholder={'Откуда ты?'}
                      value={place}
                      onChange={(ev) => setPlace(ev.target.value)}
                      className="w-full px-2 py-1 border rounded-md"
                    />
                  </div>
                )}
                {!editMode && (
                  <div className="text-gray-500 leading-4 text-sm md:text-xl ">
                    {profile?.place || 'Млечный Путь. Земля:)'}
                  </div>
                )}
              </div>
              <div>
                {isMyUser && !editMode && (
                  <button
                    onClick={() => {
                      setEditMode(true);
                      setName(profile.name);
                      setPlace(profile.place);
                    }}
                    className="rounded-full border shadow-sm shadow-gray-300 text-sm px-2 py-1 hover:bg-socialBlue hover:text-white hover:bg-opacity-90"
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
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>
                )}
                {isMyUser && editMode && (
                  <button
                    onClick={saveProfile}
                    className="rounded-md border shadow-sm shadow-gray-300 text-sm px-2 py-1  hover:bg-socialBlue hover:bg-opacity-80 hover:text-white "
                  >
                    Сохранить
                  </button>
                )}
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
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
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
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-md overflow-hidden  md:h-36 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1571732267057-85da3fe8b25a?q=80&w=919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden  md:h-36 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1505551071487-d4a3fd384857?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>

              <div className="rounded-md overflow-hidden  md:h-36 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1556610961-2fecc5927173?q=80&w=1067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>

              <div className="rounded-md overflow-hidden  md:h-36 flex items-center shadow-md">
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
