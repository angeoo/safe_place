"use client";

import { useState } from "react";

interface Forum {
  id: string;
  title: string;
  group: string;
  description: string;
  postsCount: number;
  lastActive: string;
  hasProResponse: boolean;
}

const groups = [
  { id: "anxiety", name: "Anxiety Support", count: 45 },
  { id: "depression", name: "Depression Support", count: 52 },
  { id: "stress", name: "Stress Management", count: 38 },
  { id: "mindfulness", name: "Mindfulness & Meditation", count: 62 },
  { id: "selfcare", name: "Self-Care Tips", count: 41 },
  { id: "affirmations", name: "Positive Affirmations", count: 35 },
];

const forums: Forum[] = [
  {
    id: "1",
    title: "Aller chez un gynéco homme",
    group: "Anxiety Support",
    description: "J'hésite depuis un moment et je souhaiterais avoir vos retours et recommandations bienveillantes.",
    postsCount: 12,
    lastActive: "2 hours ago",
    hasProResponse: false,
  },
  {
    id: "2",
    title: "Dépression saisonnière",
    group: "Depression Support",
    description: "Le changement d'heure me pèse énormément. Quelles routines vous aident à garder le moral ?",
    postsCount: 8,
    lastActive: "1 hour ago",
    hasProResponse: true,
  },
  {
    id: "3",
    title: "Crises d'angoisse nocturnes",
    group: "Anxiety Support",
    description: "Des astuces concrètes pour se calmer lorsqu'on se réveille en pleine nuit ?",
    postsCount: 21,
    lastActive: "30 minutes ago",
    hasProResponse: true,
  },
  {
    id: "4",
    title: "Méditation pour les débutants",
    group: "Mindfulness & Meditation",
    description: "Conseils pour débuter une pratique de méditation régulière sans se décourage",
    postsCount: 15,
    lastActive: "4 hours ago",
    hasProResponse: false,
  },
  {
    id: "5",
    title: "Burn-out et retour au travail",
    group: "Stress Management",
    description: "Comment reprendre confiance après un burn-out professionnel ?",
    postsCount: 28,
    lastActive: "5 minutes ago",
    hasProResponse: true,
  },
  {
    id: "6",
    title: "Affirmations positives au quotidien",
    group: "Positive Affirmations",
    description: "Partage vos affirmations préférées et vos rituels du matin",
    postsCount: 19,
    lastActive: "1 day ago",
    hasProResponse: false,
  },
];

export default function ForumPage() {
  const [activeGroup, setActiveGroup] = useState(groups[0].id);

  return (
    <div className="min-h-screen bg-[#fef5f4]">
      {/* Sidebar */}
      <div className="mx-auto flex max-w-screen-xl gap-8 px-3 py-8 md:px-8">
        <div className="hidden w-72 flex-shrink-0 flex-col rounded border border-[#f0e5dc] bg-white px-6 py-8 shadow-soft lg:flex">
          <h2 className="mb-6 text-xl font-bold text-ink">Groups</h2>
          <div className="mb-8 flex-1 space-y-2">
            {groups.map((group) => {
              const isActive = activeGroup === group.id;
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveGroup(group.id)}
                  aria-pressed={isActive}
                  className={`group flex w-full items-center gap-4 rounded-xl border border-gray-100 bg-white py-4 pr-4 transition-all hover:border-brand hover:bg-gray-50 ${
                    isActive
                      ? "border border-l-[6px] border-l-black pl-6"
                      : "border border-l-[6px] border-l-black pl-4"
                  }`}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white group-hover:shadow-md transition-shadow">
                    {group.name.charAt(0)}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-semibold text-ink transition-colors group-hover:text-brand">
                      {group.name}
                    </p>
                    <p className="text-xs text-ink-soft">{group.count} members</p>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="mt-auto space-y-3">
            <button className="w-full rounded-xl bg-[#ffe7c2] px-4 py-3 font-semibold text-ink shadow-sm transition-colors hover:bg-[#ffdba3] hover:shadow-md">
              Créer un forum
            </button>
            <button className="w-full rounded-xl bg-brand px-4 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-orange-500 hover:shadow-md">
              Parler à un professionnel
            </button>
          </div>
        </div>
        

      {/* Main Content */}
        <main className="flex-1 rounded bg-white/70 px-4 py-8 shadow-soft md:px-8">
          <div className="mx-auto max-w-5xl">
            {/* Header */}
            <div className="mb-10">
              <h1 className="mb-4 text-4xl font-extrabold text-ink md:text-5xl">
                Discussions récentes
              </h1>
              <p className="text-lg text-ink-soft">
                Partage ton histoire ou rejoins un fil existant. Les conversations sont modérées pour garantir un espace respectueux et sûr.
              </p>
            </div>

            {/* Forums Grid */}
            <div className="space-y-4">
              {forums.map((forum) => (
                <div
                  key={forum.id}
                  className="group relative cursor-pointer rounded-2xl border border-[#f0e5dc] bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-lg"
                >
                  <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-brand" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
                        {forum.group.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-brand">
                          {forum.group}
                        </p>
                        <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-brand md:text-xl">
                          {forum.title}
                        </h3>
                      </div>
                    </div>
                    {forum.hasProResponse && (
                      <span className="flex-shrink-0 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                        Pro Response ✓
                      </span>
                    )}
                  </div>

                  <p className="mb-4 text-sm text-ink-soft md:text-base">
                    {forum.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-ink-soft md:text-sm">
                    <span>{forum.postsCount} posts</span>
                    <span>Active {forum.lastActive}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="rounded-lg border border-gray-300 px-4 py-2 text-ink transition-colors hover:bg-gray-50 disabled:opacity-50">
                ← Previous
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`h-10 w-10 rounded-lg font-semibold transition-colors ${
                    page === 1
                      ? "bg-brand text-white"
                      : "border border-gray-300 text-ink hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="rounded-lg border border-gray-300 px-4 py-2 text-ink transition-colors hover:bg-gray-50">
                Next →
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
