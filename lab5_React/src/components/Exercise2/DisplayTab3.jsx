import { useState } from "react";

const initialTab = ["hello", "world", "from", "react"];

function DisplayTab3() {
  const [tab, setTab] = useState(initialTab);

  const handleClick = (index) => {
    const newTab = tab.filter((_, i) => i !== index);
    setTab(newTab);
  };

  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index} onClick={() => handleClick(index)}>
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
}

export default DisplayTab3;
