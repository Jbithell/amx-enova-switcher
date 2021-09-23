import React from "react";

const buttonStyle = {
  width: "140px",
  height: "60px",
  margin: "5px",
  padding: "5px",
  backgroundColor: "#154d7d",
  color: "white",
  border: "3px solid white",
  borderRadius: "5px",
  fontSize: "1em"
}

function Button({text, borderColor, backgroundColor, ...buttonProps}) {
  let style = {...buttonStyle}
  if (borderColor) style.border = `3px solid ${borderColor}`
  if (backgroundColor) style.backgroundColor = backgroundColor

  return <button type="button" style={style} {...buttonProps}>{text}</button>
}

export default Button