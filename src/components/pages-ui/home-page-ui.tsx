import { BookOpen } from "lucide-react";
import {
  IconHeading,
  FeatureCard,
  LinkButton,
  StepsSection,
} from "@/components/ui";
import { steps, features } from "./constants/constants-home-page";

export function HomePageUI() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <IconHeading
          icon={<BookOpen className="h-16 w-16 text-blue-500" />}
          title="Добро пожаловать в NotesKeeper"
          subtitle="Ваше персональное пространство для организации мыслей, идей и воспоминаний."
        />

        <div className="max-w-2xl mx-auto">
          <FeatureCard
            title="Почему стоит выбрать NotesKeeper?"
            features={features}
          />
        </div>

        <div className="text-center">
          <LinkButton href="/register">Зарегистрироваться</LinkButton>
        </div>

        <StepsSection title="Как это работает" steps={steps} />
      </div>
    </div>
  );
}
