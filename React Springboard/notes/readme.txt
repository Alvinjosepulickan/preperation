npm install -g create-react-app

create-react-app my-app


javascript in html

<h1> { Expression to be evaluated } </h1>

function App() {
    let name = {
      firstName: "John",
      lastName: "Doe",
    };
    return (
      <>
        <h1>
          {name.firstName} {name.lastName}
        </h1>
      </>
    );
  }
  export default App;


var employees = [
  { empId: 1234, name: "John", designation: "SE" },
  { empId: 4567, name: "Tom", designation: "SSE" },
  { empId: 8910, name: "Kevin", designation: "TA" },
];

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
