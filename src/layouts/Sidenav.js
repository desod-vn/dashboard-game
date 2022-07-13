import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import {
  BarChartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
  TransactionOutlined,
  AuditOutlined,
  KeyOutlined,
  DingtalkOutlined,
  GiftOutlined,
  ControlOutlined,
} from "@ant-design/icons";
import logo from "../assets/images/logo.png";

const Sidenav = ({ color }) => {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  const items = [
    {
      name: 'Dashboard',
      key: 'dashboard',
      icon: <BarChartOutlined />,
    },
    {
      name: 'Manage Users',
      title: true,
    },
    {
      name: 'Users',
      key: 'users',
      icon: <UserOutlined />,
    },
    {
      name: 'Histories',
      key: 'history',
      icon: <TransactionOutlined />,
    },
    {
      name: 'Shopping',
      title: true,
    },
    {
      name: 'Shop',
      key: 'shop',
      icon: <ShoppingCartOutlined />,
    },
    {
      name: 'Market',
      key: 'market',
      icon: <ShopOutlined />,
    },
    {
      name: 'Manage Items',
      title: true,
    },
    {
      name: 'Claim Verify',
      key: 'claim-verify',
      icon: <AuditOutlined />,
    },
    {
      name: 'Treasures',
      key: 'treasures',
      icon: <KeyOutlined />,
    },
    {
      name: 'Others',
      title: true,
    },
    {
      name: 'Farming Mode',
      key: 'farming',
      icon: <DingtalkOutlined />,
    },
    {
      name: 'Mini Game',
      key: 'mini-game',
      icon: <GiftOutlined />,
    },
    {
      name: 'Settings',
      key: 'settings',
      icon: <ControlOutlined />,
    }
  ]
  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
        <span>Dashboard</span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        {
          items.map((__, index) =>
            __.title ?
            <Menu.Item className="menu-item-header" key={index}>
              {__.name}
            </Menu.Item>
            :
            <Menu.Item key={index}>
              <NavLink to={'/' + __.key}>
                <span
                  className="icon"
                  style={{
                    background: page === __.key ? color : "",
                  }}
                >
                  {__.icon}
                </span>
                <span className="label">{__.name}</span>
              </NavLink>
            </Menu.Item>
          )
        }
      </Menu>
    </>
  );
}

export default Sidenav;
