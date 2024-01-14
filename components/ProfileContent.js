import PostCard from './PostCard';
import Card from './Card';
import { FriendsInfo } from './FriendsInfo';
import { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export default function ProfileContent({ activeTab, userId }) {
  const [posts, setPosts] = useState([]);
  const supabase = useSupabaseClient();

  useEffect(() => {
    if (!userId) {
      return;
    }
  }, [userId]);

  async function loadPosts() {
    const posts = await userPosts(userId);
    const profile = await userProfile(userId);
    return { posts, profile };
  }

  async function userPosts(userId) {
    const { data } = await supabase
      .from('posts')
      .select('id, content, created_at, author')
      .eq('author', userId);
    return data;
  }

  async function userProfile(userId) {
    const { data } = await supabase
      .from('profiles')
      .select('id, avatar, created_at, name')
      .eq('id', userId);
    console.log(data);
    return data[0];
  }

  return (
    <>
      {activeTab === 'posts' && (
        <div>
          posts
          {/* <PostCard /> */}
        </div>
      )}

      {activeTab === 'about' && (
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
      {activeTab === 'friends' && (
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
      {activeTab === 'photos' && (
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
    </>
  );
}
