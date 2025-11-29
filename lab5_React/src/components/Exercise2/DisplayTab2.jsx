const tab = ["hello", "world", "from", "react"];

function DisplayTab2() {
  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index}>
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
}

export default DisplayTab2;
