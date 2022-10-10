import { Layout } from "antd";
import { Header } from "antd/lib/layout/layout";
import { Routes, Route ,useLocation} from "react-router-dom";
import React from "react";
import SideBar from "../SideBar/SideBar";
import Advisory from "../Advisory";
import About from "../About";
import InsightsViewAll from "../InsightsViewAll";
import HeaderFun from "../Header/Header";
import NewsletterViewAll from "../NewsletterViewAll";



function Dashboard() {
  const { pathname} = useLocation();
  

let name =String(pathname)
const pathName = name.split("/")


  return (
    <Layout>
      <SideBar />
      <Layout>
        <Header >
          {" "}
          <HeaderFun pathName={pathName}/>
        </Header>
      
        <Routes>
          <Route path="/" element={<InsightsViewAll />} />
          <Route path="/Advisory" element={<Advisory />} />
          <Route path="/about" element={<About />} />
          <Route path="/Advisory/ModelPortfolios" element={<About />} />
          <Route path="/Advisory/Insights" element={<InsightsViewAll />} />
          <Route path="/Advisory/Newsletters" element={<NewsletterViewAll />} />
        </Routes>
      
      </Layout>
    </Layout>
  );
}

export default Dashboard;
