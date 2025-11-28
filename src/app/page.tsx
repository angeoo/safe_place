import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";

const categoryItems = [
  "Santé mentale",
  "Sexualité",
  "Maternité",
  "Addiction",
  "Burn-out",
  "Relations",
  "Identité",
  "Mindfulness",
];

type Professional = {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  emoji: string;
};

const professionals: Professional[] = [
  {
    id: "sarah-johnson",
    name: "Dr. Sarah Johnson",
    specialty: "Anxiété & Dépression",
    experience: "8 ans d'expérience",
    rating: 4.9,
    emoji: "🩺",
  },
  {
    id: "michael-chen",
    name: "Dr. Michael Chen",
    specialty: "Thérapie de couple",
    experience: "12 ans d'expérience",
    rating: 4.8,
    emoji: "💬",
  },
  {
    id: "emily-rodriguez",
    name: "Dr. Emily Rodriguez",
    specialty: "Trauma & PTSD",
    experience: "10 ans d'expérience",
    rating: 4.9,
    emoji: "🌿",
  },
];

export default function HomePage() {
  return (
    <>
      <Section className="py-16 md:py-20">
        <div className="flex flex-row gap-5 text-center md:gap-14">
          <div className="flex flex-col text-center">
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-left md:text-5xl">
              Your Safe Place to talk about mental health
            </h1>
            <p className="mt-4 max-w-xl text-base text-left md:text-lg">
              Connect directly with licensed professionals through secure video consultations. Join our free, anonymous community forum for peer support. Your healing journey starts here.
            </p>
            <div className="mt-8 flex max-w-sm flex-col gap-3">
              <Link href="/booking" className="btn btn-brand ">Consulter un professionnel</Link>
              <Link href="/forum" className="btn btn-ghost">Participer à un forum</Link>
            </div>
          </div>
          <Image
            src="/Translate-2--Streamline-Djakarta.png"
            alt="Person speaking with a specialist online"
            width={532}
            height={568}
            className="w-full max-w-lg"
            priority
          />
        </div>
      </Section>

      <Section className="pb-12 pt-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="!bg-peach p-10s">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl pb-3 font-bold text-center">T&apos;as une question ?</h2>
                <p className="text-xl">
                  Des professionnels de santé et un forum de discussion libres et anonymes pour vous écouter et répondre.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mt-8 grid-cols-1 gap-5 sm:grid-cols-2">
                <Link href="/forum/new" className="btn btn-ghost mb-5">
                  Poser une question
                </Link>
                <Link href="/forum" className="btn btn-ghost">
                  Consulter le forum
                </Link>
              </div>
              <Image
                src="/Asking-A-Question-2--Streamline-Djakarta.png"
                alt="Question illustration"
                width={150}
                height={140}
                className="w-50 drop-shadow"/>
            </div>
          </div>

          <div className="grid gap-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="!bg-brand">
                <h2 className=" text-2xl pb-3 font-bold text-center"> Discuter avec des specialistes</h2>
                <p className="text-xl">
                  Des professionnels de santé et un forum de discussion libres et anonymes pour vous écouter et répondre.
                </p>
              </div>
            </div>
            <div className="!bg-brand flex flex-row gap-8">
              <div className="mt-8 grid-cols-1 gap-5 sm:grid-cols-2">
                <Link href="/forum/new" className="btn btn-ghost mb-5">
                  Consulter un professionnel
                </Link>
              </div>
              <Image
                src="/Assistant-1--Streamline-Milano.png"
                alt="Robot illustration"
                width={243}
                height={218}
                className="w-50 drop-shadow"/>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-16">
        <div className="grid grid-cols-2 gap-4 bg-white p-6 sm:grid-cols-4">
          {categoryItems.map((category) => (
            <span
              key={category}
              className="chip h-14 text-center text-2xl font-semibold">
              {category}
            </span>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <div className="flex flex-row gap-10 justify-center content-between">
          <div className="flex justify-center">
            <Image
              src="/Translate-3--Streamline-Brooklyn.png"
              alt="Communauté diverse"
              width={620}
              height={527}
              className="w-full max-w-2xl object-contain"
              priority
            />
          </div>
          <div className="flex max-w-xl flex-col justify-center">
            <h2 className="text-4xl font-extrabold">
              Where you can easily talk about your sexuality and mental health with about us
            </h2>
            <p className="mt-4 text-1xl">
              Des professionnels de santé et un forum de discussion libres et anonymes pour vous écouter et répondre. Un espace sûr pour déposer ce que vous traversez.
            </p>
            <p className="mt-4 text-1xl">
              Des professionnels de santé et un forum de discussion libres et anonymes pour vous écouter et répondre. Un espace sûr pour déposer ce que vous traversez.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-peach px-6 py-14 text-center shadow-soft md:px-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#ffe7c2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            <span className="text-base">🛡️</span>
            Licensed Mental Health Professionals
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-ink md:text-4xl">
            Meet Our <span className="text-brand">Top</span> Professionals
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-ink-soft md:text-base">
            Connect with experienced, board-certified therapists ready to support your mental health journey with empathy, expertise, and a personalised care plan.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {professionals.map((pro) => (
              <article
                key={pro.id}
                className="flex flex-col items-center gap-4 rounded-3xl bg-white/80 p-6 text-center shadow-soft transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-brand text-2xl">
                    {pro.emoji}
                  </span>
                  <span className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-brand shadow-soft">
                    ⭐ {pro.rating.toFixed(1)}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-ink">{pro.name}</h3>
                  <p className="text-sm font-medium text-ink-soft">{pro.specialty}</p>
                  <p className="text-sm font-semibold text-brand">{pro.experience}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/specialistes" className="btn btn-brand px-8 text-sm font-semibold">
              Voir tous les spécialistes
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
