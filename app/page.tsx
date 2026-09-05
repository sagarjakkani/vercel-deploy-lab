export default function Home() {
  const greeting =
    process.env.NEXT_PUBLIC_GREETING ?? "Greeting is unavailable";

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Vercel Deployment Lab</h1>
        <p className="mt-4 text-xl">{greeting}</p>
        <p className="mt-2 text-sm text-gray-600">
          Preview deployment test
        </p>
      </div>
    </main>
  );
}