import { useState } from "react";
import Counter from "./Counter";
import Toggle from "./toggle";
function App() {
  const [Fruit, setFruit] = useState("Apple");

  const handleFruit = () => {
    setFruit("Bannana")
  }
  return (
    <div>
      <h2>State useState in react {Fruit}</h2>
      <h3>
        <button onClick={handleFruit}>Click to change fruit</button>

      </h3>
      <h2><Counter /></h2>
      <Toggle />
    </div>

  )
}
export default App;