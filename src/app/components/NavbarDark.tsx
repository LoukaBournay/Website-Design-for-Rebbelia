import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import RebbeliaLogo from "../../app/assets/logo.png";

export function NavbarDark() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "À propos" },
    { to: "/testimonials", label: "Témoignages" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050d1f]/80 backdrop-blur-xl shadow-lg"
          : isHomePage
          ? "bg-transparent"
          : "bg-[#050d1f]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white"><img className="w-10" src={ RebbeliaLogo } alt="Rebbelia Logo" /></div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors ${
                  location.pathname === link.to
                    ? "text-white"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <button className="px-6 py-2.5 bg-[#2563EB] text-white rounded-full hover:bg-[#1d4ed8] transition-all hover:scale-105 active:scale-95">
                Contact
              </button>
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 bg-[#050d1f]/95 backdrop-blur-xl rounded-2xl mt-2 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-2 ${
                  location.pathname === link.to
                    ? "text-white"
                    : "text-white/55"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full px-6 py-2.5 bg-[#2563EB] text-white rounded-full hover:bg-[#1d4ed8] transition-all">
                Contact
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
