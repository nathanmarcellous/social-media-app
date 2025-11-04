import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

import { StoreProvider } from '@/redux/store-provider';
import { LoginModal } from '@/components/modal/login-modal';

export const metadata: Metadata = {
  title: 'Busy Bee',
  description: 'Busy Bee is a social media platform for sharing your thoughts and ideas with the world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body className={`${inter.className} antialiased`}>{children}

        </body>
      </html>
    </StoreProvider>
  );
}
