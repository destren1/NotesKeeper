// src/components/notes/NoteForm.tsx
'use client'

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addNote } from '@/lib/slices/notesSlice';
import { Button } from '@/components/ui';
import { Input } from '@/components/ui';
import { v4 as uuidv4 } from 'uuid';

interface NoteFormData {
  title: string;
  description: string;
}

export function NoteForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NoteFormData>();

  const onSubmit = (data: NoteFormData) => {
    dispatch(addNote({
      id: uuidv4(),
      ...data,
    }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Заголовок"
        {...register("title", { required: "Заголовок обязателен" })}
        error={errors.title?.message}
      />
      <div className="space-y-2">
        <label className="text-sm font-medium">Описание</label>
        <textarea
          {...register("description", { required: "Описание обязательно" })}
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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