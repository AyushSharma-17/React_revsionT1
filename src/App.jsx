import { useActionState } from "react";

function App() {
  // Define the action function first
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");

    // simulate async work
    await new Promise((res) => setTimeout(res, 2000));
    console.log("handleSubmit called", name, password);

    // return new state (optional)
    return { name, password };
  };

  // Hook: action function + initial state
  const [data, action, pending] = useActionState(handleSubmit, {});

  return (
    <div>
      <h1>useActionState hook in React JS</h1>
      <form action={action}>
        <input type="text" placeholder="Enter name" name="name" />
        <br /><br />
        <input type="password" placeholder="Enter password" name="password" />
        <br /><br />
        <button disabled={pending}>Submit</button>
      </form>

      {/* Display state after submission */}
      {data.name && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {data.name}</p>
          <p>Password: {data.password}</p>
        </div>
      )}
    </div>
  );
}

export default App;
