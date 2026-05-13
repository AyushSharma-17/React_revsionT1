import { useRef } from "react";
import UserInput from "./UserInput";
function App() {

  const inputRef = useRef(null);

  const updateInput = () => {
    inputRef.current.value = 1000;
    inputRef.current.style.color = "red";
    inputRef.current.focus();
  }
  return (
    <div>
      <h1>Forward ref </h1>
      <UserInput ref={inputRef} />
      <button onClick={updateInput}>Update Input</button>
    </div>
  )
}
export default App;