import React from 'react';
import { Link } from 'react-router-dom';

const ErrorBoundary: React.FC = () => (
  <div className="text-center p-4 text-red-500">
    <h2 className="text-xl font-bold">Something went wrong</h2>
    <p className="mt-2">Please try again later or contact support</p>
    <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Go Home
    </Link>
  </div>
);

export default ErrorBoundary; 