import React from 'react';
import { Nav } from 'react-bootstrap';

const SidebarCompenent = () => {
  return (
    <Nav className="flex-column ">
      <Nav.Link href="#action1">Sidebar Link 1</Nav.Link>
      <Nav.Link href="#action2">Sidebar Link 2</Nav.Link>
      <Nav.Link href="#action3">Sidebar Link 3</Nav.Link>
    </Nav>
  );
};

export default SidebarCompenent;
