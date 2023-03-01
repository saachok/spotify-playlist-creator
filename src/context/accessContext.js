import { useState, createContext } from 'react';

export const AccessContext = createContext();

export const AccessProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState('');
  return (
    <AccessContext.Provider value={[accessToken, setAccessToken]}>
      {children}
    </AccessContext.Provider>
  );
};
