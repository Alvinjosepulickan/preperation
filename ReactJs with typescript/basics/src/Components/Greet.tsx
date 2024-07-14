import React from 'react'
type GreetProps={
    name:string,
    messageCount: number
}
const Greet = (props:GreetProps) => {
  return (
    <div>Hello :{props.name} , you have {props.messageCount} unread messages</div>
  )
}

export default Greet