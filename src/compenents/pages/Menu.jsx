import React from 'react'
import { Container } from 'react-bootstrap';

function Menu() {
  return (
    <div>
      <div className="card p-5 col-6">
        <Container fluid className="content">
          <div className="">
            <h3>
              REST CONTRIES <span className="fontPE">PE</span>
            </h3>
            <p>
              Avoir des informations sur les régions, départements et
              arrondissements du Sénégal via Galsen API
            </p>
            <p className="fw-light text-secondary">Current version: 3.1</p>
          </div>
        </Container>
      </div>
      <div className="card p-5 border-0 col-6">
        <Container fluid className="content">
          <div className="">
            <h3>A PROPOS DE CET PROJET</h3>
            <p>
              The structure of V2 has been reverted to its original form from
              the <span className="text-success">Original Project</span> to
              maintain compatibility.
            </p>
            <p className="fst-italic fw-bold text-secondary">
              Only the latest version will receive updates and improvements.
            </p>
          </div>
        </Container>
      </div>
      <div className="card p-5 col-6">
        <Container fluid className="content">
          <div className="">
            <h3>REST COUNTRIES</h3>
            <p>
              You can access API through but in order to get a faster response,
              you should filter the results by the fields you need. Like
            </p>
          </div>
        </Container>
      </div>
      <div className="card p-5 col-6">
        <Container fluid className="content">
          <div className="">
            <h3>CONTRIBUTING</h3>
            <p>
              Any help is always welcome! Just edit the relevant file and create
              a new Merge Request or you can also donate using Patreon or
              PayPal.
            </p>
          </div>
        </Container>
      </div>
      <div className="card p-5 col-6">
        <Container fluid className="content">
          <div className="">
            <h3>FIELDS</h3>
            <p>
              You can check the FIELDS.md file to get a description for each
              field (thanks to @ePascalC!).
            </p>
          </div>
        </Container>
      </div>{" "}
      <div className="card p-5 col-6">
        <Container fluid className="content">
          <div className="">
            <h3>API ENDPOINTS</h3>
          </div>
        </Container>
      </div>{" "}
      <div className="card p-5">
        <Container fluid className="content">
          <div className="row">
            <div className="col-6">
              <h3>REGIONS</h3>
              <p>Endpoint pour recuperer les regions</p>
              <p>Endpoint pour recuperer les regions par id</p>
            </div>{" "}
            <div className="col-6">
              <p>http://127.0.0.1:8000/api/regions</p>
              <p>http://127.0.0.1:8000/api/regions/id</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="card p-5">
        <Container fluid className="content">
          <div className="row">
            <div className="col-6">
              <h3>DEPARTEMENTS</h3>
              <p>Endpoint pour recuperer les départements</p>
              <p>Endpoint pour recuperer les départements par id</p>
            </div>{" "}
            <div className="col-6">
              <p>http://127.0.0.1:8000/api/departements</p>
              <p>http://127.0.0.1:8000/api/departements/id</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="card p-5">
        <Container fluid className="content">
          <div className="row">
            <div className="col-6">
              <h3>ARRONDISSEMENTS</h3>
              <p>Endpoint pour recuperer les arrondissements</p>
              <p>Endpoint pour recuperer les arrondissements par id</p>
            </div>{" "}
            <div className="col-6">
              <p>http://127.0.0.1:8000/api/arrondissements</p>
              <p>http://127.0.0.1:8000/api/arrondissements/id</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="card p-5">
        <Container fluid className="content">
          <div className="row">
            <div className="col-6">
              <h3>VILLAGES</h3>
              <p>Endpoint pour recuperer les villages</p>
              <p>Endpoint pour recuperer les villages par id</p>
            </div>{" "}
            <div className="col-6">
              <p>http://127.0.0.1:8000/api/villages</p>
              <p>http://127.0.0.1:8000/api/villages/id</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Menu