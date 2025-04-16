export default function PreviewPane({ questions }: { questions: any[] }) {
  return (
    <div className="border rounded p-4 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Form Preview</h2>
      <ul className="space-y-3">
        {questions.map((q, i) => (
          <li key={i} className="p-3 border rounded bg-gray-50">
            {q.label}
          </li>
        ))}
      </ul>
    </div>
  );
}