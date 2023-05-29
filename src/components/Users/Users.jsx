import { useState, useEffect, useMemo } from "react";

import User from "../User/User";

import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //API call techniques
    //old technique - XMLHttpRequest - Callback
    //new technique - fetch - Promise
    //third party technique - axios - based on Promise with more functionalites

    const abortController = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((users) => setUsers(users))
      .catch((err) => console.log(err));

    return () => {
      //to cancel previous API
      abortController.abort();
    };
  }, []);

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

  return <div className="Users">{usersUI}</div>;
};

export default Users;
