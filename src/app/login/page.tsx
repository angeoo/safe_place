import Link from "next/link";

export default function Login() {
  return (
    <div className="relative isolate overflow-hidden py-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
        <div className="absolute right-[-10%] top-32 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[0.9fr,1fr] md:gap-16">
        <div className="hidden md:block">
          <div className="rounded-[40px] border border-line/70 bg-white/80 p-10 shadow-soft backdrop-blur">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">My Safe Place</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-ink">Reviens là où tout peut être dit</h1>
            <p className="mt-4 text-ink/70">
              Discute librement, trouve un pro, continue ton parcours. Réouvre ton espace confidentiel et retrouve toutes tes discussions.
            </p>
            <div className="mt-10 grid gap-4 text-sm text-ink/70">
              <div className="rounded-3xl border border-brand-100 bg-brand-50/80 px-5 py-4">
                <div className="font-semibold text-ink">+2500 personnes soutenues</div>
                <p>Des cercles d&apos;échange actifs jour et nuit.</p>
              </div>
              <div className="rounded-3xl border border-line/70 bg-white/90 px-5 py-4">
                <div className="font-semibold text-ink">Consultations vidéo sécurisées</div>
                <p>Données protégées, thérapeutes certifiés, paiement simplifié.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="mx-auto w-full max-w-md rounded-[32px] border border-line/60 bg-white/95 p-8 shadow-soft backdrop-blur">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-ink">Connexion</h2>
              <p className="mt-2 text-sm text-ink/60">Reste anonyme si tu le souhaites — l&apos;email est privé et sert à sécuriser ton compte.</p>
            </div>
            <form className="mt-8 grid gap-5">
              <label className="grid gap-2 text-sm font-medium text-ink">
                Email
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-ink/40">📧</span>
                  <input type="email" name="email" className="w-full pl-11" placeholder="hello@mysafeplace.fr" required />
                </div>
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink">
                Mot de passe
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-ink/40">🔒</span>
                  <input type="password" name="password" className="w-full pl-11" placeholder="••••••••" required />
                </div>
              </label>
              <div className="flex items-center justify-between text-xs text-ink/60">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded-lg border-line/80 text-brand focus:ring-brand/30" />
                  Se souvenir de moi
                </label>
                <Link href="/forgot-password" className="font-semibold text-brand hover:text-brand-600">J&apos;ai oublié mon mot de passe</Link>
              </div>
              <button className="btn btn-brand w-full" type="submit">Se connecter</button>
            </form>
            <div className="my-6 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-ink/40">
              <span className="h-px flex-1 bg-line-strong/60" />
              ou
              <span className="h-px flex-1 bg-line-strong/60" />
            </div>
            <div className="grid gap-3">
              <button type="button" className="btn btn-ghost w-full border-line/80 text-ink">
                <span className="text-lg">🟢</span> Continuer avec Google
              </button>
              <button type="button" className="btn btn-ghost w-full border-line/80 text-ink">
                <span className="text-lg text-blue-600">📘</span> Continuer avec Facebook
              </button>
            </div>
            <div className="mt-6 text-center text-sm text-ink/60">
              Pas encore de compte ?{" "}
              <Link className="font-semibold text-brand hover:text-brand-600" href="/signup">
                Créer un compte
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
