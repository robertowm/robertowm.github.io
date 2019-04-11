import React from 'react'
import { Container } from 'reactstrap'
import SEO from '../components/seo'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <SEO
      title={'Not Found'}
      description={`This page doesn't exist.`}
      pathname={'/404'}
    />
    <Container class="fluid">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
