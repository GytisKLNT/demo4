import React from "react";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Button from "./components/Button/Button";
import Article from "./components/Article/Article";

const App = () => {
  return (
    <>
      <Hero title="New York" subtitle="Find out everything about NY here!" />
      <Section></Section>
      <Article title="Things to do in NY">
        <p>You can do many things...</p>
        <Button type="button">Button</Button>
      </Article>
    </>
  );
};

export default App;
