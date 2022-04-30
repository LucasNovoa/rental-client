import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../containers/Layout';

import { Home } from '../pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export { App };
