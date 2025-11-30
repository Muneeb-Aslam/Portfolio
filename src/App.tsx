import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import About from '@components/About';
import Experience from '@components/Experience';
import Projects from '@components/Projects';
import Footer from '@components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-dot-pattern" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cursor Follower Effect */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/10 rounded-full blur-3xl transition-opacity duration-300 opacity-0"
      />
    </div>
  );
}

export default App;
