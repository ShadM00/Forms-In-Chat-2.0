import React from "react";
import { Button } from "ui";  // Import from the shared UI package instead of local path

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        {navLinks.map((link) => (
          <Button key={link.href} variant="link" href={link.href}>
            {link.label}
          </Button>
        ))}
      </div>
    </nav>
  );
}
