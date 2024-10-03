"use client";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setUser } from "@/lib/slices/userSlice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterPageUI } from "@/components/pages-ui";

const schema = yup
  .object({
    username: yup.string().required("Имя пользователя обязательно"),
    email: yup.string().email("Неверный email").required("Email обязателен"),
    password: yup
      .string()
      .min(6, "Пароль должен содержать как минимум 6 символов")
      .required("Пароль обязателен"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function RegisterPageClient() {
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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const userData = {
        username: data.username,
        email: data.email,
      };
      dispatch(setUser(userData));
      sessionStorage.setItem("user", JSON.stringify(userData));
      router.push("/profile");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <RegisterPageUI
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      isSubmitting={isSubmitting}
    />
  );
}
