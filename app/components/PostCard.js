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
    </Card>
  );
};
