'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNote } from '@/lib/slices/notesSlice';
import { NoteCardUI } from '@/components/ui';

interface NoteCardProps {
  note: {
    id: string;
    title: string;
    description: string;
  };
}

export function NoteCard({ note }: NoteCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedDescription, setEditedDescription] = useState(note.description);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(updateNote({
      ...note,
      title: editedTitle,
      description: editedDescription,
    }));
    setIsEditing(false);
  };

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
    />
  );
}
