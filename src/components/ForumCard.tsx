import Link from "next/link";

export type ForumPost = {
  id: string;
  author: string;
  title: string;
  excerpt: string;
  group: string;
  replies: number;
};

type ForumCardProps = {
  post: ForumPost;
};

export default function ForumCard({ post }: ForumCardProps) {
  return (
    <article className="card border-line bg-white p-6">
      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{post.group}</div>
      <h3 className="mt-2 text-lg font-semibold text-ink">{post.title}</h3>
      <p className="mt-2 text-sm text-ink-soft">{post.excerpt}</p>
      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-ink-soft">
        <span>Par {post.author}</span>
        <span>{post.replies} réponses</span>
      </div>
      <Link href={`/forum/${post.id}`} className="btn btn-ghost mt-6 w-fit text-sm font-semibold">
        Répondre
      </Link>
    </article>
  );
}
