import { Download, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { SOCIAL_LINKS } from "@/constants/social";
import { PERSONAL_INFO } from "@/constants/personal";

const ANIMATION_DELAY_BASE = 0.1;
const MOUSE_MOVE_FACTOR = 0.02;
const PULSE_ANIMATION_DELAY = "1s";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div
          className="absolute inset-0 opacity-20 bg-grid-pattern transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${mousePosition.x * MOUSE_MOVE_FACTOR}px, ${
              mousePosition.y * MOUSE_MOVE_FACTOR
            }px)`,
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: PULSE_ANIMATION_DELAY }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          {/* Glitch Effect Title */}
          <div className="relative inline-block">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter">
              <span
                className="relative inline-block glitch-text"
                data-text={PERSONAL_INFO.name}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </span>
            </h1>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
          </div>

          {/* Subtitle with typing effect */}
          <div className="space-y-4">
            <p className="text-2xl md:text-4xl font-bold text-cyan-400/90 typing-text">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 py-8">
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in-up"
                style={{
                  animationDelay: `${index * ANIMATION_DELAY_BASE}s`,
                }}
                aria-label={social.label}
              >
                <social.icon
                  className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  strokeWidth={2}
                  absoluteStrokeWidth={false}
                />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href={PERSONAL_INFO.resumePath}
              download
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="flex flex-col items-center gap-2 text-cyan-400/60 hover:text-cyan-400 transition-colors"
              aria-label="Scroll to about section"
            >
              <span className="text-sm font-medium">Scroll Down</span>
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
