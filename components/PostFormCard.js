'use client';
import { useContext, useState } from 'react';

import { Avatar } from './Avatar';
import Card from './Card';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { UserContext } from '@/context/UserContext';
import Preloader from './Preloader';

export const PostFormCard = ({ onPost }) => {
  const [content, setContent] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploads, setUploads] = useState([]);
  const supabase = useSupabaseClient();
  const session = useSession();
  const { profile } = useContext(UserContext);

  function creteNewPost() {
    supabase
      .from('posts')
      .insert({
        author: session.user.id,
        content,
        photos: uploads,
      })
      .then((res) => {
        if (!res.error) {
          setContent('');
          setUploads([]);
          if (onPost) {
            onPost();
          }
        }
      });
  }

  async function addPhotos(e) {
    const files = e.target.files;
    if (files.length > 0) {
      setIsUploading(true);
      for (const file of files) {
        const newName = Date.now() + file.name;
        const result = await supabase.storage
          .from('photos')
          .upload(newName, file);
        if (result.data) {
          const url =
            process.env.NEXT_PUBLIC_SUPABASE_URL +
            '/storage/v1/object/public/photos/' +
            result.data.path;

          setUploads((prevUploads) => [...prevUploads, url]);
        } else {
          console.log(result);
        }
      }
      setIsUploading(false);
    }
  }

  return (
    <Card>
      <div className="flex gap-2">
        <div>
          <Avatar url={profile?.avatar} />
        </div>
        {profile?.name && (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="grow p-3 block h-14 w-full text-sm text-gray-900 rounded-lg focus:border focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder={`Чем хотел бы поделиться, ${profile?.name}?`}
          ></textarea>
        )}
      </div>

      {isUploading && (
        <div>
          <Preloader />
        </div>
      )}

      {uploads.length > 0 && (
        <div className="flex gap-2">
          {uploads.map((upload) => (
            <div key={upload} className="mt-2">
              <img src={upload} alt="" className="w-auto h-24 rounded-md" />
            </div>
          ))}
        </div>
      )}

      {/* Блок кнопок */}
      <div className="flex gap-5 items-center mt-2 text-xs">
        <div>
          <label className="flex gap-1 cursor-pointer">
            <input
              type="file"
              className="hidden"
              multiple
              onChange={addPhotos}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
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
            <span className="hidden md:block">Фото</span>
          </label>
        </div>
        <div>
          <button className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <span className="hidden md:block"> Люди</span>
          </button>
        </div>
        <div>
          <button className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <span className="hidden md:block"> Геопозиция</span>
          </button>
        </div>
        <div>
          <button className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
            <span className="hidden md:block"> Настроение</span>
          </button>
        </div>
        <div className="grow text-right">
          <button
            onClick={creteNewPost}
            className="bg-socialBlue text-white px-4 py-1 rounded-md"
          >
            Поделиться
          </button>
        </div>
      </div>
    </Card>
  );
};
