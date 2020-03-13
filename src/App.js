import React from "react";
import "./styles.css";

const style = {
  preview: {
    margin: "10px"
  }
};

export default function App() {
  const frame = React.createRef();
  const textarea = React.createRef();
  return (
    <div className="App">
      <h1>Email Preview</h1>
      <textarea cols="100" rows="10" ref={textarea} />
      <div style={style.preview}>
        <button
          onClick={() => {
            frame.current.srcdoc = textarea.current.value;
            //textarea.current.value = "";
          }}
        >
          Preview
        </button>
      </div>
      <iframe ref={frame} width={"100%"} height={"500px"} />
    </div>
  );
}
