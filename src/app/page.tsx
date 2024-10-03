import { HomePageUI } from "@/components/pages-ui";

export const metadata = {
  title: 'Главная страница - NotesKeeper',
  description: 'Добро пожаловать в NotesKeeper. Ваше персональное пространство для организации мыслей и идей.',
  keywords: ['домашняя страница', 'NotesKeeper', 'управление заметками'],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function HomePage() {
  return <HomePageUI />;
}