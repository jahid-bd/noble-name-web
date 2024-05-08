import AuthProvider from '@/components/layout/AuthProvider';
import QueryProvider from '@/components/providers/QueryProvider';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';

import axios from 'axios';
import type { Metadata } from 'next';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import urlJoin from 'url-join';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  axios.interceptors.request.use(function (config: any) {
    const isAbsoluteURLRegex = /^(?:\w+:)\/\//;
    const baseUrl = 'http://localhost:8000';

    if (!isAbsoluteURLRegex.test(config.url)) {
      config.url = urlJoin(baseUrl, config.url);
    }
    config.withCredentials = true;
    return config;
  });

  console.log(process.env.NEXT_PUBLIC_API_URL);
  console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </QueryProvider>
        <ToastContainer />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string}
        />
      </body>
    </html>
  );
}
