import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>useState with condition</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>click to increamnet</button>
      {
        count == 0 ? <h1>condition 0</h1>
          : count == 1 ? <h1>condition 1</h1>
            : count == 2 ? <h1>condition 2</h1>
              : count == 3 ? <h1>condition 3</h1>
                : count == 4 ? <h1>condition 4</h1>
                  : count == 5 ? <h1>condition 5</h1>
                    : count == 6 ? <h1>condition 6</h1>
                      : count == 7 ? <h1>condition 7</h1>
                        : count == 8 ? <h1>condition 8</h1>
                          : count == 9 ? <h1>condition 9</h1>
                            : count == 10 ? <h1>condition 10</h1>
                              : <h1>condition more than 10</h1>
      }
    </div>
  )
}
export default App;
