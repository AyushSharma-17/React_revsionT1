import { useState } from "react";
function App() {
  const [cardStyle, setCardStyle] = useState({
    height: "500px",
    width: "500px",
    backgroundColor: "blue"
  })
  // const handleClick = () => {
  //   setCardStyle({
  //     height: "500px",
  //     width: "500px",
  //     backgroundColor: "red"
  //   })
  const updateTheme = (bgColor, textColor) => {
    setCardStyle({ ...cardStyle, backgroundColor: bgColor, color: textColor });
  }


  return (
    <div>
      <div style={cardStyle}>
        <h1>hello here</h1>
      </div>
      <button onClick={() => updateTheme('red', 'green')}>click</button>
    </div>
  )
}
export default App;