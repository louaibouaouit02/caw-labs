const tab = ["hello", "world", "from", "react"];

function DisplayTab1() {
  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default DisplayTab1;
