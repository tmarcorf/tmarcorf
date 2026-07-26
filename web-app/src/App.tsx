import './App.css'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Courses } from './components/Courses'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const navSections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'courses', label: 'Courses' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  return (
    <>
      <Nav sections={navSections} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
