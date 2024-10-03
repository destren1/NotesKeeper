"use client";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setUser } from "@/lib/slices/userSlice";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export default function RegisterPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Имитация задержки сети
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const userData = { username: data.username, email: data.email };
      dispatch(setUser(userData));
      sessionStorage.setItem("user", JSON.stringify(userData));
      router.push("/profile");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

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
