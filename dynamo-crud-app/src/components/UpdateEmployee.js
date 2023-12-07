// src/components/UpdateEmployee.js
import React, { useState } from 'react';
import AWS from 'aws-sdk';
import config from '../config';
import './EmployeeForm.css';


const dynamoDB = new AWS.DynamoDB.DocumentClient(config.awsConfig);

const UpdateEmployee = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [address, setAddress] = useState('');
  const [cnic, setCnic] = useState('');

  const handleUpdateEmployee = async () => {
    const params = {
      TableName: config.tableName,
      Key: {
        EmployeeId: employeeId,
      },
      UpdateExpression: 'set EmployeeName = :en, Address = :ad, CNIC = :cn',
      ExpressionAttributeValues: {
        ':en': employeeName,
        ':ad': address,
        ':cn': cnic,
      },
      ReturnValues: 'UPDATED_NEW',
    };

    try {
      const data = await dynamoDB.update(params).promise();
      console.log('Employee updated successfully:', data);
      // Optionally, you can redirect or update state after updating an employee
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div className="employee-form">
      <h2>Update Employee</h2>
      <input
        type="text"
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Employee Name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
      />
      <input
        placeholder="New Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="New CNIC"
        value={cnic}
        onChange={(e) => setCnic(e.target.value)}
      />
      <button onClick={handleUpdateEmployee}>Update</button>
    </div>
  );
};

export default UpdateEmployee;
