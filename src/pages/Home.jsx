import TabButton from "../components/Main/TabButton";
import { useState } from "react";
import { EXAMPLES } from "../components/Main/data";

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <main className="main-container">
        <section className="welcome-text">
          <h1>
            Kalle <span className="span fade-in"> Pettersson</span>
          </h1>
          <h3>
            <span className="span fade-in">Front</span>_end-developer
          </h3>
          <p className="p-text-main">
            Hello, my name is Kalle Pettersson. I started studying to become a
            front end developer because I have always liked making beautiful
            designs on paper. cars or in this case the web. I feel happy that I
            have found this opportunity to acquire a career as a Front end
            developer. And you kan find my linkedIn link at the contact page at
            the top. We will hopefully write soon
          </p>
        </section>
        <section id="examples">
          <h2>Knowledge</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "HTML"}
              onSelect={() => handleSelect("HTML")}
            >
              HTML
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "CSS"}
              onSelect={() => handleSelect("CSS")}
            >
              CSS
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "JavaScript"}
              onSelect={() => handleSelect("JavaScript")}
            >
              JavaScript
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "React"}
              onSelect={() => handleSelect("React")}
            >
              React
            </TabButton>
          </menu>

          {!selectedTopic ? <p>Please select a topic.</p> : null}
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre className="pre-design">
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}
        </section>
        <section className="main-img-container"></section>
      </main>
    </>
  );
}

/* this page includes a section about me and i showcasing examples on diffrent topics i learn now. I use `useState` for tracking the selected topic and handlung it with the `handleSelect` function*/
