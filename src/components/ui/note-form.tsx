import { Button, Input } from "@/components/ui";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { NoteFormData } from "../client/components/note-form-client";

interface NoteFormUIProps {
  register: UseFormRegister<NoteFormData>;
  errors: FieldErrors<NoteFormData>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function NoteFormUI({
  register,
  errors,
  handleSubmit,
}: NoteFormUIProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Заголовок"
        {...register("title", { required: "Заголовок обязателен" })}
        error={errors.title?.message}
      />
      <div className="space-y-2">
        <label className="text-sm font-medium">Описание</label>
        <textarea
          {...register("description", { required: "Описание обязательно" })}
          className="flex w-full rounded-md border border-input bg-white border-black px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          rows={4}
        />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>
      <Button type="submit">Создать запись</Button>
    </form>
  );
}
