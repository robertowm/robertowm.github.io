import React from 'react';
import { Container } from 'reactstrap';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <Container class="fluid">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage;