import logo from "./logo.svg";
import "./App.css";

import { useCallback, useState ,useRef} from "react";
import { useEffect } from "react";

import ValueHolder from "./components/ValueHolder/ValueHolder";

//Create A Variable
//We need two functions - inc , dec
//Render
//Html elements and add click events

function App() {

  //variabl which affects rendering
  const [x, setX] = useState(0);

  useEffect(()=>{
     console.log(x)
  },[x])
 
  const increment = useCallback(() => {
    setX((prevX)=>{return prevX+1});
  }, []);

  const decrement = useCallback(() => {
    setX((prevX)=>{return prevX-1});
  }, []);

/*   console.time("increment")

  const increment = useCallback(() => {
    setX(x+1);
  }, [x]);

  console.timeEnd("increment")

  const decrement = useCallback(() => {
    setX(x-1);
  }, [x]); */

  return (
    <div className="App">
      <button id="addBtn" type="button" onClick={increment}>
        Add
      </button>
      <button id="minusBtn" type="button" onClick={decrement}>
        minus
      </button>
     
      <ValueHolder abcd={x}></ValueHolder>

    </div>
  );
}

export default App;
