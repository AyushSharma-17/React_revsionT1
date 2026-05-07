import { useState } from "react";

function App() {
  const [val, setVal] = useState("Ayush");
  return (
    <>
      <h1>enter the username in input field</h1>
      <h2>
        <input type="text" onChange={(event) => setVal(event.target.value)} placeholder="enter username"></input>
      </h2>
      <h1>{val}</h1>
      <button onClick={() => setVal("")}>clear</button>
    </>
  )
}
export default App;