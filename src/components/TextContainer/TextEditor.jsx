import React, { useState } from "react";
import "../../styles/style.css";

function TextEditor() {
  // Created an array of all the sentences
  const sentences = [
    "He's not the sharpest knife in the drawer.",
    "The big building was blazing with lights.",
    "Now you must answer some big questions.",
    "Get Your Act Together!",
  ];

  // Here I created a new array of the same length as of the sentences array and in this array i will store all the properties that will update our sentence for that particular index.
  const [styles, setStyles] = useState(
    Array(sentences.length).fill({
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      fontSize: 16,
      color: "#000000",
    })
  );

  const handleStyleToggle = (index, property) => {
    setStyles((prevStyles) => {
      const updatedStyles = [...prevStyles];
      switch (property) {
        case "fontWeight":
          updatedStyles[index] = {
            ...updatedStyles[index],
            fontWeight:
              updatedStyles[index].fontWeight === "normal" ? "bold" : "normal",
          };
          break;
        case "fontStyle":
          updatedStyles[index] = {
            ...updatedStyles[index],
            fontStyle:
              updatedStyles[index].fontStyle === "normal" ? "italic" : "normal",
          };
          break;
        case "textDecoration":
          updatedStyles[index] = {
            ...updatedStyles[index],
            textDecoration:
              updatedStyles[index].textDecoration === "none"
                ? "underline"
                : "none",
          };
          break;
        default:
          break;
      }
      return updatedStyles;
    });
  };

  const handleFontSizeChange = (index, e) => {
    setStyles((prevStyles) => {
      // here i am creating a copy of the previous styles to have an idea from what state it changed.
      const updatedStyles = [...prevStyles];
      updatedStyles[index] = {
        ...updatedStyles[index],
        fontSize: parseInt(e.target.value),
      };
      return updatedStyles;
    });
  };

  const handleColorChange = (index, e) => {
    setStyles((prevStyles) => {
      const updatedStyles = [...prevStyles];
      updatedStyles[index] = { ...updatedStyles[index], color: e.target.value };
      return updatedStyles;
    });
  };

  return (
    <div className="grid-container">
      {styles.map((style, index) => (
        <>
          <div key={index} className="grid-row">
            <div className="text-editor">
              <button onClick={() => handleStyleToggle(index, "fontWeight")}>
                Bold
              </button>
              <button onClick={() => handleStyleToggle(index, "fontStyle")}>
                Italic
              </button>
              <button
                onClick={() => handleStyleToggle(index, "textDecoration")}
              >
                Underline
              </button>
              <label htmlFor={`fontSizeInput-${index}`}>Font Size:</label>
              <input
                id={`fontSizeInput-${index}`}
                type="number"
                min={1}
                value={style.fontSize}
                onChange={(e) => handleFontSizeChange(index, e)}
              />
              <label htmlFor={`colorInput-${index}`}>Color:</label>
              <input
                id={`colorInput-${index}`}
                type="color"
                value={style.color}
                onChange={(e) => handleColorChange(index, e)}
              />
            </div>
          </div>
          <div className="text-box" style={style}>
            {sentences[index]}
          </div>
        </>
      ))}
    </div>
  );
}

export default TextEditor;
