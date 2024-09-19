import React from 'react'
import { useState,useEffect } from 'react'

const SampleCoponent = (props) => {
    const [customer, setCustomer] = useState("");

UseEffect ( () => {
	
	setCustomer("Jack")	

},[])
  return (
    <div>{prop.customer}</div>
    
  )
}

export default SampleCoponent