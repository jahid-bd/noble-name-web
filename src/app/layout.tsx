import QueryProvider from '@/components/providers/QueryProvider';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import axios from 'axios';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import urlJoin from 'url-join';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  axios.interceptors.request.use(function (config: any) {
    const isAbsoluteURLRegex = /^(?:\w+:)\/\//;
    const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

    if (!isAbsoluteURLRegex.test(config.url)) {
      config.url = urlJoin(baseUrl as string, config.url);
    }
    config.withCredentials = true;
    return config;
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>{children}</QueryProvider>
        <ToastContainer style={{ zIndex: '1000000000000' }} />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string}
        />
      </body>
    </html>
  );
}
