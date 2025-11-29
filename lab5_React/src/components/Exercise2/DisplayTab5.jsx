import DisplayTab from "./DisplayTab4"; 

function DisplayTab5() {
  const tab1 = ["hello", "world"];
  const tab2 = ["I'm", "Bouaouit", "Louai"];

  return (
    <div>
      <h3>First List</h3>
      <DisplayTab tab={tab1} />

      <h3>Second List</h3>
      <DisplayTab tab={tab2} />
    </div>
  );
}

export default DisplayTab5;
