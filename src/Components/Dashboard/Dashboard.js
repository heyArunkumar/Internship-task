import { Layout } from "antd";
import { Header } from "antd/lib/layout/layout";
import { Routes, Route } from "react-router-dom";
import React from "react";
import SideBar from "../SideBar/SideBar";
import Advisory from "../Advisory";
import About from "../About";
import InsightsViewAll from "../InsightsViewAll";
import HeaderFun from "../Header/Header";

function Dashboard() {
  return (
    <Layout>
      <SideBar />
      <Layout>
        <Header> <HeaderFun /></Header>
        {/* <Content> */}
          <Routes>
            <Route path="/" element={<InsightsViewAll />} />
            <Route path="/Advisory" element={<Advisory />} />
            <Route path="/about" element={<About />} />
            <Route path="/ModelPortfolios" element={<About/>} />
            <Route path="/Insights" element={<InsightsViewAll />} />
            

          </Routes>
        {/* </Content> */}
      </Layout>
    </Layout>
  );
}

export default Dashboard;
