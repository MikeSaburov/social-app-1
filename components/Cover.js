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
          <label className="bg-white rounded-md text-sm py-1 px-2 shadow-md shadow-black flex gap-1 items-center cursor-pointer  hover:bg-socialBlue hover:text-white hover:bg-opacity-90">
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
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            Изменить обложку
          </label>
        </div>
      )}
    </div>
  );
}
