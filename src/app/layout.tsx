import type { Metadata } from 'next';
import RadialMouseEffect from 'src/components/RadialMouseEffect';

import 'src/styles/globals.css';
import 'src/styles/mui-override.css';
import { cabinFont, quickSandFont } from 'src/themes/fonts';
import ThemeRegistry from 'src/themes/ThemeRegistry';

export const metadata: Metadata = {
  title: 'Melvic Gomez | Full Stack Developer',
  description:
    'Full stack developer and UI/UX enthusiast from the Philippines with 9+ years of experience in web, mobile, and software development. Passionate about data, reporting, and good design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${quickSandFont.variable} ${cabinFont.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-neutral-900 leading-relaxed text-red-500 antialiased selection:bg-red-900 selection:text-red-200">
        <ThemeRegistry>
          <RadialMouseEffect>{children}</RadialMouseEffect>
        </ThemeRegistry>
      </body>
    </html>
  );
}
