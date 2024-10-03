'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNote } from '@/lib/slices/notesSlice';
import { NoteCardUI } from '@/components/ui';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface NoteCardProps {
  note: {
    id: string;
    title: string;
    description: string;
  };
}

const schema = yup
  .object({
    title: yup.string().required("Заголовок обязателен"),
    description: yup.string().required("Описание обязательно"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function NoteCard({ note }: NoteCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedDescription, setEditedDescription] = useState(note.description);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleSave = handleSubmit(() => { 
    dispatch(updateNote({
      ...note,
      title: editedTitle,
      description: editedDescription,
    }));
    setIsEditing(false);
  });

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <NoteCardUI
      isEditing={isEditing}
      editedTitle={editedTitle}
      editedDescription={editedDescription}
      setEditedTitle={setEditedTitle}
      setEditedDescription={setEditedDescription}
      handleSave={handleSave}
      handleCancel={handleCancel}
      handleEdit={handleEdit}
      note={note}
      register={register}
      errors={errors}
    />
  );
}
