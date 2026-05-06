import { Link } from "react-router";

export function FooterDark() {
  return (
    <footer className="border-t border-[#1E4E8C]/10 bg-[#EEF3F8] text-[#172033]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">{/*  mettre 4 quand on elenve le commentaire de reseaux sociaux */}
          <div>
            <div className="mb-4 text-2xl font-bold text-[#172033]">Rebbelia</div>
            <p className="leading-relaxed text-[#5E6B82]">
              Tout client mérite une réponse
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#172033]">Navigation</h3>
            <div className="space-y-3">
              <Link to="/services" className="block text-[#5E6B82] transition-colors hover:text-[#1E4E8C]">
                Services
              </Link>
              <Link to="/about" className="block text-[#5E6B82] transition-colors hover:text-[#1E4E8C]">
                À propos
              </Link>
              <Link to="/testimonials" className="block text-[#5E6B82] transition-colors hover:text-[#1E4E8C]">
                Témoignages
              </Link>
              <Link to="/faq" className="block text-[#5E6B82] transition-colors hover:text-[#1E4E8C]">
                FAQ
              </Link>
              <Link to="/legal" className="block text-[#5E6B82] transition-colors hover:text-[#1E4E8C]">
                Mentions légales
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#172033]">Contact</h3>
            <div className="space-y-3 text-[#5E6B82]">
              <p>rebbelia@rebbelia.com</p>
              <p>+33 7 82 39 43 68</p>
            </div>
          </div>

          {/* <div>
            <h3 className="font-semibold mb-4 text-white">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white/45 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/45 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/45 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div> */}
        </div>

        <div className="mt-12 border-t border-[#1E4E8C]/10 pt-8 text-center text-[#5E6B82]">
          <p>&copy; 2026 Rebbelia. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

