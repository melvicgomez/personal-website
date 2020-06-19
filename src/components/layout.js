import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { Row, Col } from "antd";

import "../stylesheets/layout.css";

// theme will be acccessible on the styled components props
const theme = {
  lightprimrayColor: "#D93621",
  primaryColor: "#C02F1D",
  darkPrimaryColor: "#AD2A1A",
  accentColor: "",
  lightBackgroundColor: "#f5f6fa",
};

const AppContainer = styled.div`
  .copyright-label {
    padding: 20px 0px;
    color: white;
  }
`;

const Layout = ({ children }) => {
  console.log(
    "%cHello! Checking on something?\nFeel free to send a message directly. 🙋‍♂️",
    `background: ${theme.primaryColor}; color: white; font-size:1.5em; padding: 6px;`
  );

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        {children}
        <div style={{ backgroundColor: theme.primaryColor }}>
          <Row type="flex" justify="center">
            <Col
              xs={{ span: 22 }}
              md={{ span: 18 }}
              lg={{ span: 14 }}
              xl={{ span: 9 }}
              xxl={{ span: 7 }}
            >
              <div className="copyright-label">
                <small>© 2020 Melvic Gomez | All Rights Reserved.</small>
              </div>
            </Col>
          </Row>
        </div>
      </AppContainer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
