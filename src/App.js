import React, { useState, useEffect } from "react";
import "./App.css";
import screen from "./img/spdsx-wave-manager-screen.png";
import { getOs, osMap } from "./getOs";

function App() {
  const [manifest, setmanifest] = useState(undefined);
  const [links, setlinks] = useState(undefined);

  useEffect(() => {
    fetch(process.env.REACT_APP_MANIFEST_URL)
      .then(res => res.json())
      .then(data => setmanifest(data))
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    if (manifest) {
      const os = getOs();
      console.log(os);
      switch (os) {
        case osMap.macOs:
          setlinks({
            main: {
              platform: osMap.macOs,
              url: manifest.latest.downloadUrlMac,
            },
            other: [
              {
                platform: osMap.windows,
                url: manifest.latest.downloadUrlPc,
              },
            ],
          });
          break;
        case osMap.windows:
          setlinks({
            main: {
              platform: osMap.windows,
              url: manifest.latest.downloadUrlPc,
            },
            other: [
              {
                platform: osMap.macos,
                url: manifest.latest.downloadUrlMac,
              },
            ],
          });
          break;
        default:
          setlinks({
            main: {
              platform: osMap.windows,
              url: manifest.latest.downloadUrlPc,
            },
            other: [
              {
                platform: osMap.macOs,
                url: manifest.latest.downloadUrlMac,
              },
            ],
          });
          break;
      }
    }
  }, [manifest]);

  console.log(manifest, links);

  // const macFileName = "SPD-SX wave manager.dmg";
  // const windowsFileName = "SPD-SX wave manager Setup.exe";

  return (
    <div className="App">
      <header>
        <h1>SPD-SX wave manager</h1>
        <h2>Free alternative for the Roland SPD-SX software</h2>
        <br />
        {manifest && links && (
          <button className="download-button">
            <a target="_blank" rel="noopener noreferrer" href={links.main.url}>
              Download v{manifest.latest.version} ({links.main.platform})
            </a>
          </button>
        )}

        <div className="linkList">
          {manifest &&
            links &&
            links.other.map(link => (
              <a target="_blank" rel="noopener noreferrer" href={link.url}>
                Download v{manifest.latest.version} ({link.platform})
              </a>
            ))}
        </div>
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
        PS: I didn't waste time creating this website. That's why it's a bit
        ugly :D The software itself deserves all of my love
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
