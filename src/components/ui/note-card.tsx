'use client'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNote } from '@/lib/slices/notesSlice';
import { Button } from '@/components/ui';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { Input } from '@/components/ui';

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

  if (isEditing) {
    return (
      <Card>
        <CardContent className="space-y-4">
          <Input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            label="Title"
          />
          <div className="space-y-2">
            <label className="text-sm font-medium">Описание</label>
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              rows={4}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Отмена
            </Button>
            <Button onClick={handleSave}>
              Сохранить
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{note.description}</p>
        <Button onClick={() => setIsEditing(true)}>
          Edit
        </Button>
      </CardContent>
    </Card>
  );
}