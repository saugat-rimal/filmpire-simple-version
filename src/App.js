import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div className="App">
      <button onClick={() => setCount((preCount) => preCount - 1)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount((preCount) => preCount + 1)}>+</button>
    </div>
  );
};

export default App;
