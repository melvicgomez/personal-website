import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { Row, Col } from 'antd';

import '../stylesheets/layout.css';

// theme will be acccessible on the styled components props
const theme = {
  lightPrimaryColor: '#D93621',
  primaryColor: '#C02F1D',
  darkPrimaryColor: '#AD2A1A',
  accentColor: '',
  lightBackgroundColor: '#f5f6fa',
};

const AppContainer = styled.div`
  .copyright-label {
    padding: 20px 0px;
    color: white;
    text-align: center;
    > p {
      margin: 0px;
    }
  }

  .ant-layout-content {
    position: relative;
    overflow: hidden;
  }
`;

const WrapperLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        {children}

        <div style={{ backgroundColor: theme.primaryColor }}>
          <Row type="flex" justify="center">
            <Col
              xs={{ span: 23 }}
              sm={{ span: 23 }}
              md={{ span: 23 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
              xxl={{ span: 10 }}
            >
              <div className="copyright-label">
                <p>© 2020 Melvic Gomez | All Rights Reserved.</p>
              </div>
            </Col>
          </Row>
        </div>
      </AppContainer>
    </ThemeProvider>
  );
};

WrapperLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrapperLayout;
