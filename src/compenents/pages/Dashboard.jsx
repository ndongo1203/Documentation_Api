import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Dashboard = () => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  return (
    <div>
    <Navbar className='w-100 col-lg-12 navbarCollapsed'>
        <Container fluid>
          <Navbar.Brand href="#home">REST Countries</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Vieuw on GitLab</Nav.Link>
            <Nav.Link href="#features">Issues</Nav.Link>
          </Nav>
        </Container>
    </Navbar>

      <div className="row g-0">
        <div className="col-lg-2 col-md-3 sidebar" style={{ height: '91vh', overflowY: 'auto'}} >
          <Nav className="flex-column test">
            <Nav.Link className='LinkNav' href="#home" style={{ color: '#9090AA', }}>REST CONTRIES <span className='fontPE'>PE</span></Nav.Link>
            <Nav.Link className='LinkNav' href="#features" style={{ color: '#9090AA', }}>ABOUT THIS PROJECT <br />
              <a href="#info" className='text-black fw-bolder' style={{ textDecoration: 'none', }}>Important Information</a>
            </Nav.Link>
            <Nav.Link className='LinkNav' href="#pricing" style={{ color: '#9090AA', }}>REST CONTRIES </Nav.Link>
            <Nav.Link className='LinkNav' href="#pricing" style={{ color: '#9090AA', }}>CONTRIBUTING </Nav.Link>
            <Nav.Link className='LinkNav' href="#pricing" style={{ color: '#9090AA', }}>FIELDS </Nav.Link>
            <Nav.Link className='LinkNav' href="#pricing" style={{ color: '#9090AA', }}>API ENDPOINTS
            <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
            </Nav.Link>
            <Nav.Link className='LinkNav' href="#pricing" style={{ color: '#9090AA', }}>ENDPOINTS 
            <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
              <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
              <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
              <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
              <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
              <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
              <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
              <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
              <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
              <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
              <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
              <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
              <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
              <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
              <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
              <br />
              <a href="#info" className='fw-bolder' style={{ textDecoration: 'none', color: '#2BADAD' }}>Using this Project</a>
            </Nav.Link>
          </Nav>
        </div>

        <div className="col-lg-10 col-md-9">
        
        <div className="card p-5">
          <Container fluid className="content"> 
            <div className=''>
                <h3>REST CONTRIES <span className='fontPE'>PE</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ad!</p>
              
            </div>
          </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
