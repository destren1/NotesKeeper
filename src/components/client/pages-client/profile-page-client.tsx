"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { ProfilePageUI } from "@/components/pages-ui";

export function ProfilePageClient() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);
  const notes = useSelector((state: RootState) => state.notes.notes);

  useEffect(() => {
    if (!user) {
      router.push("/register");
    }
  }, [user, router]);

  if (!user) return null;

  return <ProfilePageUI user={user} notes={notes} />;
}