import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // state for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    // toggle between true and false
    setIsDarkMode(!isDarkMode);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
