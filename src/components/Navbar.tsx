import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@lib/utils";
import { NAV_ITEMS } from "@/constants/navigation";

const SCROLL_THRESHOLD = 50;
const ACTIVE_SECTION_OFFSET = 100;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top <= ACTIVE_SECTION_OFFSET &&
            rect.bottom >= ACTIVE_SECTION_OFFSET
          );
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="group relative"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              &lt;M.A /&gt;
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 group hover:text-cyan-400 animate-fade-in-down cursor-pointer"
                )}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <span className="relative z-10">{item.name}</span>
                {activeSection === item.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 animate-slide-in" />
                )}
                <span className="absolute inset-0 bg-cyan-400/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors duration-300"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              {isOpen ? (
                <X className="w-6 h-6 text-cyan-400" />
              ) : (
                <Menu className="w-6 h-6 text-cyan-400" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-background/95 backdrop-blur-xl border-b border-cyan-500/20">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={cn(
                "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                "hover:bg-cyan-500/10 hover:text-cyan-400 hover:translate-x-2",
                activeSection === item.href.substring(1) &&
                  "bg-cyan-500/20 text-cyan-400",
                isOpen && "animate-fade-in-left"
              )}
              style={{
                animationDelay: isOpen ? `${index * 0.05}s` : "0s",
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
