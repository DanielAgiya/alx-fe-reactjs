import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <h1>Welcome to the User Profiles</h1>

      {/* Example usage of UserProfile component */}
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />

      <UserProfile 
        name="Bob" 
        age={30} 
        bio="Enjoys cooking and traveling" 
      />
    </div>
  );
}

export default App;
