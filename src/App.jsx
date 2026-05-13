import { useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "enter name";
    inputRef.current.value = "name";
  }
  const toggleHander = () => {
    if (inputRef.current.style.display != 'none') {
      inputRef.current.style.display = 'none';
    } else {
      inputRef.current.style.display = 'inline';
    }
  }
  return (
    <div>
      <h1>useRef</h1>
      <h2>
        <button onClick={toggleHander}>toggle</button>
        <input ref={inputRef} type="text" placeholder="enter name" />
        <button onClick={inputHandler}>handle Input</button>
      </h2>
    </div>
  )
}
export default App;