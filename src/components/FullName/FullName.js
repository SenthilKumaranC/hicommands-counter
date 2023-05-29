import { useEffect, useMemo, useState } from "react";

const FullName = () => {
  const [firstName, setFirstName] = useState("Rajini");
  const [lastName, setLastName] = useEffect("Kanth");

  const [principle,setPrinciple] = useState(100000);
  const [n,setN] = useState(5);
  const [rate,setRate] = useState(10)

  const simpleInterest = useMemo(()=>{
   return principle*n*rate/1000
  },[n, principle, rate])

  const fullName = useMemo(() => {
    return `${firstName} ${lastName}`;
  }, [firstName, lastName]);

  return <span>{fullName}</span>;
};

export default FullName;
