import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#CC0000] flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-semibold text-lg tracking-tight">
                Beatur<span className="font-light">Viaggi</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Agenzia di viaggi a Desio (MB) specializzata in viaggi leisure,
              corporate travel e organizzazione di congressi.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">
              Servizi
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["Viaggi Leisure", "Viaggi di Nozze", "Corporate Travel", "Congressi", "Biglietteria", "Crociere"].map((item) => (
                <li key={item}>
                  <Link href="#servizi" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">
              Contatti
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
              <li>Via Matteotti, 66</li>
              <li>20832 Desio (MB)</li>
              <li>
                <a href="tel:+390362629394" className="hover:text-white transition-colors">
                  +39 0362 629394
                </a>
              </li>
              <li>
                <a href="mailto:info@beaturviaggi.it" className="hover:text-white transition-colors">
                  info@beaturviaggi.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Beatur Viaggi. Tutti i diritti riservati.
          </p>
          <p className="text-gray-600 text-xs">
            Partner: Turisanda · MSC Crociere
          </p>
        </div>
      </div>
    </footer>
  );
}
