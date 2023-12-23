import Card from './components/Card';

export default function Home() {
  return (
    <div className="flex mt-4 max-w-6xl mx-auto border border-emerald-500">
      <div className="w-1/3">
        <Card>test links</Card>
      </div>
      <div className="">
        <div className="border border-black">form</div>
        posts
      </div>
    </div>
  );
}
