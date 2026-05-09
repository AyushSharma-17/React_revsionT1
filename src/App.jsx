import UserRev from "./UserRev";
function App() {
  const userData = [{
    name: "ayush",
    age: 23,
    email: "ayush@gmail.com"
  },
  {
    name: "aman",
    age: 24,
    email: "aman@gmail.com"
  },
  {
    name: "ayushi",
    age: 22,
    email: "ayushi@gmail.com"
  },
  {
    name: "kam",
    age: 25,
    email: "kam@gmail.com"
  }]
  return (
    <div>
      <h1>Reuse component </h1>
      {
        userData.map((user, index) => (
          <div key={index}>
            <UserRev data={user} />
          </div>
        ))
      }
    </div>
  )
}
export default App;