// src/components/EmployeeItem.js
import React, { useState } from 'react';
import AWS from 'aws-sdk';
import config from '../config';
import './EmployeeForm.css';


const dynamoDB = new AWS.DynamoDB.DocumentClient(config.awsConfig);

const EmployeeItem = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [address, setAddress] = useState('');
  const [cnic, setCnic] = useState('');
  const [error, setError] = useState(null);

  const handleCreateEmployee = async () => {
    // Validate input
    if (!employeeId || !employeeName || !address || !cnic) {
      setError('All fields are required');
      return;
    }

    const params = {
      TableName: config.tableName,
      Item: {
        EmployeeId: employeeId,
        EmployeeName: employeeName,
        Address: address,
        CNIC: cnic,
      },
    };

    try {
      await dynamoDB.put(params).promise();
      console.log('Employee created successfully');
      // Optionally, you can redirect or update state after creating an employee
    } catch (error) {
      console.error('Error creating employee:', error);
      setError('Error creating employee. Please try again.');
    }
  };

  return (
    <div className="employee-form">
      <h2>Create Employee</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Employee Name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
      />
      <input
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="CNIC"
        value={cnic}
        onChange={(e) => setCnic(e.target.value)}
      />
      <button onClick={handleCreateEmployee}>Create</button>
    </div>
  );
};

export default EmployeeItem;
