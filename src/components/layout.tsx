import * as React from "react"

import "./layout.css"

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="page-wrapper">
      <main>{children}</main>
    </div>
  )
}

export default Layout
