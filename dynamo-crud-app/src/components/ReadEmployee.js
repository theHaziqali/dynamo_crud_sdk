// src/components/ReadEmployees.js
import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';
import config from '../config';

const dynamoDB = new AWS.DynamoDB.DocumentClient(config.awsConfig);

const ReadEmployees = () => {
  const [employees, setEmployees] = useState([]);

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

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.EmployeeId}>
            <strong>{employee.EmployeeName}</strong> - {employee.Address} - CNIC: {employee.CNIC}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadEmployees;
