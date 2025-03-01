import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center p-2">
      <div className="relative w-8 h-8">
        <Image
          src="/logo.svg"
          alt="YUN Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className="text-xl font-bold text-[#89CFF0] tracking-wider">
        YUN
      </span>
    </Link>
  );
} 