import Card from '@/components/Card';
import Layout from '@/components/Layout';

export default function LoginPage() {
  return (
    <Layout hideNavigation={true}>
      <div className="h-screen flex items-center -mt-4">
        <div className="max-w-md grow mx-auto ">
          <Card>Login Form</Card>
        </div>
      </div>
    </Layout>
  );
}
