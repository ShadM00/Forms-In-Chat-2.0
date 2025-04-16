'use client';
import QRCode from 'qrcode.react';

export default function ShareLink({ id }: { id: string }) {
  const link = `https://formsinchat.app/form/${id}`;  // Fixed template literal

  return (
    <div className="p-4 border rounded space-y-2">
      <p className="font-medium">Share this form:</p>
      <input 
        className="w-full border px-2 py-1 rounded" 
        value={link} 
        readOnly 
      />
      <QRCode value={link} size={128} />
    </div>
  );
}

