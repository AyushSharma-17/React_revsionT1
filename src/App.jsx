import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  return (
    <>
      <h1>enter the username in input field</h1>
      <h2>
        <input type="text" onChange={(event) => setName(event.target.value)} placeholder="enter username"></input>
      </h2>
      <h2>
        <input type="text" onChange={(event) => setAge(event.target.value)} placeholder="enter age"></input>
      </h2>
      <h2>
        <input type="text" onChange={(event) => setEmail(event.target.value)} placeholder="enter email"></input>
      </h2>
      <h1>Name := {name}</h1>
      <h1>age :={age}</h1>
      <h1>email:= {email}</h1>
      <button onClick={() => { setName(''); setAge(''); setEmail('') }}>clear</button>
    </>
  )
}
export default App;