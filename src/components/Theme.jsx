import React from "react";
import DarkTheme, { createTheme } from "react-dark-theme";

const lightTheme = {
  background: "white",
  text: "black",
};
const darkTheme = {
  background: "black",
  text: "white",
};
const myTheme = createTheme(darkTheme, lightTheme);

function Theme({ children }) {
  return (
    <div style={{ backgroundColor: myTheme.background, color: myTheme.text }}>
      <DarkTheme light={lightTheme} dark={darkTheme} />
      {children}
    </div>
  );
}

export default Theme;
