import React from "react";
import "./Porfile.css";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import ProfileLayout from "../ProfileLayout/ProfileLayout";

const Profile = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <ProfileLayout>
      <h1>helo</h1>
    </ProfileLayout>
  );
};

export default Profile;
