import React from "react";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Button from "./components/Button/Button";

const App = () => {
  return (
    <>
      <Hero title="New York" subtitle="Find out everything about NY here!" />
      <Section>
        <Button type="button" color="bold">
          Button!!
        </Button>
        <Button type="button">Button!!</Button>
      </Section>
    </>
  );
};

export default App;
