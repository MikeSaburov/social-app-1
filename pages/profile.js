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
import ProfileTabs from '@/components/ProfileTabs';
import ProfileContent from '@/components/ProfileContent';
import { UserContextProvider } from '@/context/UserContext';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');

  const supabase = useSupabaseClient();

  const router = useRouter();
  const tab = router?.query?.tab?.[0] || 'posts';
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
        if (!res.error) {
          setProfile((prev) => ({ ...prev, name, place }));
        }
        setEditMode(false);
      });
  }

  const isMyUser = userId === session?.user?.id;

  return (
    <Layout>
      <UserContextProvider>
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
                      {profile?.place || 'Неизвестное откуда'}
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex gap-2 ">
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

                    {isMyUser && editMode && (
                      <button
                        onClick={() => setEditMode(false)}
                        className="rounded-md border shadow-sm shadow-gray-300 text-sm px-2 py-1  hover:bg-socialBlue hover:bg-opacity-80 hover:text-white "
                      >
                        Отмена
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <ProfileTabs active={tab} userId={profile?.id} />
            </div>
          </div>
        </Card>
        <ProfileContent activeTab={tab} userId={userId} />
      </UserContextProvider>
    </Layout>
  );
}
