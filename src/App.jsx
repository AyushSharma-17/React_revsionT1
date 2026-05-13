import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');
  const handleAddUsers = () => {
    setUsers([...users, user]);
    // const total = users.length;
    // const last = users[users.length - 1];
    // const unique = [...new Set(users)].length;
  }
  return (
    <div>
      {/* <h2>total users: {total}</h2> */}
      {/* <h2>total unique users: {unique}</h2> */}
      {/* <h2>last user: {last}</h2> */}
      <input type="text" onChange={(event) => setUser(event.target.value)} placeholder="add new users" />
      <button onClick={handleAddUsers}>Add Users</button>
      {
        users.map((item, index) => {
          return <h4 key={index}>{item}</h4>
        })
      }
    </div>
  )
}
export default App;