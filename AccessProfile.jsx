import React, { useState } from "react";

const AccessProfile = () =>{
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const AnotherComponent = "User Profile Info";

  return (
    <div>
      {isAuthenticated ? (
        <h2>{AnotherComponent}</h2>
      ) : (
        <button onClick={() => setIsAuthenticated(true)}>Access User Profile</button>
      )}
    </div>
  );
}

export default AccessProfile;
