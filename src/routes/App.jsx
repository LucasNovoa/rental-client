import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../containers/Layout';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import Register from '../components/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export { App };
