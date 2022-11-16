import MyAppBar from './components/AppBar';
import Home from './components/Home';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';
import './styles/app.style.css';

export default function App() {
  return (
    <div>
      <MyAppBar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
