import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { Providers } from '@/components/profider'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'NotesKeeper - Ваш персональный менеджер заметок',
  description: 'Безопасное пространство для регистрации, создания и управления вашими личными заметками. Организуйте свои мысли эффективно с нашим удобным приложением для создания заметок.',
  keywords: ['приложение для заметок', 'личные заметки', 'управление заметками', 'безопасные заметки'],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
