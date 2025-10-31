import Section from "@/components/Section";
import ForumCard, { ForumPost } from "@/components/ForumCard";

const posts: ForumPost[] = [
  {
    id: "1",
    author: "Adams 21",
    title: "Aller chez un gynéco homme",
    excerpt: "J&apos;hésite depuis un moment et je souhaiterais avoir vos retours et recommandations bienveillantes.",
    group: "Sexualité",
    replies: 12,
  },
  {
    id: "2",
    author: "Nadia",
    title: "Dépression saisonnière",
    excerpt: "Le changement d&apos;heure me pèse énormément. Quelles routines vous aident à garder le moral ?",
    group: "Dépression",
    replies: 8,
  },
  {
    id: "3",
    author: "Rayan",
    title: "Crises d&apos;angoisse nocturnes",
    excerpt: "Des astuces concrètes pour se calmer lorsqu&apos;on se réveille en pleine nuit ?",
    group: "Anxiété",
    replies: 21,
  },
];

export default function ForumPage() {
  return (
    <Section className="py-16">
      <div className="mb-10 max-w-3xl">
        <h1 className="text-3xl font-extrabold text-ink">Discussions récentes</h1>
        <p className="mt-3 text-ink-soft">
          Partage ton histoire ou rejoins un fil existant. Les conversations sont modérées pour garantir un espace respectueux et sûr.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <ForumCard key={post.id} post={post} />
        ))}
      </div>
    </Section>
  );
}
