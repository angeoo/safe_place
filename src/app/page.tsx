import Image from "next/image";
import Link from "next/link";

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

/*type Professional = {
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
];*/

export default function HomePage() {
  return (
    <>
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="flex flex-col order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-ink">
              Your Safe Place to talk about mental health
            </h1>
            <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-base lg:text-lg text-ink-soft leading-relaxed">
              Connect directly with licensed professionals through secure video consultations. Join our free, anonymous community forum for peer support. Your healing journey starts here.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col gap-3 sm:gap-4 w-full sm:w-fit">
              <Link href="/booking" className="btn px-8 sm:px-10 md:px-12 py-3 md:py-4 text-sm md:text-base lg:text-lg w-full sm:w-72 md:w-80 font-semibold text-ink" style={{ backgroundColor: '#fadf8f' }}>Consulter un professionnel</Link>
              <Link href="/forum" className="btn px-6 sm:px-8 md:px-10 py-3 md:py-4 text-sm md:text-base lg:text-lg w-full sm:w-64 md:w-72 font-semibold text-ink" style={{ backgroundColor: '#f3dea0' }}>Participer à un forum</Link>
            </div>
            <div className="mt-6 md:mt-8 flex items-center gap-4">
              <div className="flex -space-x-3 flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-200 border-2 border-white"></div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-200 border-2 border-white"></div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-200 border-2 border-white"></div>
              </div>
              <div className="text-xs sm:text-sm">
                <p className="text-gray-500">Coach de vie, sexologue,</p>
                <p className="text-gray-500">psychologue à votre écoute 7/7</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src="/Translate-2--Streamline-Djakarta.png"
              alt="Person speaking with a specialist online"
              width={532}
              height={568}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md"
              priority
            />
          </div>
        </div>
      </div>

      <div className="w-full px-0 py-6">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="p-6 md:p-8 lg:p-12" style={{ backgroundColor: '#fef7f7' }}>
            <div>
              <h2 className="text-xl text-center py-5 sm:text-2xl md:text-3xl font-bold text-ink mb-3 md:mb-4">T&apos;as une question</h2>
              <p className="text-sm sm:text-base md:text-base lg:text-lg text-ink-soft leading-relaxed">
                Des professionnels de santé et un forum de discussion libres et anonymes pour vous écouter et répondre
              </p>
            </div>
            <div className="mt-6 md:mt-8 hidden md:flex gap-6 md:gap-8 items-center">
              <div className="flex flex-col gap-2 md:gap-3">
                <Link href="/forum/new" className="btn py-3 md:py-4 text-sm md:text-base font-semibold text-ink" style={{ backgroundColor: '#fadf8f' }}>
                  Poser une question
                </Link>
                <Link href="/forum" className="btn py-3 md:py-4 text-sm md:text-base font-semibold text-ink" style={{ backgroundColor: '#f3dea0' }}>
                  Consulter le forum
                </Link>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/Asking-A-Question-2--Streamline-Djakarta.png"
                  alt="Asking a question illustration"
                  width={243}
                  height={218}
                  className="w-32 md:w-48 h-auto"
                />
              </div>
            </div>
            <div className="mt-6 md:hidden flex flex-col gap-2 md:gap-3">
              <Link href="/forum/new" className="btn py-3 md:py-4 text-sm md:text-base w-full font-semibold text-ink" style={{ backgroundColor: '#fadf8f' }}>
                Poser une question
              </Link>
              <Link href="/forum" className="btn py-3 md:py-4 text-sm md:text-base w-full font-semibold text-ink" style={{ backgroundColor: '#f3dea0' }}>
                Consulter le forum
              </Link>
            </div>
          </div>

          <div className="bg-brand p-6 py-8 md:p-8 lg:p-12">
            <div>
              <h2 className="text-xl text-center py-5 sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Discuter avec des spécialistes</h2>
              <p className="text-sm sm:text-base md:text-base lg:text-lg text-white leading-relaxed">
                Des professionnels de santé et un forum de discussion libres et anonymes pour vous écouter et répondre
              </p>
            </div>
            <div className="mt-6 md:mt-8 hidden md:flex gap-6 md:gap-8 items-center">
              <Link href="/booking" className="btn py-3 md:py-4 bg-white text-ink hover:bg-gray-100 font-semibold text-sm md:text-base lg:text-lg">
                Consulter un professionnel
              </Link>
              <div className="flex-shrink-0">
                <Image
                  src="/Assistant-1--Streamline-Milano.png"
                  alt="AI Assistant Robot"
                  width={243}
                  height={218}
                  className="w-32 md:w-48 h-auto"
                />
              </div>
            </div>
            <div className="mt-6 md:hidden">
              <Link href="/booking" className="btn bg-white text-ink white-space:nowrap hover:bg-gray-100 font-semibold text-sm md:text-base lg:text-lg w-full">
                Consulter un professionnel
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {categoryItems.map((category) => (
            <button
              key={category}
              className="chip h-12 md:h-14 bg-brand text-ink hover:opacity-90 transition-opacity text-xs sm:text-sm md:text-base font-semibold rounded-full">
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center" style={{ backgroundColor: '#fef7f7' }}>
          <div className="flex justify-center order-2 lg:order-1">
            <Image
              src="/Translate-3--Streamline-Brooklyn.png"
              alt="Communauté diverse"
              width={620}
              height={527}
              className="w-full max-w-sm md:max-w-md lg:max-w-2xl object-contain"
              priority
            />
          </div>
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-2xl pb-5 sm:text-3xl md:text-4xl font-extrabold text-ink leading-tight">
              Where you can easily talk about your sexuality and mental health with about us
            </h2>
            <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-base lg:text-lg text-ink-soft leading-relaxed">
              Des professionnels de santé et un forum de discussion libres et anonymes pour vous écouter et répondre. Un espace sûr pour déposer ce que vous traversez.
            </p>
            <p className="mt-4 text-sm sm:text-base md:text-base lg:text-lg text-ink-soft leading-relaxed">
              Des professionnels de santé et un forum de discussion libres et anonymes pour vous écouter et répondre. Un espace sûr pour déposer ce que vous traversez.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink leading-tight mb-4">
              Discussion du moment
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Forum posts will be dynamically populated from API */}
            <div className="rounded-2xl md:rounded-3xl bg-brand p-4 md:p-6 pb-8 md:pb-10 text-white shadow-soft hover:shadow-lg transition-shadow">
              <p className="text-xs md:text-sm font-medium mb-3">Par Adams 21</p>
              <p className="text-sm md:text-base leading-relaxed mb-4">
                Je suis depressive depuis que j&apos;ai changé d&apos;environnement
              </p>
              <div className="flex gap-4 text-xs font-medium">
                <span>Messages: 5</span>
                <span>Réponses: 10</span>
                <span>Réaction: 10</span>
              </div>
            </div>
            <div className="rounded-2xl md:rounded-3xl bg-brand p-4 md:p-6 pb-8 md:pb-10 text-white shadow-soft hover:shadow-lg transition-shadow">
              <p className="text-xs md:text-sm font-medium mb-3">Par Adams 21</p>
              <p className="text-sm md:text-base leading-relaxed mb-4">
                Je suis depressive depuis que j&apos;ai changé d&apos;environnement
              </p>
              <div className="flex gap-4 text-xs font-medium">
                <span>Messages: 5</span>
                <span>Réponses: 10</span>
                <span>Réaction: 10</span>
              </div>
            </div>
            <div className="rounded-2xl md:rounded-3xl bg-brand p-4 md:p-6 pb-8 md:pb-10 text-white shadow-soft hover:shadow-lg transition-shadow">
              <p className="text-xs md:text-sm font-medium mb-3">Par Adams 21</p>
              <p className="text-sm md:text-base leading-relaxed mb-4">
                Je suis depressive depuis que j&apos;ai changé d&apos;environnement
              </p>
              <div className="flex gap-4 text-xs font-medium">
                <span>Messages: 5</span>
                <span>Réponses: 10</span>
                <span>Réaction: 10</span>
              </div>
            </div>
            <div className="rounded-2xl md:rounded-3xl p-4 md:p-6 text-ink shadow-soft hover:shadow-lg transition-shadow" style={{ backgroundColor: '#fef7f7' }}>
              <p className="text-xs md:text-sm font-medium mb-3">Par Adams 21</p>
              <p className="text-sm md:text-base leading-relaxed mb-4">
                Je suis depressive depuis que j&apos;ai changé d&apos;environnement
              </p>
              <div className="flex gap-4 text-xs font-medium">
                <span>Messages: 5</span>
                <span>Réponses: 10</span>
                <span>Réaction: 10</span>
              </div>
            </div>
            <div className="rounded-2xl md:rounded-3xl p-4 md:p-6 text-ink shadow-soft hover:shadow-lg transition-shadow" style={{ backgroundColor: '#fef7f7' }}>
              <p className="text-xs md:text-sm font-medium mb-3">Par Adams 21</p>
              <p className="text-sm md:text-base leading-relaxed mb-4">
                Je suis depressive depuis que j&apos;ai changé d&apos;environnement
              </p>
              <div className="flex gap-4 text-xs font-medium">
                <span>Messages: 5</span>
                <span>Réponses: 10</span>
                <span>Réaction: 10</span>
              </div>
            </div>
            <div className="rounded-2xl md:rounded-3xl p-4 md:p-6 text-ink shadow-soft hover:shadow-lg transition-shadow" style={{ backgroundColor: '#fef7f7' }}>
              <p className="text-xs md:text-sm font-medium mb-3">Par Adams 21</p>
              <p className="text-sm md:text-base leading-relaxed mb-4">
                Je suis depressive depuis que j&apos;ai changé d&apos;environnement
              </p>
              <div className="flex gap-4 text-xs font-medium">
                <span>Messages: 5</span>
                <span>Réponses: 10</span>
                <span>Réaction: 10</span>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/Question-Mark-Line--Streamline-Variable-Scribbles.png"
                alt="Question mark"
                width={120}
                height={120}
                className="w-26 md:w-40 h-auto"
              />
            </div>
            <Link href="/forum" className="btn btn-brand px-8 md:px-10 py-3 md:py-4 text-sm md:text-base font-semibold w-72 md:w-96">
              Participer au Forum
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
