import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageLoadingScreen from "../components/PageLoadingScreen"

type Props = { children: React.ReactNode }

const IndexPage: React.FC<PageProps<Props>> = () => (
  <Layout>
    <Seo title="Home" />
    <div>index page</div>
    <PageLoadingScreen />
  </Layout>
)

export default IndexPage
