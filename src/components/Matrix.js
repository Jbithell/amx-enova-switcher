import xmlParser from "fast-xml-parser";
import React, { useEffect, useState } from "react";
import Button from "./Button";

function Matrix(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [settingsData, setSettingsData] = useState([]);
  const [selectedOutput, setSelectedOutput] = useState(0);

  const getData = () => {
    fetch("/web/dvx_hd/config/dvx_hd-settings.xml?page=SystemSettings")
      .then(res => res.text())
      .then(str => xmlParser.parse(str))
      .then(
        (result) => {
          if (typeof result["systemsettings"]["system"] !== "undefined") {
            setIsLoaded(true);
            setSettingsData(result["systemsettings"]["system"]);
          } else {
            setIsLoaded(true);
            setError({"message": "No Data"});
          }          
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }
  const changeVideoSource = (output, newInput) => {
    fetch("/web/dvx_hd/config/dvx_hd-settings.xml?" + new URLSearchParams({
        page: "SystemSettings",
        val: newInput,
        id: output,
        att: (props.typeIsAudio ? "aoselect" : "voselect")
    }), {method: 'POST'})
    .then(res => res.text())
    .then(
      (result) => {
        getData();
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  };

  useEffect(() => {
    getData();
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded || settingsData === []) {
    return <div>Loading...</div>;
  } else {
    console.log(settingsData);
    return (
      <table>
        <tbody>
          <tr>
            <td style={{width: 140, verticalAlign: "top"}}>
              {Array.from({length: 4}, (x, i) => i).map((_array, i) => {
                let props = {text: "Output " + (i+1)}
                if (i === selectedOutput) {
                  props.backgroundColor = "red";
                }
                return <Button {...props} onClick={() => setSelectedOutput(i)} />
              })}
            </td>
            <td>
              {Array.from({length: (props.typeIsAudio ? 15 : 11)}, (x, i) => i).map((_array, i) => {
                let buttonProps = {text: (i === 0 ? "Off" : settingsData["viname" + i])}
                if (i > 0 && i < 11 && settingsData["vistats"]) {
                  buttonProps.borderColor = (settingsData["vistats"][i-1] === "VALID SIGNAL" ? "green":"red")
                }
                if (settingsData[(props.typeIsAudio ? "aoselect" : "voselect")] && (settingsData[(props.typeIsAudio ? "aoselect" : "voselect")][selectedOutput] === i || (i === 0 && settingsData[(props.typeIsAudio ? "aoselect" : "voselect")][selectedOutput] === 15))) {
                  buttonProps.backgroundColor = "red";
                }
                return <Button {...buttonProps} onClick={() => changeVideoSource(selectedOutput+1, i)} />
              })}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

Matrix.defaultProps = {
  typeIsAudio: false
};

export default Matrix