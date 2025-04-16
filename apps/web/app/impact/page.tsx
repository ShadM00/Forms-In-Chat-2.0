export default function ImpactPage() {
  const mockData = {
    formsBlessed: 4217,
    prayersShared: 639,
    nonprofitsEnabled: 203,
    livesImpactedGoal: 1000000
  };

  return (
    <main className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">Kingdom Impact</h1>
      <p className="mb-4">We believe software can serve people, bless others, and change lives. Here's how FormsInChat is doing just that:</p>
      <ul className="text-lg space-y-3">
        <li>🙏 <strong>{mockData.formsBlessed}</strong> forms used to serve others</li>
        <li>🕊️ <strong>{mockData.prayersShared}</strong> prayers requested/shared</li>
        <li>💒 <strong>{mockData.nonprofitsEnabled}</strong> nonprofits enabled</li>
        <li>🌍 Goal: <strong>{mockData.livesImpactedGoal.toLocaleString()}</strong> lives impacted</li>
      </ul>
    </main>
  );
}