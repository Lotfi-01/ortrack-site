import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import type { ReactNode } from "react";

const SITE_URL = "https://www.ortrack.fr";
const PAGE_PATH = "/fiscalite-vente-or-france";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ortrack.app&referrer=utm_source%3Dseo%26utm_medium%3Dlanding_page%26utm_campaign%3Dfiscalite_vente_or_france";

export const metadata: Metadata = {
  title: "Fiscalité vente or France : estimez le net vendeur | OrTrack",
  description:
    "Vous détenez une pièce ou un lingot ? OrTrack vous aide à estimer le net vendeur après fiscalité française avant une vente d’or.",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  },
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Fiscalité vente or France : estimez le net vendeur",
    description:
      "Estimez le montant net avant une vente d’or physique avec OrTrack.",
    url: PAGE_URL,
    siteName: "OrTrack",
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiscalité vente or France : estimez le net vendeur",
    description:
      "Suivez vos pièces, lingots et métaux précieux. Estimez votre net vendeur après fiscalité française.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const regimes = [
  "Taxe forfaitaire sur les métaux précieux",
  "Régime des plus-values réelles",
];

const dataPoints = [
  "Prix d’achat",
  "Date d’achat",
  "Valeur estimée de vente",
  "Durée de détention",
  "Règles d’abattement",
];

const assets = [
  "Pièces d’or",
  "Lingots",
  "Lingotins",
  "Pièces d’argent",
  "Platine",
  "Palladium",
];

const faqs = [
  {
    question: "Quelle taxe sur la vente d’or en France ?",
    answer:
      "La vente d’or physique relève de règles fiscales spécifiques. OrTrack propose une estimation indicative selon les régimes simulés dans l’application.",
  },
  {
    question: "Comment calculer la plus-value sur l’or ?",
    answer:
      "Le calcul dépend du prix d’achat, de la date d’achat, de la valeur de vente estimée et de la durée de détention.",
  },
  {
    question: "Faut-il garder une facture d’achat pour l’or ?",
    answer:
      "La facture aide à renseigner le prix et la date d’achat. Ces informations améliorent la qualité de la simulation.",
  },
  {
    question: "Comment estimer le net vendeur avant une vente d’or ?",
    answer:
      "Vous pouvez saisir vos positions dans OrTrack. L’application estime la valeur du portefeuille et le montant net en cas de vente.",
  },
  {
    question: "OrTrack donne-t-il un conseil fiscal ?",
    answer:
      "Non. Les résultats sont indicatifs. Ils ne constituent pas un conseil fiscal.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FiscaliteVenteOrFrancePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#12110F] text-[#F5F0E8]">
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <BackgroundGlow />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="/fiscalite-vente-or-france"
          className="inline-flex items-center gap-2 text-xl font-black tracking-tight"
          aria-label="OrTrack"
        >
          <Image
            src="/icon.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-md"
            priority
          />
          <span>
            <span className="text-[#C9A84C]">Or</span>Track
          </span>
        </a>

        <div className="hidden sm:block">
          <GooglePlayBadge className="h-12" />
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-20">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#C9A84C]">
            Fiscalité or France
          </p>

          <h1 className="max-w-3xl text-4xl font-black tracking-tight text-[#F5F0E8] md:text-6xl md:leading-[1.04]">
            Estimez le net vendeur avant une vente d’or
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#C7BBA8]">
            Vous détenez une pièce d’or, un lingot ou des métaux précieux
            physiques ? OrTrack vous aide à suivre votre portefeuille et à
            estimer le montant net en cas de vente, selon les données saisies.
          </p>

          <div className="mt-8">
            <GooglePlayBadge className="h-14 sm:h-16" />

            <p className="mt-3 text-sm font-medium text-[#B3A692]">
              Estimez votre net vendeur directement dans l’application.
            </p>
          </div>

          <div className="mt-8 grid max-w-2xl grid-cols-3 gap-2">
            <MiniStat title="Or · Argent" label="Platine · Palladium" />
            <MiniStat title="Forfaitaire" label="vs plus-values" />
            <MiniStat title="Données" label="sur votre appareil" />
          </div>

          <p className="mt-6 max-w-2xl text-[13px] font-medium leading-6 text-[#B3A692]">
            Simulation indicative basée sur les régimes fiscaux français des
            métaux précieux. Sources : CGI art. 150 VI et 150 VL.
          </p>
        </div>

        <PhoneMockup />
      </section>

      <section
        id="simulation"
        className="relative z-10 mx-auto grid max-w-6xl gap-5 px-6 pb-20 md:grid-cols-3"
      >
        <InfoCard title="Deux régimes simulés">
          <p>
            OrTrack compare deux simulations pour les métaux précieux physiques
            en France.
          </p>

          <ul className="mt-5 space-y-3">
            {regimes.map((item) => (
              <BulletItem key={item}>{item}</BulletItem>
            ))}
          </ul>
        </InfoCard>

        <InfoCard title="Données utilisées">
          <p>
            La simulation se base sur les informations que vous renseignez dans
            l’application.
          </p>

          <ul className="mt-5 space-y-3">
            {dataPoints.map((item) => (
              <BulletItem key={item}>{item}</BulletItem>
            ))}
          </ul>
        </InfoCard>

        <InfoCard title="Portefeuille physique">
          <p>
            Ajoutez vos métaux physiques et suivez leur valeur avec le cours du
            jour.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {assets.map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#12110F] px-3 py-2 text-xs font-bold text-[#C7BBA8]"
              >
                {item}
              </span>
            ))}
          </div>
        </InfoCard>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 rounded-[2rem] border border-[#2A261F] bg-[#1C1A17] p-6 shadow-2xl shadow-black/20 md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#C9A84C]">
              Exemple indicatif
            </p>

            <h2 className="text-3xl font-black tracking-tight">
              Une estimation lisible avant de vendre
            </h2>
          </div>

          <div className="space-y-4 text-[#C7BBA8]">
            <p>
              Vous avez acheté une pièce d’or 1 800 €. Sa valeur estimée
              actuelle est de 2 400 €.
            </p>

            <p>
              OrTrack calcule une estimation du montant net selon les régimes
              simulés dans l’application.
            </p>

            <p className="text-sm text-[#9A8E7A]">
              Les résultats sont indicatifs. Ils ne constituent pas un conseil
              fiscal.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[2rem] bg-[#C9A84C] p-8 text-[#12110F] shadow-2xl shadow-[#C9A84C]/10 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight">
                Suivre vos pièces, lingots et métaux précieux
              </h2>

              <p className="mt-4 max-w-2xl leading-7">
                OrTrack vous aide à connaître la valeur estimée de votre
                portefeuille et le montant net estimé en cas de vente.
              </p>
            </div>

            <div>
              <GooglePlayBadge className="h-14 sm:h-16" />
              <p className="mt-3 text-sm font-semibold text-[#3A2D0F]">
                Estimez votre net vendeur dans l’application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#C9A84C]">
            FAQ
          </p>

          <h2 className="text-3xl font-black tracking-tight">
            Questions fréquentes
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-[#2A261F] bg-[#1C1A17]/85 p-6 shadow-xl shadow-black/10"
            >
              <h3 className="font-black text-[#F5F0E8]">{faq.question}</h3>
              <p className="mt-3 leading-7 text-[#C7BBA8]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#2A261F] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs leading-5 text-[#9A8E7A] md:flex-row md:items-center md:justify-between">
          <p>© OrTrack</p>
          <p>
            OrTrack · Fiscalité or France · Application de suivi des métaux
            précieux
          </p>
        </div>
      </footer>
    </main>
  );
}

function GooglePlayBadge({ className = "h-14" }: { className?: string }) {
  return (
    <a
      href={PLAY_STORE_URL}
      aria-label="Télécharger OrTrack sur Google Play"
      className="inline-flex w-fit items-center transition hover:scale-[1.02]"
    >
      <Image
        src="/google-play-badge.svg"
        alt="Disponible sur Google Play"
        width={270}
        height={80}
        className={`${className} w-auto`}
      />
    </a>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 opacity-80">
      <div className="absolute left-1/2 top-[-240px] h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-[#C9A84C]/10 blur-3xl" />
      <div className="absolute right-[-180px] top-[220px] h-[420px] w-[420px] rounded-full bg-[#C9A84C]/5 blur-3xl" />
      <div className="absolute bottom-[-220px] left-[-160px] h-[460px] w-[460px] rounded-full bg-[#C9A84C]/5 blur-3xl" />
    </div>
  );
}

function MiniStat({ title, label }: { title: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[#2A261F] bg-[#1C1A17]/80 p-3 shadow-xl shadow-black/10">
      <p className="text-sm font-black text-[#C9A84C]">{title}</p>
      <p className="mt-1 text-[10px] font-semibold leading-4 text-[#9A8E7A]">
        {label}
      </p>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm" aria-hidden="true">
      <div className="absolute inset-0 rounded-[3rem] bg-[#C9A84C]/20 blur-3xl" />

      <div className="relative rounded-[2.6rem] border border-[#3A3328] bg-[#0D0C0A] p-3 shadow-2xl shadow-black/50">
        <div className="rounded-[2rem] border border-[#2A261F] bg-[#12110F] p-5">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="inline-flex rounded-full border border-[#C9A84C]/25 bg-[#C9A84C]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A84C]">
                Exemple fictif
              </p>

              <p className="mt-3 text-lg font-black">Portefeuille métaux</p>
            </div>

            <div className="rounded-full bg-[#C9A84C]/15 px-3 py-1 text-xs font-black text-[#C9A84C]">
              Or
            </div>
          </div>

          <div className="rounded-3xl bg-[#1C1A17] p-5">
            <p className="text-sm font-semibold text-[#9A8E7A]">
              Valeur estimée
            </p>

            <p className="mt-2 text-3xl font-black">24 680 €</p>

            <p className="mt-2 text-xs font-semibold text-[#9A8E7A]">
              Estimation selon les données saisies
            </p>
          </div>

          <div className="mt-4 rounded-3xl border border-[#2A261F] bg-[#1C1A17] p-5">
            <p className="text-sm font-semibold text-[#9A8E7A]">
              Net vendeur estimé
            </p>

            <p className="mt-2 text-3xl font-black text-[#C9A84C]">
              22 940 €
            </p>

            <p className="mt-2 text-xs leading-5 text-[#9A8E7A]">
              Simulation indicative. Ne constitue pas un conseil fiscal.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-[#1C1A17] p-4">
              <p className="text-xs font-semibold text-[#9A8E7A]">Or</p>
              <p className="mt-1 font-black">78%</p>
            </div>

            <div className="rounded-2xl bg-[#1C1A17] p-4">
              <p className="text-xs font-semibold text-[#9A8E7A]">Argent</p>
              <p className="mt-1 font-black">22%</p>
            </div>
          </div>

          <div className="mt-5 w-full rounded-full bg-[#C9A84C] py-3 text-center text-sm font-black text-[#12110F]">
            Voir le net vendeur
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="rounded-[2rem] border border-[#2A261F] bg-[#1C1A17]/85 p-6 shadow-xl shadow-black/10">
      <h2 className="text-xl font-black tracking-tight text-[#F5F0E8]">
        {title}
      </h2>

      <div className="mt-4 leading-7 text-[#C7BBA8]">{children}</div>
    </article>
  );
}

function BulletItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
      <span>{children}</span>
    </li>
  );
}