import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import "./layout.css"

const AppContainer = styled.div``

/**
 * theme will be acccessible on the styled components props
 */
const theme = {}

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <AppContainer>{children}</AppContainer>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
