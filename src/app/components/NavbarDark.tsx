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
          ? "border-b border-[#1E4E8C]/10 bg-[#F7F9FC]/88 backdrop-blur-xl shadow-[0_18px_50px_rgba(23,32,51,0.08)]"
          : isHomePage
          ? "bg-transparent"
          : "border-b border-[#1E4E8C]/10 bg-[#F7F9FC]/95"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[#172033]"><img className="w-70" src={ RebbeliaLogo } alt="Rebbelia Logo" /></div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors ${
                  location.pathname === link.to
                    ? "text-[#172033]"
                    : "text-[#5E6B82] hover:text-[#1E4E8C]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <button className="px-6 py-2.5 bg-[#1E4E8C] text-white rounded-full hover:bg-[#2F7A5F] transition-all hover:scale-105 active:scale-95">
                Contact
              </button>
            </Link>
          </div>

          <button
            className="md:hidden text-[#172033]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-2 space-y-4 rounded-2xl border border-[#1E4E8C]/10 bg-white/95 p-6 pb-6 shadow-[0_20px_60px_rgba(23,32,51,0.08)] backdrop-blur-xl md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-2 ${
                  location.pathname === link.to
                    ? "text-[#172033]"
                    : "text-[#5E6B82]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full px-6 py-2.5 bg-[#1E4E8C] text-white rounded-full hover:bg-[#2F7A5F] transition-all">
                Contact
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
