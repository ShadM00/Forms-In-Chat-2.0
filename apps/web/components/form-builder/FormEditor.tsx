export default function FormEditor({ questions, onUpdate }: { questions: any[]; onUpdate: (index: number, text: string) => void }) {
  return (
    <div className="space-y-4">
      {questions.map((q, i) => (
        <div key={i} className="p-4 border rounded">
          <label className="block font-medium">Question {i + 1}</label>
          <input
            className="w-full mt-1 p-2 border rounded"
            value={q.label}
            onChange={(e) => onUpdate(i, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}