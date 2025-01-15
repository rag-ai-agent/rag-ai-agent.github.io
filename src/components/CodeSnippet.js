import React, { useRef, useEffect } from "react";
import "./CodeSnippet.css";

const MAX_HEIGHT = 300;  // px
const MIN_HEIGHT = 30;   // px

function CodeSnippet({ codeText }) {
  const textAreaRef = useRef(null);

  // Copy code to clipboard
  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(codeText).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  // Dynamically set height based on content, capped at MAX_HEIGHT
  useEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      // Reset the height to 'auto' so we can shrink if needed
      textArea.style.height = "auto";
      textArea.style.overflowY = "hidden"; // temporarily hide scroll

      const scrollHeight = textArea.scrollHeight;

      if (scrollHeight < MIN_HEIGHT) {
        // Very short content
        textArea.style.height = `${MIN_HEIGHT}px`;
      } else if (scrollHeight <= MAX_HEIGHT) {
        // Medium content (fully visible)
        textArea.style.height = `${scrollHeight}px`;
      } else {
        // Large content => cap height, allow scrolling
        textArea.style.height = `${MAX_HEIGHT}px`;
        textArea.style.overflowY = "auto";
      }
    }
  }, [codeText]); // Rerun if codeText changes

  return (
    <div className="code-box-container">
      <textarea
        ref={textAreaRef}
        className="code-box"
        readOnly
        value={codeText}
      />
      <button className="copy-button" onClick={copyCodeToClipboard}>
        Copy
      </button>
    </div>
  );
}

export default CodeSnippet;
