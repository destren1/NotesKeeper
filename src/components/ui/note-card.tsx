import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
} from "@/components/ui";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type FormData = {
  title: string;
  description: string;
};

interface NoteCardUIProps {
  isEditing: boolean;
  editedTitle: string;
  editedDescription: string;
  setEditedTitle: (value: string) => void;
  setEditedDescription: (value: string) => void;
  handleSave: () => void;
  handleCancel: () => void;
  handleEdit: () => void;
  note: {
    title: string;
    description: string;
  };
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export function NoteCardUI({
  isEditing,
  editedTitle,
  editedDescription,
  setEditedTitle,
  setEditedDescription,
  handleSave,
  handleCancel,
  handleEdit,
  note,
  register,
  errors,
}: NoteCardUIProps) {
  if (isEditing) {
    return (
      <Card>
        <CardContent className="space-y-4">
          <Input
            {...register("title", {
              onChange: (e) => setEditedTitle(e.target.value),
            })}
            label="Title"
            error={errors.title?.message}
            value={editedTitle} // переместил value здесь
          />
          <div className="space-y-2">
            <label className="text-sm font-medium">Описание</label>
            <textarea
              {...register("description", {
                onChange: (e) => setEditedDescription(e.target.value),
              })}
              className="flex w-full rounded-md border border-input bg-white border-black px-3 py-2 text-sm"
              rows={4}
              value={editedDescription}
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={handleCancel}>
              Отмена
            </Button>
            <Button onClick={handleSave}>Сохранить</Button>
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
        <Button onClick={handleEdit}>Изменить</Button>
      </CardContent>
    </Card>
  );
}
