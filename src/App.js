import './App.css';

function App() {
  return (
    <div>
      <table id="menu">
        <tr>
          <td data-tab="1" rowspan="2">Lighting</td>
          <td data-tab="3" rowspan="2">Sound</td>
          <td data-tab="4" rowspan="2">Admin</td>
          <td class="pad" rowspan="2">
            <span id="SNDStatusIcon">Sound &#x25cf;</span>
          </td>
          <td id="allOff"><b>ALL OFF</b></td>
        </tr>
      </table>
      <div id="container">
        <div class="tab" data-tab="1">
          <div id="LXInfo" class="info"></div>
          <div class="button-container" id="lxContainer">
            <button type="button" id="keypad-open">Keypad</button>
          </div>
        </div>
        <div class="tab" data-tab="2">
          <div class="keypad-wrapper">
            <div class="keypad-container">
              <table class="keypad">
                <tr>
                  <td colspan="3"></td>
                </tr>
                <tr>
                  <td><button class="keypad-key" data-key="7">7</button></td>
                  <td><button class="keypad-key" data-key="8">8</button></td>
                  <td><button class="keypad-key" data-key="9">9</button></td>
                </tr>
                <tr>
                  <td><button class="keypad-key" data-key="4">4</button></td>
                  <td><button class="keypad-key" data-key="5">5</button></td>
                  <td><button class="keypad-key" data-key="6">6</button></td>
                </tr>
                <tr>
                  <td><button class="keypad-key" data-key="1">1</button></td>
                  <td><button class="keypad-key" data-key="2">2</button></td>
                  <td><button class="keypad-key" data-key="3">3</button></td>
                </tr>
                <tr>
                  <td><button class="keypad-clear">Clear</button></td>
                  <td><button class="keypad-key" data-key="0">0</button></td>
                  <td><button class="keypad-key" data-key=" thru ">Thru</button></td>
                </tr>
              </table>
            </div>
            <div class="right-fader">
            </div>
          </div>
          </div>
        <div class="tab" data-tab="3">
          <div id="SNDInfo" class="info"></div>
          <div class="button-container" id="sndContainer">
          </div>
          <div class="button-container" id="sndFaders">
          </div>
        </div>
        <div class="tab" data-tab="4">
          <table>
            <tr>
              <td>
                <div class="button-container">
                  <button type="button" id="deviceLockButton" onclick="adminFunctions('lock')">Lock</button>
                  <button type="button" onclick="adminFunctions('reboot')">Reboot</button>
                  <button type="button" onclick="modalShow('about')">About</button>

                  <button type="button" class="bnt-amx" onclick="adminFunctions('devTools')">Developer Mode</button>
                  <button type="button" onclick="adminFunctions('exit')">Exit to OS</button>
                </div>
                <div id="SNDStatusDetails"></div>
              </td>
              <td>
                <h2>Admin Interface</h2>
                <div id="adminQRCode"></div>
                <p id="adminURL"></p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
