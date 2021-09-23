import React, { useState } from "react";
import Matrix from "./components/Matrix";
import "./menu.css";

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const selectedTabRender = () => {
    switch (selectedTab) {
      case 0:
        return <Matrix typeIsAudio={false} />;
      case 1:
        return <Matrix typeIsAudio={true} />;
      default:
        return null;
    }
  };
  return (
    <div>
      <table id="menu">
        <thead>
          <tr>
            {["Video","Sound","Admin"].map((element, index) => {
              return <td key={index} onClick={() => setSelectedTab(index)} className={selectedTab === index ? "selected":""}>{element}</td>
            })}
            <td className="pad">
              <span id="SNDStatusIcon">Sound &#x25cf;</span>
            </td>
            <td id="allOff"><b>VIDEO MUTE</b></td>
          </tr>
        </thead>
      </table>
      <div id="container">
        <div className="tab">
          {selectedTabRender()}
        </div>
      </div>
    </div>
  );
}
export default App