import React from 'react';
import SidebarCompenent from './SidebarCompenent';
import NavbarCompenent from './NavbarCompenent';
import Menu from './Menu';

const Dashboard = () => {
  return (
    <div>
      <div className='w-100 col-lg-12 navbarCollapsed'>
        <NavbarCompenent />
      </div>

      <div className="row g-0">
        <div className="col-lg-2 col-md-3 sidebar" style={{ height: '91vh', overflowY: 'auto' }} >
          <SidebarCompenent />
        </div>

        <div className="col-lg-10 col-md-9">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
