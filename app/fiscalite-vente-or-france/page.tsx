import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import type { ReactNode } from "react";

const SITE_URL = "https://www.ortrack.fr";
const PAGE_PATH = "/fiscalite-vente-or-france";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

// Keep null until the owner approves a dated fiscal review. A build date is not a legal review.
const FISCAL_REVIEW_DATE: string | null = null;

type PlayCtaLocation = "header" | "hero" | "mid";

function getPlayStoreUrl(location: PlayCtaLocation): string {
  const referrer = new URLSearchParams({
    utm_source: "ortrack.fr",
    utm_medium: "website",
    utm_campaign: `fiscalite_fr_${location}`,
  });

  return `https://play.google.com/store/apps/details?id=com.ortrack.app&referrer=${encodeURIComponent(referrer.toString())}`;
}

const FISCAL_SOURCES = {
  flatTax:
    "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069577/LEGISCTA000006191581/",
  crds:
    "https://www.economie.gouv.fr/particuliers/impots-et-fiscalite/gerer-mes-autres-impots-et-taxes/vente-dobjets-precieux-quelle",
  capitalGains:
    "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037988296/",
  allowance:
    "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047970756/",
  incomeTaxRate:
    "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030061684/",
  socialContributions:
    "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053584839/",
  csgRate:
    "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054336623/",
  crdsCapitalGains:
    "https://www.legifrance.gouv.fr/loda/id/LEGITEXT000005620212/",
  solidarityRate:
    "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037949145/",
  proof:
    "https://bofip.impots.gouv.fr/bofip/4161-PGP.html/identifiant=BOI-RPPM-PVBMC-20-20-20140401",
  classification:
    "https://bofip.impots.gouv.fr/bofip/4151-PGP.html/identifiant=BOI-RPPM-PVBMC-20-10-20181231",
};

export const metadata: Metadata = {
  title: "Vente d’or : taxe de 11,5 % ou plus-value ? | OrTrack",
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

const dataPoints = [
  "Date et prix d’acquisition justifiés, ou preuve d’une détention de plus de vingt-deux ans",
  "Identification suffisante du bien ou du lot vendu",
];

const faqs = [
  {
    question: "Quelle taxe sur la vente d’or en France ?",
    answer:
      "Pour un particulier résident fiscal français, une vente relevant de la catégorie des métaux précieux est en principe soumise à 11,5 % du prix de vente : 11 % de taxe et 0,5 % de CRDS. L’option pour les plus-values est soumise à conditions. Des exonérations spécifiques existent, notamment pour certaines cessions à des institutions publiques.",
    sourceHref: FISCAL_SOURCES.flatTax,
    sourceLabel: "CGI, art. 150 VI, 150 VJ et 150 VK",
  },
  {
    question: "Vente d’or : existe-t-il une exonération jusqu’à 5 000 € ?",
    answer:
      "L’article 150 VJ, 4° vise les bijoux, objets d’art, de collection ou d’antiquité lorsque le prix de cession n’excède pas 5 000 €. Il ne vise pas les métaux précieux de l’article 150 VI, I, 1°. Le seul fait de vendre un lingot ou une pièce relevant de cette catégorie pour moins de 5 000 € ne donne donc pas cette exonération. La qualification du produit doit être vérifiée.",
    sourceHref: FISCAL_SOURCES.flatTax,
    sourceLabel: "CGI, art. 150 VI, I et 150 VJ, 4°",
  },
  {
    question: "Faut-il garder une facture d’achat pour l’or ?",
    answer:
      "Conservez les justificatifs de la date et du prix d’acquisition, ou d’une détention de plus de vingt-deux ans. Pour les métaux précieux, le bien ou le lot doit aussi être suffisamment individualisé : numéro, emballage scellé identifiable ou autre élément admis. Enregistrer un achat dans OrTrack ne remplace pas ces preuves et ne garantit pas l’accès au régime des plus-values.",
    sourceHref: FISCAL_SOURCES.proof,
    sourceLabel: "BOFiP, BOI-RPPM-PVBMC-20-20, notamment §90",
  },
  {
    question: "La vente d’or est-elle exonérée après 22 ans ?",
    answer:
      "Dans le régime des plus-values, l’abattement de 5 % par année révolue au-delà de la deuxième conduit à une exonération après vingt-deux ans de détention. L’option reste soumise aux justificatifs et à l’identification du bien ou du lot. L’ancienneté saisie dans une application ne suffit pas à établir ce droit.",
    sourceHref: FISCAL_SOURCES.allowance,
    sourceLabel: "CGI, art. 150 VC ; conditions de l’art. 150 VL et du BOFiP ci-dessus",
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
          className="inline-flex items-center gap-2.5 text-2xl font-black tracking-tight md:text-3xl"
          aria-label="OrTrack"
        >
          <Image
            src="/icon.png"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded-md"
            priority
          />
          <span>
            <span className="text-[#C9A84C]">Or</span>Track
          </span>
        </a>

        <div className="hidden sm:block">
          <GooglePlayBadge location="header" className="h-12" />
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
            Vous détenez des pièces ou des lingots ? Sur Android, OrTrack vous
            aide à enregistrer vos achats, suivre la valeur de votre portefeuille
            et explorer des simulations fiscales indicatives pour les produits
            éligibles.
          </p>

          <div className="mt-8">
            <GooglePlayBadge location="hero" className="h-14 sm:h-16" />

            <p className="mt-3 text-sm font-medium text-[#B3A692]">
              Gratuit : jusqu’à 5 achats enregistrés et 2 alertes de prix.
              Premium : simulations fiscales par achat et comparaison détaillée
              des régimes, pour les produits éligibles.
            </p>
            <p className="mt-3 text-sm font-medium text-[#B3A692]">
              Ajoutez votre première pièce ou votre premier lingot.
            </p>
          </div>

          <div className="mt-8 grid max-w-2xl grid-cols-3 gap-2">
            <MiniStat title="Or · Argent" label="Platine · Palladium" />
            <MiniStat title="Forfaitaire" label="vs plus-values" />
            <MiniStat title="Simulation" label="indicative" />
          </div>

          <p className="mt-6 max-w-2xl text-[13px] font-medium leading-6 text-[#C7BBA8]">
            Les explications ci-dessous concernent les ventes occasionnelles de
            particuliers résidents fiscaux français, hors activité
            professionnelle. La valeur au cours du métal, l’estimation après
            impôt et l’offre réelle de rachat sont des montants distincts.
            Le palladium est suivi sans simulation fiscale ; la couverture
            fiscale du platine dépend du produit.
          </p>
          {FISCAL_REVIEW_DATE && (
            <p className="mt-3 text-sm text-[#C7BBA8]">
              Revue fiscale approuvée le {FISCAL_REVIEW_DATE}.
            </p>
          )}
        </div>

        <PhoneMockup />
      </section>

      <section
        id="simulation"
        className="relative z-10 mx-auto grid max-w-6xl gap-5 px-6 pb-20 md:grid-cols-3"
      >
        <InfoCard title="Taxe forfaitaire : 11,5 %">
          <p>
            Pour une vente imposable dans la catégorie des métaux précieux, la
            taxe est calculée sur le prix de vente, même sans plus-value : 11 %
            de taxe forfaitaire et 0,5 % de CRDS.
          </p>
          <p className="mt-4">
            Cette catégorie comprend notamment les lingots d’or et les monnaies
            d’or ou d’argent postérieures à 1800. Les bijoux et objets de
            collection suivent d’autres règles. La catégorie fiscale d’un jeton
            ou d’un produit particulier ne se déduit pas de son seul nom.
          </p>
          <p className="mt-4">
            Le seuil de 5 000 € et les autres exonérations sont précisés dans la
            FAQ ci-dessous.
          </p>
          <p className="mt-5 text-sm">
            <FiscalSource href={FISCAL_SOURCES.flatTax}>CGI, art. 150 VI, 150 VJ et 150 VK</FiscalSource>
            {" · "}
            <FiscalSource href={FISCAL_SOURCES.crds}>CRDS : ministère de l’Économie</FiscalSource>
            {" · "}
            <FiscalSource href={FISCAL_SOURCES.classification}>BOFiP, classification, §20 à 70</FiscalSource>
          </p>
        </InfoCard>

        <InfoCard title="Plus-value : une option sous conditions">
          <p>
            L’option pour le régime des plus-values sur biens meubles peut
            remplacer la taxe forfaitaire si les conditions sont remplies :
          </p>

          <ul className="mt-5 space-y-3">
            {dataPoints.map((item) => (
              <BulletItem key={item}>{item}</BulletItem>
            ))}
          </ul>
          <p className="mt-4">
            La plus-value correspond à la différence entre prix de vente et
            coût d’acquisition, selon les règles applicables. Un abattement de
            5 % par année révolue au-delà de la deuxième conduit à une exonération
            après vingt-deux ans, sous réserve des preuves nécessaires.
          </p>
          <p className="mt-5 text-sm">
            <FiscalSource href={FISCAL_SOURCES.flatTax}>CGI, art. 150 VL</FiscalSource>
            {" · "}
            <FiscalSource href={FISCAL_SOURCES.capitalGains}>CGI, art. 150 UA</FiscalSource>
            {" · "}
            <FiscalSource href={FISCAL_SOURCES.allowance}>CGI, art. 150 VC</FiscalSource>
            {" · "}
            <FiscalSource href={FISCAL_SOURCES.proof}>BOFiP, justificatifs, §90</FiscalSource>
          </p>
        </InfoCard>

        <InfoCard title="Valeur estimée et prix de rachat">
          <p>
            La valorisation au cours du métal est une estimation fondée sur les
            cours disponibles et les données de vos achats. Elle ne constitue
            pas une offre de rachat.
          </p>
          <p className="mt-4">
            Une estimation après fiscalité ajoute des hypothèses de taxation.
            Les frais, la marge du professionnel, l’état et les caractéristiques
            du produit peuvent modifier le montant réellement reçu. Ne supposez
            pas que ces coûts sont déduits par la simulation.
          </p>
          <p className="mt-4">
            Demandez une offre au professionnel et vérifiez vos justificatifs
            avant de vendre.
          </p>
        </InfoCard>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 rounded-[2rem] border border-[#2A261F] bg-[#1C1A17] p-6 shadow-2xl shadow-black/20 md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#C9A84C]">
              Exemple indicatif
            </p>

            <h2 className="text-3xl font-black tracking-tight">
              Un exemple chiffré avant de vendre
            </h2>
          </div>

          <div className="space-y-4 text-[#C7BBA8]">
            <p>
              Hypothèse : vente en octobre 2026 par un particulier résident fiscal
              français, affilié à un régime obligatoire français de sécurité
              sociale et soumis aux prélèvements sociaux ordinaires. Il vend une
              pièce d’or frappée après 1800 relevant des métaux précieux, achetée
              1 800 € et détenue depuis cinq années révolues, pour un prix fictif
              de 2 400 €. La vente est imposable, sans exonération particulière ;
              les frais et la marge de rachat ne sont pas pris en compte.
            </p>

            <p>
              Au forfait, la base est le prix de vente : 2 400 €. La taxe et la
              CRDS représentent 2 400 € × 11,5 % = 276 €. Il reste 2 124 € après
              cette taxation, avant les frais exclus de l’exemple.
            </p>

            <p>
              Pour l’option plus-values, en supposant les justificatifs et
              l’identification suffisants : plus-value de 600 €, abattement de
              15 % (trois années au-delà de la deuxième), soit 90 € ; la base
              après abattement est de 510 €.
            </p>

            <p>
              Dans ce cas, le taux global est de 36,2 % : 19 % d’impôt sur le
              revenu, 9,2 % de CSG, 0,5 % de CRDS et 7,5 % de prélèvement de
              solidarité. Sur 510 €, cela représente 96,90 € d’impôt sur le
              revenu et 87,72 € de prélèvements sociaux, soit 184,62 € au total.
              Il reste 2 215,38 € après cette taxation, avant les frais exclus.
              Le forfait représente ici 276 €, contre 184,62 € sur la plus-value,
              uniquement si l’option et toutes les hypothèses sont valables.
            </p>

            <p className="text-sm">
              Le taux général de CSG de 10,6 % ne s’applique pas à cette
              catégorie de plus-values, qui relève de la dérogation à 9,2 %.
              Certaines affiliations sociales étrangères peuvent ouvrir une
              exonération de CSG et de CRDS sous conditions : elles sont exclues
              de cet exemple. Votre situation doit être vérifiée avant une vente.
            </p>

            <p className="text-sm">
              <FiscalSource href={FISCAL_SOURCES.flatTax}>CGI, art. 150 VK et 150 VL</FiscalSource>
              {" · "}
              <FiscalSource href={FISCAL_SOURCES.allowance}>Abattement : CGI, art. 150 VC</FiscalSource>
              {" · "}
              <FiscalSource href={FISCAL_SOURCES.incomeTaxRate}>IR : CGI, art. 200 B</FiscalSource>
              {" · "}
              <FiscalSource href={FISCAL_SOURCES.socialContributions}>CSS, art. L136-7, I, 2°, I ter et VI</FiscalSource>
              {" · "}
              <FiscalSource href={FISCAL_SOURCES.csgRate}>CSG : CSS, art. L136-8, IV, 2°</FiscalSource>
              {" · "}
              <FiscalSource href={FISCAL_SOURCES.crdsCapitalGains}>CRDS : ordonnance 96-50, art. 16 et 19</FiscalSource>
              {" · "}
              <FiscalSource href={FISCAL_SOURCES.solidarityRate}>Solidarité : CGI, art. 235 ter</FiscalSource>
            </p>

            <p className="text-sm text-[#9A8E7A]">
              Exemple pédagogique fictif, indépendant des résultats de
              l’application. Il ne constitue pas un conseil fiscal.
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
                Enregistrez vos achats et suivez votre portefeuille sur Android.
                Premium donne accès aux simulations fiscales par achat et à la
                comparaison détaillée des régimes pour les produits éligibles.
              </p>
            </div>

            <div>
              <GooglePlayBadge location="mid" className="h-14 sm:h-16" />
              <p className="mt-3 text-sm font-semibold text-[#3A2D0F]">
                Ajoutez votre première pièce ou votre premier lingot.
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
              {faq.sourceHref && (
                <p className="mt-3 text-sm text-[#C7BBA8]">
                  <FiscalSource href={faq.sourceHref}>{faq.sourceLabel}</FiscalSource>
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#2A261F] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs leading-5 text-[#9A8E7A] md:flex-row md:items-center md:justify-between">
          <p>© OrTrack</p>
          <p>
            OrTrack · Fiscalité or France · Application de suivi des métaux
            précieux · Conçu en France · Données saisies par l’utilisateur
          </p>
          <a className="underline underline-offset-4" href="mailto:contact@ortrack.fr">
            Contact : contact@ortrack.fr
          </a>
          {/* Legal/privacy drafts are not approved. Do not link them as public notices. */}
        </div>
      </footer>
    </main>
  );
}

function GooglePlayBadge({
  location,
  className = "h-14",
}: {
  location: PlayCtaLocation;
  className?: string;
}) {
  return (
    <a
      href={getPlayStoreUrl(location)}
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

function FiscalSource({ href, children }: { href: string; children: ReactNode }) {
  return <a className="underline underline-offset-4" href={href}>{children}</a>;
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
