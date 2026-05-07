import User from "./User";
function App() {

  let userObject = {
    name: "ayush",
    age: 23,
    email: "email@ayush.com"
  }

  return (
    <>

      <User user={userObject} />
    </>
  )

} export default App;
