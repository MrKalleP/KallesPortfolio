import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Fotter from "./components/Footer/Fotter";

const FirstPage = () => {
  return (
    <section>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Fotter />
    </section>
  );
};

export default FirstPage;

/*I wanted all the pages on the front page home so I created firstpage to collect all the pages on the homepage there.*/
