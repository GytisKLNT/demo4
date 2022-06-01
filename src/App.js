import React from "react";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Button from "./components/Button/Button";
import Article from "./components/Article/Article";

const App = () => {
  return (
    <>
      <Hero title="New York" subtitle="Find out everything about NY here!" />
      <Section>
        <Article title="Best Bars in NY">
          <ul>
            <li>Cherry On Top</li>
            <li>Amelie</li>
            <li>Sauced</li>
          </ul>
        </Article>
        <Article title="Things to do in NY">
          <p>You can do many things...</p>
          <Button
            handleClick={() =>
              window.location.replace("https://github.com/GytisKLNT/demo4.git")
            }
            type="button"
          >
            Button
          </Button>
        </Article>
      </Section>
    </>
  );
};

export default App;
