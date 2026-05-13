import { useFormStatus } from "react-dom";
import CustomerForm from "./CustomerForm";
function App() {
  const handleSubmit = async () => {
    await new Promise(res => setTimeout(res, 2000));
  }
  return (
    <div>
      <h1>useFormStatus hook in reactjs</h1>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </div>
  )
}
export default App;