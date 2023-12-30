import Card from '@/components/Card';
import Layout from '@/components/Layout';

export default function LoginPage() {
  return (
    <Layout hideNavigation={true}>
      <div className="h-screen flex items-center">
        <div className="max-w-md grow mx-auto -mt-24">
          <Card>Login Form</Card>
        </div>
      </div>
    </Layout>
  );
}
