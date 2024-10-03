"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";
import { NoteForm } from "@/components/client/components";
import { NoteCard } from "@/components/client/components";

export default function ProfilePage() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);
  const notes = useSelector((state: RootState) => state.notes.notes);

  useEffect(() => {
    if (!user) {
      router.push("/register");
    }
  }, [user, router]);

  if (!user) return null;

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
