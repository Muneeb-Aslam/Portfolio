import { Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/constants/personal";

export default function Footer() {
  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-cyan-500/20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                &lt;M.A /&gt;
              </div>
            </div>

            {/* Made with Love */}
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse" />
              <span>by</span>
              <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.fullName.split(" ")[0]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
