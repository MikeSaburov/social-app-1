import { useState } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { uploadUserProfileImage } from '@/helpers/user';
import Preloader from './Preloader';
export const Avatar = ({ size, url, editable, onChange }) => {
  let width = 'w-12';
  let heigth = 'h-12';
  if (size === 'lg') {
    width = 'w-24 md:w-32';
    heigth = 'h-24 md:h-32';
  }

  const [isUploading, setIsUploading] = useState(false);
  const supabase = useSupabaseClient();
  const session = useSession();

  async function handleAvatarChange(event) {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      await uploadUserProfileImage(
        supabase,
        session.user.id,
        file,
        'avatars',
        'avatar'
      );
      if (onChange) onChange();
      setIsUploading(false);
    }
  }

  return (
    <div className={`${width} ${heigth} relative`}>
      <div className="rounded-full overflow-hidden">
        <img src={url} alt="" className={`w-full ${width} ${heigth}`} />
      </div>
      {isUploading && (
        <div className="absolute inset-0 flex items-center bg-white bg-opacity-50 rounded-full">
          <Preloader />
        </div>
      )}
      {editable && (
        <label className="absolute bottom-0 right-0 shadow-md shadow-gray-500 p-1 bg-white rounded-full cursor-pointer  hover:bg-socialBlue hover:text-white hover:bg-opacity-90">
          <input type="file" className="hidden" onChange={handleAvatarChange} />
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
        </label>
      )}
    </div>
  );
};
