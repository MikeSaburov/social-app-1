import Card from './Card';
import { Avatar } from './Avatar';

export const PostCard = () => {
  return (
    <Card>
      <div className="flex gap-3">
        <div>
          <Avatar />
        </div>
        <div>
          <p>
            <a className="font-semibold">Данила Мастер</a> поделился{' '}
            <a className="text-socialBlue">фото</a>
          </p>
          <p className="text-gray-500 text-sm">2 часа назад</p>
        </div>
      </div>
      <div>
        <p className="my-3 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, sed
          enim. Doloremque, aut labore saepe dolorem tenetur vero dolores culpa
          nam, quod recusandae, accusantium eius sit. Nobis facere maxime magni.
        </p>
        <div>
          <img
            className="rounded-md overflow-hidden "
            src="https://images.unsplash.com/photo-1506978520653-bb3accebb1a3?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
      <div className="mt-4 flex gap-6 text-xs">
        <button className="flex gap-1 items-center">
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
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          105
        </button>
        <button className="flex gap-1 items-center">
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
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          107
        </button>
        <button className="flex gap-1 items-center">
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
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
          126
        </button>
      </div>
      <div className="mt-4 flex gap-3">
        <div>
          <Avatar />
        </div>
        <textarea
          className="border grow  px-3 py-2.5 block h-12 w-full text-sm text-gray-900 rounded-full focus:border focus:ring-blue-500 focus:border-blue-500 outline-none overflow-hidden"
          placeholder="Добавить комментарий..."
        ></textarea>
      </div>
    </Card>
  );
};
