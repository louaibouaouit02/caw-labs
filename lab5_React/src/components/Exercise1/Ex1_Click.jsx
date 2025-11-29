import { useState } from "react";

function Ex1_Click() {
  const [clicked, setClicked] = useState(false); // state to track click

  return (
    <div>
      <button onClick={() => setClicked(true)}>ClickMe</button>
      {clicked && (
        <p className="clicked-text">
          Clicked
        </p>
      )}
    </div>
  );
}

export default Ex1_Click;
