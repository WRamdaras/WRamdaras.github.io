export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold">Mijn portfolio</h1>
      <p className="mt-4 text-lg">
        Next.js, React en Tailwind werken
      </p>

      <div className="mt-6 space-y-3">
        <p className="rounded bg-gray-800 p-3">Next.js werkt</p>
        <p className="rounded bg-gray-800 p-3">React werkt</p>
        <p className="rounded bg-gray-800 p-3">Tailwind werkt</p>
      </div>

      <button className="mt-6 rounded bg-cyan-400 px-4 py-2 text-black">
        Klik hier
      </button>
    </main>
  )
}