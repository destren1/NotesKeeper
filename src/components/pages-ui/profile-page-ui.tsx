import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";
import { NoteForm } from "@/components/client/components";
import { NoteCard } from "@/components/client/components";
import { User, Note } from "@/types";

interface ProfilePageUIProps {
  user: User;
  notes: Note[];
}

export function ProfilePageUI({ user, notes }: ProfilePageUIProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Добро пожаловать, {user.username}!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Почта: {user.email}</p>
          </CardContent>
        </Card>
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Создать новую запись</CardTitle>
            </CardHeader>
            <CardContent>
              <NoteForm />
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
}