import Card from '@/components/Card';
import Layout from '@/components/Layout';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export default function LoginPage() {
  const supabase = useSupabaseClient();

  async function loginWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  return (
    <Layout hideNavigation={true}>
      <div className="h-screen flex items-center -mt-24">
        <div className="max-w-xs grow mx-auto ">
          <h1 className="text-5xl text-gray-400 mb-4 text-center">Вход</h1>
          <Card noPadding={true}>
            <div className="rounded-md overflow-hidden">
              <button
                onClick={loginWithGoogle}
                className="flex w-full gap-3 items-center justify-center p-4 border-b border-b-gray-100 hover:bg-socialBlue hover:bg-opacity-50 hover:text-white transition-all hover:border-b-socialBlue hover:border-opacity-10 hover:scale-110"
              >
                <svg
                  className="h-8"
                  viewBox="0 0 533.5 544.3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                    fill="#4285f4"
                  />
                  <path
                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                    fill="#34a853"
                  />
                  <path
                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                    fill="#ea4335"
                  />
                </svg>
                <p className="min-w-40">Войти через Google</p>
              </button>

              <a
                href=""
                className="flex gap-3 items-center justify-center p-4 border-b border-b-gray-100 hover:bg-socialBlue hover:bg-opacity-50 hover:text-white transition-all  hover:border-b-socialBlue hover:border-opacity-10 hover:scale-110"
              >
                <svg
                  className="h-8 fill-blue-500  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M31.5 63.5C0 95 0 145.7 0 247V265C0 366.3 0 417 31.5 448.5C63 480 113.7 480 215 480H233C334.3 480 385 480 416.5 448.5C448 417 448 366.3 448 265V247C448 145.7 448 95 416.5 63.5C385 32 334.3 32 233 32H215C113.7 32 63 32 31.5 63.5zM75.6 168.3H126.7C128.4 253.8 166.1 290 196 297.4V168.3H244.2V242C273.7 238.8 304.6 205.2 315.1 168.3H363.3C359.3 187.4 351.5 205.6 340.2 221.6C328.9 237.6 314.5 251.1 297.7 261.2C316.4 270.5 332.9 283.6 346.1 299.8C359.4 315.9 369 334.6 374.5 354.7H321.4C316.6 337.3 306.6 321.6 292.9 309.8C279.1 297.9 262.2 290.4 244.2 288.1V354.7H238.4C136.3 354.7 78 284.7 75.6 168.3z" />
                </svg>

                <p className="min-w-40"> Войти через VK</p>
              </a>

              <a
                href=""
                className="flex gap-3 items-center justify-center p-4 border-b border-b-gray-100  hover:bg-socialBlue hover:bg-opacity-50 hover:text-white transition-all hover:border-b-socialBlue hover:border-opacity-10 hover:scale-110"
              >
                <svg
                  className="h-8 fill-mail"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
                </svg>
                <p className="min-w-40">Войти через Mail</p>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
