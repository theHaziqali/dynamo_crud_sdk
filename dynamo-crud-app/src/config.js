// src/config.js
export default {
  awsConfig: {
    region: process.env.REACT_APP_region,
    accessKeyId: process.env.REACT_APP_accessKeyId,
    secretAccessKey: process.env.REACT_APP_secretAccessKey,
  },
  tableName: 'Employee',
};

