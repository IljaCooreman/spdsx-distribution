import React from "react";
import "./App.css";
import screen from "./img/spdsx-wave-manager-screen.png";
// import { getOs } from "./getOs";

function App() {
  // const os = getOs();
  const baseUrl =
    "https://www.dropbox.com/sh/jnfq7ibugoe6bwr/AAAq30kSy1db24b1afCqh94ba?dl=0";
  // const macFileName = "SPD-SX wave manager.dmg";
  // const windowsFileName = "SPD-SX wave manager Setup.exe";

  return (
    <div className="App">
      <header>
        <h1>SPD-SX wave manager</h1>
        <h2>Free alternative for the Roland SPD-SX software</h2>
        <br />
        <button className="download-button" onClick="">
          <a href={baseUrl}>Go to download page</a>
        </button>
      </header>
      <p>
        This software makes it easy to manage audio files on your Roland SPD-SX
        sample pad.
      </p>
      <ul>
        <li>add, remove, rearrange audio files</li>
        <li>easy drag and drop interface</li>
        <li>automatic conversion of wave files to the correct format</li>
        <li>easy reordering of kits</li>
      </ul>
      <p>
        This is an open source project in early stages. Many more features are
        planned in the future.
      </p>
      <img
        className="img-screen"
        src={screen}
        alt="spdsx-wave-manager screen"
      />
      <p>
        PS: I didn't waste time creating this website. The software itself
        deserves all of my love
      </p>
      <footer>
        <h2>Contact</h2>
        <div>email: ilja.cooreman@gmail.com</div>
        source code:{" "}
        <a href="https://github.com/IljaCooreman/spdsx-manager">
          https://github.com/IljaCooreman/spdsx-manager
        </a>
      </footer>
    </div>
  );
}

export default App;
