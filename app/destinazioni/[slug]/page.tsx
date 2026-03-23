import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";

const destinations: Record<string, { name: string; tag: string; img: string; desc: string }> = {
  maldive: {
    name: "Maldive",
    tag: "Mare & Relax",
    img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1920&auto=format&fit=crop",
    desc: "Atolli di sabbia bianca, acque cristalline e resort esclusivi sull'oceano. Le Maldive sono la destinazione perfetta per chi cerca il relax assoluto lontano da tutto.",
  },
  santorini: {
    name: "Santorini",
    tag: "Grecia",
    img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1920&auto=format&fit=crop",
    desc: "Case bianche affacciate sul mar Egeo, tramonti leggendari e vini vulcanici. Santorini è il cuore romantico della Grecia, ideale per coppie e viaggi di nozze.",
  },
  giappone: {
    name: "Giappone",
    tag: "Asia & Cultura",
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1920&auto=format&fit=crop",
    desc: "Templi millenari, tecnologia all'avanguardia, cerimonie del tè e fiori di ciliegio. Il Giappone è un viaggio tra passato e futuro che lascia il segno.",
  },
  dolomiti: {
    name: "Dolomiti",
    tag: "Italia · Montagna",
    img: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1920&auto=format&fit=crop",
    desc: "Patrimonio UNESCO, vette spettacolari e rifugi alpini accoglienti. Le Dolomiti offrono esperienze indimenticabili in ogni stagione, d'estate e d'inverno.",
  },
  marrakech: {
    name: "Marrakech",
    tag: "Marocco",
    img: "https://images.unsplash.com/photo-1539020140153-e479b8f22b66?q=80&w=1920&auto=format&fit=crop",
    desc: "Souk colorati, palazzi nascosti, spezie e profumi. Marrakech è una città che inebria i sensi — perfetta per un weekend lungo o una fuga esotica.",
  },
  "new-york": {
    name: "New York",
    tag: "USA · City Break",
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1920&auto=format&fit=crop",
    desc: "La Grande Mela: Broadway, Central Park, musei di fama mondiale e una vita notturna inesauribile. New York è un'esperienza unica che vale almeno un viaggio nella vita.",
  },
  "costiera-amalfitana": {
    name: "Costiera Amalfitana",
    tag: "Italia · Lusso",
    img: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=1920&auto=format&fit=crop",
    desc: "Scogliere a picco sul mare, limoni profumati, borghi pittoreschi. La Costiera Amalfitana è il meglio dell'Italia in un paesaggio Patrimonio UNESCO.",
  },
  thailandia: {
    name: "Thailandia",
    tag: "Asia · Esotico",
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1920&auto=format&fit=crop",
    desc: "Spiagge selvagge, templi dorati, street food straordinario e natura lussureggiante. La Thailandia è la destinazione asiatica più amata dai viaggiatori italiani.",
  },
};

export async function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dest = destinations[slug];
  if (!dest) return { title: "Destinazione · BEA TUR" };
  return {
    title: `${dest.name} · BEA TUR Viaggi`,
    description: dest.desc,
  };
}

export default async function DestinazionePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dest = destinations[slug];
  if (!dest) notFound();

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <img src={dest.img} alt={dest.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-10 pb-16 w-full">
          <p className="text-white/50 text-xs uppercase tracking-[0.3em] mb-3">{dest.tag}</p>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight leading-none mb-4">
            {dest.name}
          </h1>
          <p className="text-white/60 text-lg font-light max-w-lg">{dest.desc}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#CC0000] mb-3">
              Vuoi partire per {dest.name}?
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight mb-4">
              Costruiamo il tuo{" "}
              <span className="font-black">viaggio su misura</span>
            </h2>
            <p className="text-gray-500 text-base font-light mb-8 leading-relaxed">
              Dal 1988 organizziamo viaggi personalizzati in tutto il mondo. Contattaci per un preventivo gratuito: ti aiutiamo a trovare voli, hotel e tour al miglior prezzo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contatti"
                className="px-7 py-3.5 bg-[#CC0000] text-white font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#aa0000] transition-colors text-center"
              >
                Richiedi preventivo gratuito
              </Link>
              <a
                href="tel:+390362629394"
                className="flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-700 text-sm rounded-sm hover:border-[#CC0000] hover:text-[#CC0000] transition-colors"
              >
                <Phone className="h-4 w-4" />
                0362 629394
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back */}
      <div className="pb-12 px-6 md:px-10 max-w-[1120px] mx-auto">
        <Link href="/" className="text-sm text-gray-400 hover:text-[#CC0000] transition-colors">
          ← Torna alla home
        </Link>
      </div>
    </main>
  );
}
