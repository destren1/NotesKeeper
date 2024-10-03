import { ProfilePageClient } from "@/components/client/pages-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Профиль | NotesKeeper',
  description: 'Ваш профиль в приложении NotesKeeper',
};

export default function ProfilePage() {
  return <ProfilePageClient />;
}
