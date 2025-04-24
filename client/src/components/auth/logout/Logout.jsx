import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { useLogout } from "../../../api/authAPI";

export default function Logout() {
    const { isLoggingOut, error } = useLogout();

    useEffect(() => {
    }, []);

    if (error) {
        alert('Failed logout!')
        return <ErrorNotification />;
    }

    if (isLoggingOut) {
        return <p>Logging out...</p>;
    }

    return <Navigate to="/" />;
}
