import React, { Component } from "react";
import NLText from "./NLText";
import "./App.css";
import { default as annotation } from "./annotation";

class App extends Component {
  render() {
    const { categories, entities, sentiment } = annotation;

    return (
      <div className="App">
        <NLText entities={entities} categories={categories}>
          <p>
            Its second spacecraft aims to land in 2019 near the moon’s south
            pole. A third, larger spacecraft in 2020 is to gather samples and
            then bring them back to Earth, the first haul of moon rocks since a
            Soviet robotic probe’s return in 1976.
          </p>
          <p>
            But these plans almost came to a halt a couple of years ago — not
            because of technological challenges or financial shortfalls, but
            because of an international agreement known as the Outer Space
            Treaty, which is marking its 50th anniversary this year.
          </p>
        </NLText>
      </div>
    );
  }
}

export default App;
