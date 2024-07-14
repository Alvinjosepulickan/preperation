import React from 'react'

type PersonObj={
    name:{
        first: string,
        last: string
    },
    age: number
}
const Person = (props: PersonObj) => {
  return (
    <div>Person {props.name.first} {props.name.last}, your age is {props.age}</div>
  )
}

export default Person