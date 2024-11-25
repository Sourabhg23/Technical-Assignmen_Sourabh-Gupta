import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBIcon,
  } from "mdb-react-ui-kit";
  import React from "react";
  import { useNavigate } from "react-router-dom";
  import instituteimg from "./assets/campus.jpg";
  
  function Home() {
    const navigate = useNavigate();
  
    return (
      <MDBContainer fluid className="vh-100" style={{ padding: "0" }}>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol md="8" lg="6">
            <MDBCard className="shadow-lg">
              <MDBRow className="g-0">
                {/* Image Section */}
                {/* <MDBCol md="6" className="d-none d-md-block">
                  <MDBCardImage
                    src={instituteimg}
                    alt="Campus"
                    className="rounded-start"
                    style={{
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </MDBCol> */}
  
                {/* Login Section */}
                <MDBCol md="6" className="p-4">
                  <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                    <div className="text-center mb-4" >
                      <MDBIcon
                        fas
                        icon="user-shield"
                        size="3x"
                        className="text-primary"
                      />
                    </div>
                    <h3
                      className="mb-4 text-center fw-bold"
                      style={{ color: "#333" }}
                    >
                      Admin Login
                    </h3>
  
                    {/* Mobile Number Input */}
                    <MDBInput
                      wrapperClass="mb-4"
                      label={<span><MDBIcon fas icon="phone-alt" /> Mobile Number</span>}
                      id="mobile-input"
                      type="text"
                      pattern="[0-9]*"
                      className="custom-input"
                      style={{
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                        padding: "10px",
                      }}
                    />
  
                    {/* Login Button */}
                    <div className="d-flex justify-content-center">
                      <MDBBtn
                        onClick={() => navigate("/dashboard")}
                        className="px-4 py-2"
                        style={{
                          backgroundColor: "#007bff",
                          color: "#fff",
                          fontWeight: "bold",
                          borderRadius: "10px",
                        }}
                      >
                        <MDBIcon fas icon="sign-in-alt" className="me-2" />
                        Login
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
  
  export default Home;
  