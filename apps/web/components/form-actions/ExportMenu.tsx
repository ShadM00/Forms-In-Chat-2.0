'use client';

export default function ExportMenu({ form }: { form: any }) {
  const download = (type: 'json' | 'csv') => {
    const dataStr =
      type === 'json'
        ? JSON.stringify(form, null, 2)
        : form.questions.map((q: any) => q.label).join(',');

    const blob = new Blob([dataStr], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `form.${type}`;
    a.click();
  };

  return (
    <div className="space-x-2 mt-4">
      <button onClick={() => download('json')} className="px-3 py-1 border rounded">Export JSON</button>
      <button onClick={() => download('csv')} className="px-3 py-1 border rounded">Export CSV</button>
    </div>
  );
}
