import Student from "./Student";
import Wrapper from "./Wrapper";

function App() {
  return (
    <>
      <h1> default props</h1>
      <Student />
      <h2> normal passing of props</h2>
      <Student name="ayush" />

      <Wrapper>
        <Student name="ayush" />
      </Wrapper>
      <Wrapper color="blue">
        <h1>hello</h1>
      </Wrapper>
    </>
  )
}
export default App;