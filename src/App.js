import React from "react";
import "./App.css";
// import { getOs } from "./getOs";

function App() {
  // const os = getOs();
  const baseUrl =
    "https://drive.google.com/drive/folders/1yxixtwDE7Mh5rTUSdbPi8HirsHQ55Ebs?usp=sharing";
  // const macFileName = "SPD-SX wave manager.dmg";
  // const windowsFileName = "SPD-SX wave manager Setup.exe";

  return (
    <div className="App">
      <h1>SPD-SX wave manager</h1>
      <h2>Free alternative for the Roland SPD-SX software</h2>
      <br />
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
      <h2>Download</h2>
      <a href={baseUrl}>Link to drive</a>
      <h2>Contact</h2>
      <div>email: ilja.cooreman@gmail.com</div>
      source code:{" "}
      <a href="https://github.com/IljaCooreman/spdsx-manager">
        https://github.com/IljaCooreman/spdsx-manager
      </a>
    </div>
  );
}

export default App;
