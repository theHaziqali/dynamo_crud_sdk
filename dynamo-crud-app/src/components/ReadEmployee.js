// src/components/ReadEmployees.js
import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';
import config from '../config';
import './EmployeeList.css';


const dynamoDB = new AWS.DynamoDB.DocumentClient(config.awsConfig);

const ReadEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeId, setEmployeeId] = useState('');


  useEffect(() => {
    const fetchEmployees = async () => {
      const params = {
        TableName: config.tableName,
      };

      try {
        const data = await dynamoDB.scan(params).promise();
        setEmployees(data.Items);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

    const handleDeleteEmployee = async () => {
    const params = {
      TableName: config.tableName,
      Key: {
        EmployeeId: employeeId,
      },
    };

    try {
      await dynamoDB.delete(params).promise();
      console.log('Employee deleted successfully');
      // Optionally, you can redirect or update state after deleting an employee
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.EmployeeId}>
            <strong>{employee.EmployeeName}</strong> - {employee.Address} - Phone Number: {employee.CNIC}
            <button onClick={handleDeleteEmployee}>Delete</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadEmployees;
