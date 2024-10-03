import { RegisterPageClient } from "@/components/client/pages-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Регистрация | NotesKeeper',
  description: 'Зарегистрируйте профиль в NotesKeeper',
};

export default function RegisterPage() {
  return <RegisterPageClient />;
}
