import React, { useContext, useState } from "react";

const ServiceLoginContext = React.createContext();
const ServiceLoginUpdateContext = React.createContext();

export function useServiceLogin() {
  return useContext(ServiceLoginContext);
}

export function useServiceLoginUpdate() {
  return useContext(ServiceLoginUpdateContext);
}

export function ServiceLoginProvider({ children }) {
  const [userServiceLogin, setUserServiceLogin] = useState(false);
  // const [userServiceLogin, setUserServiceLogin] = useState(true) // na testy

  function changeUserServiceLogin(serviceLogin) {
    setUserServiceLogin(serviceLogin);
  }

  return (
    <ServiceLoginContext.Provider value={userServiceLogin}>
      <ServiceLoginUpdateContext.Provider value={changeUserServiceLogin}>{children}</ServiceLoginUpdateContext.Provider>
    </ServiceLoginContext.Provider>
  );
}
