import { Layout, Menu} from 'antd';
import {Outlet, Link } from "react-router-dom";
import 'antd/dist/antd.min.css';
import '../SideBar/SideBar.css'
import images from './SideBarIcon';
const { Sider } = Layout;


const SideBar=()=> {  

  return (
    <div className='sidenav-sec'>
 
        <Sider className="NavBar"
          width={70}
          breakpoint="sm"
          collapsedWidth="0"
        >
          <div className="Logo">
            
          </div>
          <Menu

            theme="light"
            mode="inline"
            defaultSelectedKeys={["2"]}
            className="middleIcon"
            // style={{ marginTop: "120px" }}
          >
           <Menu.Item className='logo'>
           <Link to="/" className='navIcon logo'> <img src={images.img1} alt="" className='navIcon'/></Link>
            </Menu.Item> 
            
             <Menu.Item className='logo'>
             <Link to="/home"> <img src={images.img2} alt=""/></Link>
            </Menu.Item> 
            
            <p className='navName'>Quick Actions</p>

             <Menu.Item>
             <Link to="/about"> <img src={images.img3} alt=""/></Link>
            </Menu.Item>
            
            <p className='navName'>Dashboard</p>
            
            <Menu.Item>
              <img src={images.img4}  alt=""/>
            </Menu.Item>
            <p className='navName'>Products</p>

            <Menu.Item>
              <img src={images.img5} alt=""/>
            </Menu.Item>
            <p className='navName'>Portfolio</p>

            <Menu.Item>
              <img src={images.img6} alt=""/>
            </Menu.Item>
            <p className='navName'>Clients</p>

             <Menu.Item>
             <Link to="/Advisory"> <img src={images.img7} alt=""/></Link>
            </Menu.Item>
            <p className='navName'>Advisory</p>

            <Menu.Item>
              <img src={images.img8} alt=""/>
            </Menu.Item>
            <p className='navName'>Reports</p>

            <Menu.Item>
              <img src={images.img9} alt=""/>
            </Menu.Item>
            <p className='navName'>Uploads</p>

            <Menu.Item>
              <img src={images.img7} alt=""/>
            </Menu.Item>
            <p className='navName'>Resources</p>
            
            <Menu.Item>
              <img src={images.img6} alt=""/>
            </Menu.Item>
            <p className='navName'>Incentives</p>
            <Menu.Item>
              <img src={images.img6} alt=""/>
            </Menu.Item>
            <p className='navName'>Profile</p>
          </Menu>

        </Sider>
        
        <Outlet />
    </div>
  )
}

export default SideBar;