// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CreateItem from './components/CreateItem';
import ReadItems from './components/ReadItems';
import UpdateItem from './components/UpdateItem';
import DeleteItem from './components/DeleteItem';

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
              <Link to="/create">Create Item</Link>
            </li>
            <li>
              <Link to="/read">Read Items</Link>
            </li>
            <li>
              <Link to="/update">Update Item</Link>
            </li>
            <li>
              <Link to="/delete">Delete Item</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/create" element={<CreateItem />} />
          <Route path="/read" element={<ReadItems />} />
          <Route path="/update" element={<UpdateItem />} />
          <Route path="/delete" element={<DeleteItem />} />
          <Route path="/" element={<h2>Home</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
