'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">FormsInChat</Link>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}
              className={`text-sm font-medium hover:text-blue-600 ${
                pathname === item.href ? 'text-blue-600' : 'text-gray-800'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="block text-sm text-gray-700">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}