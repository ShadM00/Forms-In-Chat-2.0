export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div><h3 className="font-semibold text-lg mb-2">1. Describe your form</h3><p>Enter a natural-language prompt.</p></div>
        <div><h3 className="font-semibold text-lg mb-2">2. Watch it build</h3><p>AI builds the schema in seconds.</p></div>
        <div><h3 className="font-semibold text-lg mb-2">3. Share instantly</h3><p>Send via QR code, link, or embed.</p></div>
      </div>
    </section>
  );
}