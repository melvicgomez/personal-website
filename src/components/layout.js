import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import "../stylesheets/layout.css"

// theme will be acccessible on the styled components props
const theme = {
  lightprimrayColor: "#D93621",
  primaryColor: "#C02F1D",
  darkPrimaryColor: "#AD2A1A",
  accentColor: "",
  lightBackgroundColor: "#f5f6fa",
}

const AppContainer = styled.div``

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <AppContainer>{children}</AppContainer>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
