import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skill"

function App() {

  return (
    <div className="min-h-screen bg-surface font-sans text-ink antialiased dark:bg-slate-950 dark:text-slate-100">
    <Navbar />
    
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>

    <Footer />
    </div>
  )
}

export default App
