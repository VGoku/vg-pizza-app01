import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="text-center p-4">
    <h2 className="text-xl font-bold">Page Not Found</h2>
    <p className="mt-2">The page you're looking for doesn't exist</p>
    <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Go Home
    </Link>
  </div>
);

export default NotFound; 