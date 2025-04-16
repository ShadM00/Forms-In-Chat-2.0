export default function Hero() {
  return (
    <section className="px-6 py-20 text-center bg-gradient-to-b from-blue-50 to-purple-50">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Forms that talk, convert, and adapt.</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
        AI-powered conversational forms for DMs, bios, QR codes, and mobile apps — ready in seconds.
      </p>
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <button className="bg-blue-600 text-white px-6 py-3 rounded">Start Free</button>
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded">Try Live Demo</button>
      </div>
      <div className="max-w-md mx-auto p-6 rounded border bg-white shadow">[Chat Form Preview Placeholder]</div>
    </section>
  );
}