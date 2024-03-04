import { useState } from "react";
import { createContext, useContext } from "react";

const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "talha",
  });
  return <authContext.Provider value={[auth,setAuth]}>{children}</authContext.Provider>;
};

export default AuthProvider;
