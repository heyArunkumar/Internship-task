// import {BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";

import { BrowserRouter as Router } from "react-router-dom";
// import { Layout } from 'antd';
// import SideBar from './Components/SideBar/SideBar';
// import Home from './Components/home';
// import About from './Components/about';
// const { Content } = Layout;

function App() {
  return (
    <Router>
      <div>
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;
