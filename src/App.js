import React from 'react';
import { Route } from "react-router-dom";
import CalendarPage from "./pages/calendar";
import DayPage from "./pages/day";
import Home from "./pages/home";
import Layout from "./components/Layout/Layout";

import './App.css';

function App() {
  return (
    <Layout>
        <Route exact path={"/"}>
            <Home />
        </Route>
        <Route path={"/calendar"}>
            <CalendarPage />
        </Route>
        <Route path={"/day"}>
            <DayPage />
        </Route>
    </Layout>
  );
}

export default App;
