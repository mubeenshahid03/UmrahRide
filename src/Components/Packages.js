import { Card, Col, Row } from "antd";
import React, { useEffect } from "react";

import { useContext } from "react";
import carContext from "../context/cars/carContext";
import Pcard from "./Pcard";
import Spinner from "./Spinner";
import Bookingmodel from "./Bookingmodel";

function Packages() {
  useEffect(() => {
    fetchallpackages();
    console.log(packages);
  }, []);

  const { packages, setpackages, fetchallpackages, isSpin, setisSpin } =
    useContext(carContext);
  return (
    <>
      {/* top   buttons */}
      <Bookingmodel />
      <div className="div-btn ">
        <Row className="div-btn-row">
          <Col span={3}>
            <button
              id="package-btns"
              type="button"
              class="btn btn-outline-light "
            >
              All
            </button>
          </Col>
          <Col span={3}>
            <button
              id="package-btns"
              type="button"
              class="btn btn-outline-light "
            >
              Impala
            </button>
          </Col>
          <Col span={3}>
            <button
              id="package-btns"
              type="button"
              class="btn btn-outline-light "
            >
              Coaster
            </button>
          </Col>
          <Col span={3}>
            <button
              id="package-btns"
              type="button"
              class="btn btn-outline-light "
            >
              Yukon
            </button>
          </Col>
          <Col span={3}>
            <button
              id="package-btns"
              type="button"
              class="btn btn-outline-light "
            >
              High Roof
            </button>
          </Col>
          <Col span={3}>
            <button
              id="package-btns"
              type="button"
              class="btn btn-outline-light "
            >
              Enova
            </button>
          </Col>
          <Col span={3}>
            <button
              id="package-btns"
              type="button"
              class="btn btn-outline-light "
            >
              Bus
            </button>
          </Col>
          <Col span={3}>
            <button
              id="package-btns"
              type="button"
              class="btn btn-outline-light "
            >
              Camry
            </button>
          </Col>
          <Col span={3}>
            <button
              id="package-btns"
              type="button"
              class="btn btn-outline-light "
            >
              H1
            </button>
          </Col>
        </Row>
      </div>

      <div className="packages-card-container">
        {isSpin ? (
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <Spinner />
          </div>
        ) : (
          <Row className="vehicles-card-row">
            {packages.map((car, index) => {
              return (
                <Col
                  xs={24}
                  sm={12}
                  md={12}
                  lg={10}
                  xl={10}
                  style={{ marginTop: "40px" }}
                >
                  {" "}
                  <Pcard car={car} detail={car.vehicle} key={index} />{" "}
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </>
  );
}

export default Packages;
