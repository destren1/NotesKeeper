import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from '@/components/provider'

export const metadata: Metadata = {
  title: 'NotesKeeper - Ваш персональный менеджер заметок',
  description: 'Безопасное пространство для регистрации, создания и управления вашими личными заметками. Организуйте свои мысли эффективно с нашим удобным приложением для создания заметок.',
  keywords: ['приложение для заметок', 'личные заметки', 'управление заметками', 'безопасные заметки'],
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
