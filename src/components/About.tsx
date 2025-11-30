import { useEffect, useRef, useState } from "react";
import { SKILLS } from "@/constants/skills";
import { ABOUT_DESCRIPTION } from "@/constants/personal";

const INTERSECTION_THRESHOLD = 0.1;
const SKILL_ANIMATION_DELAY = 0.05;

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: INTERSECTION_THRESHOLD }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0a1f] to-[#0a0a0f]" />
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-5xl md:text-7xl font-black mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Left Column - Description */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 delay-20 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-cyan-500/20 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-400 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400 rounded-br-2xl" />

                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {ABOUT_DESCRIPTION.paragraph1}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
              <div className="relative p-8 rounded-2xl bg-background/50 backdrop-blur-xl border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-cyan-400">&lt;</span>
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Tech Stack
                  </span>
                  <span className="text-cyan-400">/&gt;</span>
                </h3>

                <div className="flex flex-wrap gap-3">
                  {SKILLS.map((skill, index) => (
                    <div
                      key={skill}
                      className={`group relative px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-110 cursor-default ${
                        isVisible ? "animate-fade-in-scale" : "opacity-0"
                      }`}
                      style={{
                        animationDelay: isVisible
                          ? `${index * SKILL_ANIMATION_DELAY}s`
                          : "0s",
                      }}
                    >
                      <span className="relative z-10 text-sm font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">
                        {skill}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
