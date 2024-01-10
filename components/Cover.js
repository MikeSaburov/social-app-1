import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import Preloader from './Preloader';
import { uploadUserProfileImage } from '@/helpers/user';

export default function Cover({ url, editable, onChange }) {
  const supabase = useSupabaseClient();
  const session = useSession();
  const [isUploading, setIsUploading] = useState(false);

  async function updateCover(event) {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      await uploadUserProfileImage(
        supabase,
        session.user.id,
        file,
        'covers',
        'cover'
      );

      if (onChange) {
        onChange();
      }
      setIsUploading(false);
    }
  }

  return (
    <div className="h-36 overflow-hidden flex justify-center items-center relative">
      <div>
        <img src={url} alt="" />
      </div>

      {isUploading && (
        <div className="absolute bg-white inset-0 bg-opacity-80 flex items-center z-10">
          <div className="inline-block mx-auto">
            <Preloader />
          </div>
        </div>
      )}

      {editable && (
        <div className="absolute right-0 bottom-0 m-2">
          <label className="bg-white rounded-md text-sm py-1 px-2 shadow-md shadow-black flex gap-1 items-center cursor-pointer">
            <input type="file" className="hidden" onChange={updateCover} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            Изменить обложку
          </label>
        </div>
      )}
    </div>
  );
}
