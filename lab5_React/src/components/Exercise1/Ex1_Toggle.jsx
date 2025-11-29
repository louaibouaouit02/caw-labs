import { useState } from "react";

function Ex1_Toggle() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>ClickMe</button>
      <p>{toggle ? "Clicked" : "Not Clicked"}</p>
    </div>
  );
}

export default Ex1_Toggle;
