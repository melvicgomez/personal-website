import React from "react";
import WrapperLayout from "../components/WrapperLayout";
import styled from "styled-components";
import { Button, Icon, Row, Col } from "antd";

const StyledNotFoundPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
`;

function NotFoundPage() {
  return (
    <WrapperLayout>
      <StyledNotFoundPage>
        <Row type="flex" justify="center" align="middle">
          <Col
            xs={{ span: 23 }}
            sm={{ span: 23 }}
            md={{ span: 23 }}
            lg={{ span: 12 }}
            xl={{ span: 12 }}
            xxl={{ span: 10 }}
          >
            <img
              src={require("../images/undraw_source_code_xx2e.png")}
              alt="Page under construction"
            />
            <br />
            <div style={{ textAlign: "center" }}>
              <p>
              oops... this page is currently under construction. Go back after a while and expect something new.
              </p>
              <Button type="link" href="/">
                <Icon type="arrow-left" />
                Return to home page
              </Button>
            </div>
          </Col>
        </Row>
      </StyledNotFoundPage>
    </WrapperLayout>
  );
}

export default NotFoundPage;
