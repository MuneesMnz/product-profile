import Contact from "./Components/contact/Contact";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/portfolio/Portfolio";
import Testimonials from "./Components/testimonials/Testimonials";
import Topbar from "./Components/topbar/Topbar";
import Work from "./Components/work/Work";
import './App.scss'

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro />
        <Portfolio/>
        <Work/>
        <Testimonials/>
        <Contact/>

      </div>
    </div>
  );
}

export default App;
