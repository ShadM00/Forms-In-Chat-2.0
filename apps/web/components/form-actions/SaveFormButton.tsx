'use client';
import { useSaveForm } from '../../lib/hooks/useSaveForm';

export default function SaveFormButton({ form }: { form: any }) {
  const { saveForm, savedId } = useSaveForm();

  return (
    <div className="space-y-2">
      <button onClick={() => saveForm(form)} className="px-4 py-2 bg-blue-600 text-white rounded">
        Save Form
      </button>
      {savedId && <p className="text-green-600">Form saved! ID: {savedId}</p>}
    </div>
  );
}
