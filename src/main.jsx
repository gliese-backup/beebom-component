import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector(".app"));
root.render(
  <>
    <Heading title="One" description="This is some text" />
    <Heading title="Novel" description="Novel is a novel" />
    <Heading title="Two" description="This is some text" />
  </>
);

function Heading(props) {
  console.log(props);

  const styles = {
    color: "red",
    fontWeight: "normal",
  };

  return (
    <div>
      <h1 style={styles}>{props.title}</h1>
      <h3 style={{ color: "green" }}>{props.description}</h3>
    </div>
  );
}

// https://github.com/gliese-backup/beebom-component
