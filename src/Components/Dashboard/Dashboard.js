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
  
  // const pathurl = window.location.pathname;
  // const urlId = pathurl.split("/");
  // const pathName = urlId.slice(urlId.length - 1);
 
  // console.log("id",pathname);

let name =String(pathname)
const pathName = name.split("/")
// const pathName = name.slice(name.length - 1);


  return (
    <Layout>
      <SideBar />
      <Layout>
        <Header >
          {" "}
          <HeaderFun pathName={pathName}/>
        </Header>
        {/* <Content> */}
        <Routes>
          <Route path="/" element={<InsightsViewAll />} />
          <Route path="/Advisory" element={<Advisory />} />
          <Route path="/about" element={<About />} />
          <Route path="/Advisory/ModelPortfolios" element={<About />} />
          <Route path="/Advisory/Insights" element={<InsightsViewAll />} />
          <Route path="/Advisory/NewsletterViewAll" element={<NewsletterViewAll />} />
        </Routes>
        {/* </Content> */}
      </Layout>
    </Layout>
  );
}

export default Dashboard;
