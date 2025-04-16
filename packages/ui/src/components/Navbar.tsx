export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b bg-white sticky top-0 z-50">
      <div className="text-xl font-bold text-blue-600">FormsInChat</div>
      <nav className="space-x-6 text-sm hidden md:flex">
        <a href="#features" className="hover:text-blue-600">Features</a>
        <a href="#pricing" className="hover:text-blue-600">Pricing</a>
        <a href="#blog" className="hover:text-blue-600">Blog</a>
        <a href="#login" className="hover:text-blue-600">Login</a>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start Free</button>
      </nav>
    </header>
  );
}