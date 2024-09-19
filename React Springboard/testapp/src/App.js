import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [name, Setname]= useState("Jack");
  const HandleNameChange=()=>{
    Setname("Joe")
  }
  var x=225, y=30
  const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
var employees = [
  { empId: 1234, name: "John", designation: "SE" },
  { empId: 4567, name: "Tom", designation: "SSE" },
  { empId: 8910, name: "Kevin", designation: "TA" },
];
    return (
      <>
        <h1> your name is {name}</h1>
        <button onClick={HandleNameChange}>ChangeName</button>
         <h2> Evaluating expression </h2>
         <h3> {x} {">"}{y} {":"} {x>y ? 'True' : 'False'}</h3>
         <h1>{
         x>y ? 'True':'False'
          }</h1>
         <ul>
          {
            doubled.map((item,index)=>(
              <li key={index}>{index}--{item}</li>
            ))
          }
         </ul>
         <table>
        <thead>
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
    );
}

export default App;
