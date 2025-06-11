"use client";

import * as React from "react";
import { Bell } from "lucide-react";

import { useCurrentLocale, useI18n } from "locales/client";
import { formatDate } from "@/shared/lib/date";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { releaseNotes } from "../model/notes";

export function ReleaseNotesDialog() {
  const t = useI18n();
  const locale = useCurrentLocale();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button aria-label={t("release_notes.release_notes")} size="icon" variant="ghost">
          <span className="sr-only">{t("release_notes.release_notes")}</span>
          <Bell className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{t("release_notes.title")}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {releaseNotes.map((note) => (
            <div className="border-b pb-2 last:border-b-0 last:pb-0" key={note.date}>
              <div className="text-xs text-muted-foreground">{formatDate(note.date, locale)}</div>
              <div className="font-semibold">{t(note.titleKey as keyof typeof t)}</div>
              <div className="text-sm">{t(note.contentKey as keyof typeof t)}</div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
