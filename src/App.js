import logo from "./logo.svg";
import "./App.css";

import { useCallback, useState, useRef, useMemo } from "react";
import { useEffect } from "react";

import ValueHolder from "./components/ValueHolder/ValueHolder";

import User from "./components/User/User";
import Users from "./components/Users/Users";

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

  useEffect(() => {
    increment();
  }, [increment]);

  //mount function
  /* useEffect(() => {
    //API call techniques
    //old technique - XMLHttpRequest - Callback
    //new technique - fetch - Promise
    //third party technique - axios - based on Promise with more functionalites
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users))
      .catch((err) => console.log(err));
  }, []); */

  //useEffect is executed after the render
  //Updater
  useEffect(() => {
    console.log("Executing useEffect");
    console.log(x);
  }, [x]);

  const decrement = useCallback(() => {
    console.time();
    setX((prevX) => {
      return prevX - 1;
    });
    console.timeEnd();
  }, []);

  /*   console.time("increment")

  const increment = useCallback(() => {
    setX(x+1);
  }, [x]);

  console.timeEnd("increment")

  const decrement = useCallback(() => {
    setX(x-1);
  }, [x]); */

  const usersUI = useMemo(() => {
    const list = users.map((user) => {
      return (
        /*  <User name={user.name} 
             username={user.username} 
             email={user.email}></User> */
        <User key={user.id} {...user}></User>
      );
    });
    console.log(users, list);
    return list;
  }, [users]);

  const buttonsUI = useMemo(() => {
    return (
      <>
        <button id="addBtn" type="button" onClick={increment}>
          Add
        </button>
        <button id="minusBtn" type="button" onClick={decrement}>
          minus
        </button>
      </>
    );
  }, [increment, decrement]);

  return (
    <div className="App">
      {buttonsUI}
      <ValueHolder x={x}></ValueHolder>

      {/* {usersUI} */}

      <Users></Users>
    </div>
  );
}

export default App;
