import User1 from "./User1";
function App() {

  const displayName = (name) => {
    alert(name);
  }
  const getUser = () => {
    alert("get user function called");
  }
  return (
    <div>
      <h1>
        Call parent component function from child
      </h1>
      <User1 displayName={displayName} name="Ayush" getUser={getUser} />
      <User1 displayName={displayName} name="Sam" getUser={getUser} />
    </div>
  )
}
export default App;