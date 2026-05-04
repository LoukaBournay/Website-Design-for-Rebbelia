import { Link } from "react-router";
import { Mail, Linkedin, Twitter } from "lucide-react";

export function FooterDark() {
  return (
    <footer className="bg-[#020817] text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">{/*  mettre 4 quand on elenve le commentaire de reseaux sociaux */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">Rebbelia</div>
            <p className="text-white/45 leading-relaxed">
              Tout client mérite une réponse
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Navigation</h3>
            <div className="space-y-3">
              <Link to="/services" className="block text-white/45 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/about" className="block text-white/45 hover:text-white transition-colors">
                À propos
              </Link>
              <Link to="/testimonials" className="block text-white/45 hover:text-white transition-colors">
                Témoignages
              </Link>
              <Link to="/faq" className="block text-white/45 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link to="/legal" className="block text-white/45 hover:text-white transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3 text-white/45">
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

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/45">
          <p>&copy; 2026 Rebbelia. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
