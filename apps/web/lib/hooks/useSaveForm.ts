'use client';
import { useState } from 'react';

export function useSaveForm() {
  const [savedId, setSavedId] = useState<string | null>(null);

  async function saveForm(form: any) {
    const res = await fetch('/api/forms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setSavedId(data.id);
  }

  return { saveForm, savedId };
}