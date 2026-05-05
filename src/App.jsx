import Header from "./Header";
import Fruit from "./Fruit";
import Login,{Profile,UserKey} from "./Usercomponet";
function App(){

  const userName= "ayush";
  let x=7;
  let y=12;
  const Name= "ayush sharma";

const userObj1={
    name:"nilay",
    age:25,
    city:"delhi"
  }
  const userArray=['sam','jhon','doe']





  return(
    <div>
      <Header />
      <Fruit/>
      
      <h1>Hello, React!</h1>
      <h2>{sum()} ,{UserKey} ,{color()}
        <hr/>
        Welcome to React {userName}
        <hr />
        the sum of {x} and {y} is {x+y} 
        {Name.toUpperCase()}
        <hr />
        <button onClick={()=> alert(`hello, ${userName}`)}>Click here</button>
      </h2>
      <Profile/>
      <hr/>
      {userObj1.name} is {userObj1.age} year old and live in {userObj1.city}
      <hr/>
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
function color(){
  return "red";
}


export default App;