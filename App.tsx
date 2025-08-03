import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubscriptionPage from './SubscriptionPage';

const MovieListPage: React.FC = () => (
  <div style={{ padding: '2rem' }}>
    <h2>Welcome to the Movie Library</h2>
    <p>This is where real movies will appear for download...</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/subscribe" element={<SubscriptionPage />} />
      </Routes>
    </Router>
  );
};

export default App;