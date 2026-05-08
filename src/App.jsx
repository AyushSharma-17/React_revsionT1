import { useState } from "react";
function App() {
  const [gender, setGender] = useState('');
  return (
    <div>
      <h1>
        handle the radio button by useSate
      </h1>
      <h2>
        Select the gender:
        <br />
        <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" value={"male"} checked={gender === 'male'} />Male
        <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" value={"female"} checked={gender === 'female'} />Female
        <br />
        <p>You have selected : {gender}</p>
      </h2>
    </div>
  )
}
export default App;