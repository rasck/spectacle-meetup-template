// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Topic
          </Heading>
          <Notes>
            <ol>
              <li>Present yourself</li>
              <li>The company you work for?</li>
              <li>Explain briefly the agenda of this presenation</li>
              <li>How long time you intend to use</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Introduction of the concept
          </Heading>
          <Notes>
            <h4>Introduce the concept behind the technology</h4>
            <ol>
              <li>Why is the concept relevant?</li>
              <li>What is the purpose?</li>
              <li>What is the problem / pain it aims to solve?</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Describe the competitors
          </Heading>
          <Notes>
            <h4>Explain how the technology/concept differ</h4>
            <ol>
              <li>Give a short intro to related technologies/concepts</li>
              <li>What makes the technology/concept in question special?</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Demonstration ( can be more than one slide )
          </Heading>
          <Notes>
            <h4>Demonstrate key features</h4>
            <ol>
              <li>more notes here...</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Where to learn more?
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Final - Questions and discussion
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Extras
          </Heading>
          <Notes>
            <ol>
              <li>Troubleshooting</li>
              <li>Tips & Tricks you didn't had time for</li>
              <li>More examples</li>
            </ol>
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
