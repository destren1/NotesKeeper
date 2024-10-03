import { Button } from "@/components/ui";
import { Input } from "@/components/ui";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui";
import { UseFormRegister, FieldErrors, UseFormHandleSubmit } from "react-hook-form";

type FormData = {
  username: string;
  email: string;
  password: string;
};

interface RegisterPageUIProps {
  register: UseFormRegister<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData>;
  onSubmit: (data: FormData) => Promise<void>;
  errors: FieldErrors<FormData>;
  isSubmitting: boolean;
}

export function RegisterPageUI({
  register,
  handleSubmit,
  onSubmit,
  errors,
  isSubmitting,
}: RegisterPageUIProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Создать аккаунт</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label="Имя"
                {...register("username")}
                error={errors.username?.message}
              />
              <Input
                label="Почта"
                type="email"
                {...register("email")}
                error={errors.email?.message}
              />
              <Input
                label="Пароль"
                type="password"
                {...register("password")}
                error={errors.password?.message}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Создание аккаунта..." : "Создать аккаунт"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}