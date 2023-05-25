const User = (props)=>{
    return <div>
    <span>{props.name}</span>
    <span>{props.username}</span>
    <span>{props.email}</span>
    {/* <span>{JSON.stringify(props.address.doorNo)}</span> */}
  </div>
}

export default User;