// src/components/DeleteEmployee.js
import React, { useState } from 'react';
import AWS from 'aws-sdk';
import config from '../config';

const dynamoDB = new AWS.DynamoDB.DocumentClient(config.awsConfig);

const DeleteEmployee = () => {
  const [employeeId, setEmployeeId] = useState('');

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
    <div>
      <h2>Delete Employee</h2>
      <input
        type="text"
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <button onClick={handleDeleteEmployee}>Delete</button>
    </div>
  );
};

export default DeleteEmployee;
