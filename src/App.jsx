import Header from "./Header";
import Fruit from "./Fruit";
import Login,{Profile,UserKey} from "./Usercomponet";
function App(){
  return(
    <div>
      <Header />
      <Fruit/>
      
      <h1>Hello, React!</h1>
      <h2>{sum()} ,{UserKey}</h2>
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