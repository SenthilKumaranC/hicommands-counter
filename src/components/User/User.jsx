import "./User.css";

const User = (props)=>{
    return <div className="User">
    <span className="Cell">{props.name}</span>
    <span className="Cell">{props.username}</span>
    <span className="Cell">{props.email}</span>
    {/* <span>{JSON.stringify(props.address.doorNo)}</span> */}
  </div>
}

export default User;