import React from "react";
import { render } from "react-dom";
import { version } from "../package.json";

import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>😝 Zero Configuration</h2>
        <h2>React Starter Kit 🔥</h2>
        <div className="description">
          <p>A Super Simple Reactjs Starter Kit for Humans 👴</p>
          <p>Version {version}</p>
          <p>
            <a
              className="github-button"
              href="https://github.com/saratonite/zero-react-starter"
              data-icon="octicon-star"
              aria-label="Star saratonite/zero-react-starter on GitHub"
            >
              Star
            </a>
            &nbsp;
            <a
              className="github-button"
              href="https://github.com/saratonite/zero-react-starter/fork"
              data-icon="octicon-repo-forked"
              aria-label="Fork saratonite/zero-react-starter on GitHub"
            >
              Fork
            </a>
          </p>
          <p className="author">
            Designed and built with all the love in the world by{" "}
            <a target="_blank" href="https://github.com/saratonite">
              Sarath ⚡
            </a>
          </p>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
