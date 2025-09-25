import { StoryCard } from "./components/StoryCard";

async function getStories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/stories`, {
    next: { revalidate: 300 }
  });
  return res.json();
}

export default async function Home() {
  const stories = await getStories();
  return (
    <section className="max-w-5xl mx-auto p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Latest underreported stories</h2>
        <div className="text-xs text-gray-500">Auto‑refreshed</div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((s: any) => (
          <StoryCard key={s.id} story={s} />
        ))}
      </div>
    </section>
  );
}
