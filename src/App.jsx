import { useState } from "react";
function App() {
  const [city, setCity] = useState("Delhi")

  return (
    <div>
      <h2>Select city</h2>
      <select onChange={(event) => setCity(event.target.value)} defaultValue={"delhi"}>
        <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
        <option value="kolkata">Kolkata</option>
      </select>

      <h2>city value: {city}</h2>
    </div>
  )
}
export default App;