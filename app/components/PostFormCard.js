import Card from './Card';

export const PostFormCard = () => {
  return (
    <Card>
      <div className="flex gap-2">
        <div>
          <div className="w-12 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <textarea
          className="grow p-3 block w-full text-sm text-gray-900 rounded-lg focus:border focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder={'Что ты хочешь рассказать, Данил?'}
        ></textarea>
      </div>
    </Card>
  );
};
