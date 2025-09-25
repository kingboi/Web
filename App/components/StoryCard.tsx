export function StoryCard({ story }: { story: any }) {
  return (
    <article className="card">
      <h2 className="text-lg font-semibold mb-2 line-clamp-2">{story.title}</h2>
      <p className="text-sm mb-3 line-clamp-3">{story.abstract}</p>
      <div className="flex flex-wrap justify-between gap-2 text-xs text-gray-500">
        <span className="inline-flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Credibility {story.credibility_score}
        </span>
        <span>Coverage {story.coverage_count}</span>
        {story.published_at && (
          <time dateTime={story.published_at}>
            {new Date(story.published_at).toLocaleDateString()}
          </time>
        )}
      </div>
      <a
        href={`/story/${story.id}`}
        className="mt-3 inline-block text-blue-600 dark:text-blue-400"
      >
        Details →
      </a>
    </article>
  );
}
