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
    <article className="card border-line bg-white p-4 md:p-6">
      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{post.group}</div>
      <h3 className="mt-2 text-base md:text-lg font-semibold text-ink line-clamp-2">{post.title}</h3>
      <p className="mt-2 text-xs md:text-sm text-ink-soft line-clamp-3">{post.excerpt}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-ink-soft">
        <span className="truncate">Par {post.author}</span>
        <span>{post.replies} réponses</span>
      </div>
      <Link href={`/forum/${post.id}`} className="btn btn-ghost mt-6 w-fit text-xs md:text-sm font-semibold">
        Répondre
      </Link>
    </article>
  );
}
