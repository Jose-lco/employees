import React, { useState, useEffect } from "react";
import API from '../utils/API';
import Table from "./Table";
function Form() {
  let [employees, setEmployees] = useState({
    list: [],
    term: ""
  });
  useEffect(() => {
    API.search().then(res => setEmployees({...employees, list: res.data.results}))
  }, [])
  return (
    <div>
      <div className="row">
        <form className="mx-auto">
          <div className="form-group">
            <label >Search Term:</label>
            <input
              type="text"
              className="form-control"
              id="searchTerm"
              placeholder="Search by first or last name"
              onChange={e => {
                const { value } = e.target
                setEmployees({...employees, term: value})
                const filteredArray = employees.list.filter(({ name }) => name.first.toLowerCase().includes(value.toLowerCase()) || name.last.toLowerCase().includes(value.toLowerCase()))
                console.log(filteredArray);
                setEmployees({...employees, list: filteredArray});
              }}
            />
          </div>
        </form>
      </div>
      <div className="row">
        <Table employees={employees} />
      </div>
    </div>
  )
}

export default Form