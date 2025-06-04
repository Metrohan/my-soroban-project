// components/layout/Header.tsx

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary text-white p-4 font-poppins shadow-md flex justify-between items-center">
      <Link href="/">
        <a className="text-2xl font-bold">TechToken</a>
      </Link>
      <nav className="flex space-x-6 text-sm">
        <Link href="/marketplace">
          <a className="hover:underline">Pazar Yeri</a>
        </Link>
        <Link href="/tokenize">
          <a className="hover:underline">Tokenize Et</a>
        </Link>
        <Link href="/transfer">
          <a className="hover:underline">Pay Transferi</a>
        </Link>
      </nav>
    </header>
  );
}
