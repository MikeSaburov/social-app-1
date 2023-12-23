import Card from './components/Card';

export default function Home() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-4">
      <div className="w-1/3">
        <Card>
          <h2>Меню</h2>
          <a href="" className="block ">
            Домой
          </a>
          <a href="" className="block ">
            Друзья
          </a>
          <a href="" className="block ">
            Закладки
          </a>
          <a href="" className="block ">
            Уведомления
          </a>
          <a href="" className="block ">
            Выйти
          </a>
        </Card>
      </div>
      <div className="grow">
        <Card>form here</Card>
        <Card>ferst post test</Card>
      </div>
    </div>
  );
}
