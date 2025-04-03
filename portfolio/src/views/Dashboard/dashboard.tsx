import React, { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import Login from "../../components/Login/login";
import DashboardData from "./dashboard-data";

const Dashboard = () => {

    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    }, [auth]);

    return (
        <section>
            {user ? <DashboardData /> : <Login />}
        </section>
    )
}

export default Dashboard;