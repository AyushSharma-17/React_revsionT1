import { useTransition } from "react";

function App() {
  const [pending, startTransition] = useTransition();
  const handleButton = () => {
    startTransition(async () => {
      await new Promise(res => setTimeout(res, 5000));
      console.log("update");
    })
  }
  return (
    <div>
      <h1>useTransition hook</h1>
      {
        pending ?
          <img style={{ width: "100px" }} src="https://static.vecteezy.com/system/resources/thumbnails/046/814/197/small_2x/minimalist-black-and-white-icon-bar-with-border-for-loading-animated-motion-graphic-illustration-design-trailer-great-for-web-or-app-elements-video.jpg" />
          : null
      }
      <button disabled={pending} onClick={handleButton}>click me to upadate</button>
    </div>
  )
}
export default App;