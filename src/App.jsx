import { useState } from "react";
import Student from "./Student";

function App() {
  const [student, setStudent] = useState("shan");
  return (
    <>
      <h1>props in react with the useState </h1>
      {student && <Student name={student} />}
      <button onClick={() => setStudent("Ayush")}>update student name</button>
    </>
  )
} export default App;