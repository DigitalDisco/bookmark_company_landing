import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import ExtensionCard from "./components/ExtensionCard/ExtensionCard";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <div className="Home">
          <Navbar />
          <Hero />
          <Features />
          <ExtensionCard />
          <Faq />
          <Contact />
          <Footer />
        </div>
        <Switch>
          <Route path="/" />
          <Route path="/features" />
          <Route path="/pricing" />
          <Route path="/contact" />
        </Switch>
      </Router>
    </AnimatePresence>
  );
}

export default App;
