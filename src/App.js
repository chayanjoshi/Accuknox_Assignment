import React from "react";
import ReactDOM from "react-dom/client";
import TextEditor from "./components/TextContainer/TextEditor";

const App = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <TextEditor />
    </React.StrictMode>
  );
};

export default App;
