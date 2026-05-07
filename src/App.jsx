import User from "./User";
function App() {
  let userName = "Ayush";
  let age = 23;
  let email = "ayush123@gmail.conm";
  return (
    <div>
      <User name={userName} age={age} email={email} />
    </div>
  )
} export default App;
