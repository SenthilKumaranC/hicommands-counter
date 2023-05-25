import logo from "./logo.svg";
import "./App.css";

import { useCallback, useState, useRef } from "react";
import { useEffect } from "react";

import ValueHolder from "./components/ValueHolder/ValueHolder";

import User from "./components/User/User";

//Create A Variable
//We need two functions - inc , dec
//Render
//Html elements and add click events

function App() {
  console.log("Rendering Started");

  //variabl which affects rendering
  const [x, setX] = useState(0);

  const [users, setUsers] = useState([]);

  const increment = useCallback(() => {
    console.log("Modifying X");
     setX((prevX) => {
      return prevX + 1;
    }); 
    //setX(x+1);
  }, []);

  useEffect(()=>{
    increment();
  },[increment])

  //mount function
  useEffect(() => {
    //API call techniques
    //old technique - XMLHttpRequest - Callback
    //new technique - fetch - Promise
    //third party technique - axios - based on Promise with more functionalites
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users))
      .catch((err) => console.log(err));
   
  }, []);

  //useEffect is executed after the render
  //Updater
  useEffect(() => {
    console.log("Executing useEffect");
    console.log(x);
  }, [x]);

  const decrement = useCallback(() => {
    setX((prevX) => {
      return prevX - 1;
    });
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

      {users.map((user) => {
        return (
              /*  <User name={user.name} 
               username={user.username} 
               email={user.email}></User> */
               <User {...user}></User>
        );
      })}
    </div>
  );
}

export default App;
