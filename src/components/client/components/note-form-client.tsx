'use client';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addNote } from '@/lib/slices/notesSlice';
import { v4 as uuidv4 } from 'uuid';
import { NoteFormUI } from '@/components/ui';

export interface NoteFormData {
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
    <NoteFormUI
      register={register}
      errors={errors}
      handleSubmit={handleSubmit(onSubmit)}
    />
  );
}
