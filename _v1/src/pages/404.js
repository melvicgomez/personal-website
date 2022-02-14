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
              src={require("../images/undraw-page-not-found.png")}
              alt="Page not found placeholder."
            />
            <br />
            <div style={{ textAlign: "center" }}>
              <p>
                You hit a page does not exist in my website. Try to click the
                link to see what I have in this website.
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
