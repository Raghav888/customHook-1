import { useEffect, useState } from "react";

//custom hook
function useDocumentTitle(data) {
  useEffect(() => {
    document.title = data;
  }, [data]);
}

export default function App() {
  const [counter, setCounter] = useState(0);
  useDocumentTitle(counter);

  function incrementClickHandler() {
    setCounter((counter) => counter + 1);
  }

  console.log("before render...", counter);
  return (
    <div className="App">
      <h1>{counter} </h1>
      <button onClick={incrementClickHandler}>Increment </button>
    </div>
  );
}
