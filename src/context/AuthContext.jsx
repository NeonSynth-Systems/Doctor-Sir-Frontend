
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

import API from "@/api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCurrentUser = useCallback(async () => {
    try {
      const response = await API.get("/auth/me");
      setUser(response.data.user);
      return response.data.user;
    } catch (error) {
      setUser(null);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  const login = async (email, password) => {
    const response = await API.post("/auth/login", {
      email,
      password,
    });

    // The server sets the HTTP-only cookie.
    // Refresh the authenticated user from the server.
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw new Error(
        "Login succeeded, but the session could not be verified."
      );
    }

    return currentUser;
  };

  const logout = async () => {
    try {
      await API.post("/auth/logout");
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        login,
        logout,
        getCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
