import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { Button, Icon, Row, Col } from "antd";

const StyledNotFoundPage = styled.div`
  height: 100vh;
  display: flex;

  img {
    width: 100%;
    height: auto;
  }
`;

function NotFoundPage() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default NotFoundPage;
