import React from "react";
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";

const App = () => {
  return (
    <>
      <Hero title="New York" subtitle="Find out everything about NY here!" />
      <Button type="button" color="bold">
        Button!!
      </Button>
      <Button type="button">Button!!</Button>
    </>
  );
};

export default App;
