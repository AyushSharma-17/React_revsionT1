import { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(0);



  useEffect(() => {
    callOnce();
  }, [count]);
  function callOnce() {
    console.log("hello from callonce function");
  }

  return (
    <div>
      <h1>   hello</h1>
      <button onClick={() => setCount(count + 1)} >click to increment {count}</button>
    </div>
  )
}
export default App;