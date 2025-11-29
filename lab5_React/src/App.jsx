import "./App.css";

import Ex1_Click from "./components/Exercise1/Ex1_Click";

// Exercise 2
import DisplayTab1 from "./components/Exercise2/DisplayTab1";
import DisplayTab2 from "./components/Exercise2/DisplayTab2";
import DisplayTab3 from "./components/Exercise2/DisplayTab3";
import DisplayTab4 from "./components/Exercise2/DisplayTab4";
import DisplayTab5 from "./components/Exercise2/DisplayTab5";

// Exercise 3
import AuthForm from "./components/Exercise3/AuthForm";

// Exercise 4
import DivGenerator from "./components/Exercise4/DivGenerator";

function App() {
  return (
    <div className="app-container">
      
      {/* Exercise 1 */}
      <section className="exercise">
        <h1>Exercise 1 — Click Button</h1>
        <Ex1_Click />
      </section>

      {/* Exercise 2 */}
      <section className="exercise">
        <h1>Exercise 2 — Display Arrays</h1>

        <h3>DisplayTab1 (Simple List)</h3>
        <DisplayTab1 />

        <h3>DisplayTab2 (Indexed List)</h3>
        <DisplayTab2 />

        <h3>DisplayTab3 (Remove on Click)</h3>
        <DisplayTab3 />

        <h3>DisplayTab4 (Parameterized Single Table)</h3>
        <DisplayTab4 tab={["hello", "Teacher", "I'm", "Your_student"]} />

        <h3>DisplayTab5 (Two Tables — Question 5)</h3>
        <DisplayTab5 />
      </section>

      {/* Exercise 3 */}
      <section className="exercise">
        <h1>Exercise 3 — Authentication Form</h1>
        <AuthForm />
      </section>

      {/* Exercise 4 */}
      <section className="exercise">
        <h1>Exercise 4 — Dynamic Divs</h1>
        <DivGenerator />
      </section>

    </div>
  );
}

export default App;
