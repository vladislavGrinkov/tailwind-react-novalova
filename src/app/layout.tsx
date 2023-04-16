import './globals.css';
import { Open_Sans } from '@next/font/google';

export const metadata = {
  title: 'NOVALOVA',
  description: 'Find love',
};

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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
