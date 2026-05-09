import { useState } from "react";
import Ncounter from "./ncounter";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>hello</h1>
      <button onClick={() => setCount(count + 1)}> click to increment {count}</button>
      <Ncounter count={count} />
    </div>
  )
}

export default App;