// src/components/CreateItem.js
import React, { useState } from 'react';
import AWS from 'aws-sdk';
import config from '../config';

const dynamoDB = new AWS.DynamoDB.DocumentClient(config.awsConfig);

const CreateItem = () => {
  const [artist, setArtist] = useState('');
  const [songTitle, setSongTitle] = useState('');

  const handleCreateItem = async () => {
    const params = {
      TableName: config.tableName,
      Item: {
        Artist: artist,
        SongTitle: songTitle,
      },
    };

    try {
      await dynamoDB.put(params).promise();
      console.log('Item created successfully');
      // Optionally, you can redirect or update state after creating an item
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (
    <div>
      <h2>Create Item</h2>
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input
        type="text"
        placeholder="Song Title"
        value={songTitle}
        onChange={(e) => setSongTitle(e.target.value)}
      />
      <button onClick={handleCreateItem}>Create</button>
    </div>
  );
};

export default CreateItem;
