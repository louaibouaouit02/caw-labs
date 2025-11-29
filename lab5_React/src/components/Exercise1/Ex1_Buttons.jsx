import { useState } from "react";

function Ex1_Buttons() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <button onClick={() => setMessage("Button 1 was clicked")}>Button1</button>
      <button onClick={() => setMessage("Button 2 was clicked")}>Button2</button>
      <button onClick={() => setMessage("Button 3 was clicked")}>Button3</button>

      <p>{message}</p>
    </div>
  );
}

export default Ex1_Buttons;
