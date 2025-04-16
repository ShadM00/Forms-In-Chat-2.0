'use client';
import { useEffect, useState } from 'react';

export default function PublicForm({ params }: { params: { formId: string } }) {
  const [form, setForm] = useState<any>(null);

  useEffect(() => {
    fetch('/api/forms/' + params.formId)
      .then(res => res.json())
      .then(data => setForm(data));
  }, [params.formId]);

  if (!form) return <p>Loading...</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">{form.title || 'Untitled Form'}</h1>
      <ul>
        {form.questions?.map((q: any, i: number) => (
          <li key={i} className="border p-2 rounded">{q.label}</li>
        ))}
      </ul>
    </div>
  );
}