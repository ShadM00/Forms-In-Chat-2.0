const features = [
  "Conversational UI",
  "Prompt-to-form in seconds",
  "Share via link or QR",
  "Export to CSV/JSON",
  "Analytics-ready",
  "Mobile-first design",
];

export default function Features() {
  return (
    <section id="features" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">What Makes It Magical</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((text, i) => (
          <div key={i} className="p-6 rounded border shadow-sm bg-white">{text}</div>
        ))}
      </div>
    </section>
  );
}