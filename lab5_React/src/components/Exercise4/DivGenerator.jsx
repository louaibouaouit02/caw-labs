import { useState } from "react";

function DivGenerator() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [divs, setDivs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDivs([...divs, { width, height, bgColor }]);
    setWidth("");
    setHeight("");
    setBgColor("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Width (px)"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          required
        />
        <input
          placeholder="Height (px)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <input
          placeholder="Background Color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          required
        />
        <button type="submit">Add Div</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {divs.map((div, index) => (
          <div
            key={index}
            style={{
              width: div.width + "px",
              height: div.height + "px",
              backgroundColor: div.bgColor,
              margin: "10px 0",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default DivGenerator;
