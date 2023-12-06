// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import EmployeeItem from './components/EmployeeItem';
import ReadEmployees from './components/ReadEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import DeleteEmployee from './components/DeleteEmployee';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Employee</Link>
            </li>
            <li>
              <Link to="/read">List Employees</Link>
            </li>
            <li>
              <Link to="/update">Update Employee</Link>
            </li>
            <li>
              <Link to="/delete">Delete Employee</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/create" element={<EmployeeItem />} />
          <Route path="/read" element={<ReadEmployees />} />
          <Route path="/update" element={<UpdateEmployee />} />
          <Route path="/delete" element={<DeleteEmployee />} />
          <Route path="/" element={<h2>Home</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
