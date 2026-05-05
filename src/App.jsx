import Header from "./Header";
import Fruit from "./Fruit";
import Login,{Profile,UserKey} from "./Usercomponet";
function App(){

  const userName= "ayush";
  let x=7;
  let y=12;
  return(
    <div>
      <Header />
      <Fruit/>
      
      <h1>Hello, React!</h1>
      <h2>{sum()} ,{UserKey}
        <hr/>
        Welcome to React {userName}
        <hr />
        the sum of {x} and {y} is {x+y} 
        <hr />
        <button onClick={()=> alert(`hello, ${userName}`)}>Click here</button>
      </h2>
      <Profile/>
      <Hello />
    </div>
  )
}
function Hello(){
  return(
    <h1>Hello, World!</h1>
  )
}
function sum(){
  return 7+4;
}
export default App;