import React from "react";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err: any) {
      console.error("Error logging out:", err);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};
