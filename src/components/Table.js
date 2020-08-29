import React from "react";

function Table({employees}) {
  
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
          {employees.list.map(({name, picture, email, cell, login}) => {
            return(<tr key={login.uuid}>
              <td><img src={picture.thumbnail}alt=""></img></td>
              <td>{name.first}</td>
              <td>{name.last}</td>
              <td>{email}</td>
              <td>{cell}</td>
            </tr>)
          })}
        
      </tbody>
    </table>
  )
}
export default Table