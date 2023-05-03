import React  from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getUserLogingIn,
} from "../features/slices/AuthSlice";

import Logo from "../images/logo.svg";
 

const items = [
  {
    key: "1",
    label: "EN",
  },


];

export default function Navbar() {

  const userLogin = useSelector((state) => getUserLogingIn(state));

  return (
    <>
      <header className="site-header " id="header">
        <div className="logo">
          <Link aria-current="page" to="/">
            <img src={Logo}></img>
          </Link>

        </div>
        <div className="header-right ant-space ant-space-horizontal ant-space-align-center">
          <div className="ant-space-item" style={{ marginRight: '0px' }} >
            <div className="header-actions">
              <div class="action-list ant-space ant-space-horizontal ant-space-align-center">
                <div class="ant-space-item" style={{ marginRight: '24px' }}>
                  <ul role="menu" className="header-user-menu header-location-menu ant-menu ant-menu-horizontal ant-menu-root ant-menu-light">
                    <li role="menuitem" class="ant-menu-submenu ant-menu-submenu-horizontal ant-menu-overflowed-submenu" >
                      <div aria-haspopup="true" class="ant-menu-submenu-title">
                        <span>...{userLogin?.firstname}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="ant-space-item" style={{ marginRight: '24px' }}>
                <Link  to="/register" className="header-button ant-btn"><span>Register</span></Link>
                </div>
                <div class="ant-space-item" style={{ marginRight: '24px' }}>
               
                <Link to="/login" class="header-button ant-btn ant-btn-primary"><span>Login</span></Link>
                </div>

                <div class="ant-space-item">
                  <ul role="menu" class="header-user-menu ant-menu ant-menu-horizontal ant-menu-root ant-menu-light">
                    <li role="menuitem" class="ant-menu-submenu ant-menu-submenu-horizontal">
                      <div aria-haspopup="true" class="ant-menu-submenu-title">
                        <span  class="submenu-title-wrapper">EN <i  aria-label="icon: caret-down" class="anticon anticon-caret-down" style={{marginRight:'0px'}}>
                          <svg viewBox="0 0 1024 1024" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="">
                            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                          </svg>
                          </i>
                          </span>
                          <i class="ant-menu-submenu-arrow"></i>
                          </div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
          <div class="ant-space-item"></div>
        </div>

      </header>
    </>
  );
}
