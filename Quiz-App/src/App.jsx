import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import QuestionBox from "./components/QuestionBox";
import Navbar from "./components/nav";

function App() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    updateBackgroundColor();
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(!theme);
  };

  const updateBackgroundColor = () => {
    const body = document.body;
    body.style.backgroundColor = theme ? '#cddaff' : '#16151D';
    // body.style.backgroundImage = theme ? 'url(./assets/Question-mark.png)' : 'url(./assets/question mark dark.png)';
  };

  return (
    <div>
      <Navbar 
      theme={theme}
      onThemeChange={handleThemeChange}
      />
      <QuestionBox data={questions} theme={theme} onThemeChange={handleThemeChange} />
    </div>
  );
}

export default App;
