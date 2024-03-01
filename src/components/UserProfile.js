

import React from 'react';
import { useAuth } from './AuthContext';

const UserProfile = () => {
  const { state } = useAuth();

  return (
    <div>
      {state.isAuthenticated ? (
        <div>
          <h2>User Profile</h2>
          <p>Welcome, {state.user}!</p>
          {/* Additional user information can be displayed here */}
        </div>
      ) : (
        <div>
          <h2>Not Authenticated</h2>
          <p>Please login to view your profile.</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
