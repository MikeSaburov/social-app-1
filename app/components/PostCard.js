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
        <div className="rounded-md overflow-hidden flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1703309220781-4092c9a72d62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>
      </div>
    </Card>
  );
};
