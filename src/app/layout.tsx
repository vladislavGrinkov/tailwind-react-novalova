'use client'
import './globals.css';
import { Open_Sans } from '@next/font/google';
import { Provider } from 'react-redux';
import store from './init/store';

const roboto = Open_Sans({
  subsets: ['latin'],
  weight: [ '500'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={roboto.className}>
        <Provider store={store}>
         {children}
        </Provider>
       </body>
    </html>
  );
}
