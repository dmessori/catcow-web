// src/app/work/page.tsx
import Link from "next/link";

export default function WorkPage() {
  return (
    <main className="container-base pt-20">
      <h1 className="text-3xl font-bold text-blue-600">Work</h1>
      <p className="mt-4 text-gray-600">This is the Work page.</p>

      {/* Link al home */}
      <Link href="/" className="mt-8 inline-block text-blue-600 underline">
        ← Back to Home
      </Link>
    </main>
  );
}

  