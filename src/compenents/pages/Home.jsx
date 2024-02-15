import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './Menu';
import NavbarCompenent from './NavbarCompenent';
import SidebarCompenent from './SidebarCompenent';

const Home = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <NavbarCompenent />
        </Col>
      </Row>
      <Row>
      <Col xs={12} md={3}>
          <SidebarCompenent />
        </Col>
        <Col xs={12} md={9}>
          <Container fluid>
            <Row>
              <Col xs={12}>
                <Menu />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
