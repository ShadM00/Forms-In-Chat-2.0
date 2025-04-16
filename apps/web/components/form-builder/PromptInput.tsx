import { useState } from 'react';

export default function PromptInput({ onPromptSubmit, loading }: { onPromptSubmit: (prompt: string) => void; loading: boolean }) {
  const [value, setValue] = useState('');

  return (
    <div className="flex gap-2">
      <input
        className="w-full p-2 border rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Describe the form you want..."
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading || !value}
        onClick={() => onPromptSubmit(value)}
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>
    </div>
  );
}