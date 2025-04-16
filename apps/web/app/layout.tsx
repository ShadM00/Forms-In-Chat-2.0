import { Navbar, Footer } from 'ui';
import './globals.css';
import { PostHogProvider } from './providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans bg-white text-gray-900 flex flex-col">
      {/* <PostHogProvider> */}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* </PostHogProvider> */}
      </body>
    </html>
  );
}