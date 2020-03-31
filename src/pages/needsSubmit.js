import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class needsSubmit extends React.Component {
  render() {
    const siteTitle = "Submit an Need"

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <h1> Submit a need </h1>
          <iframe className={styles.form} src="https://docs.google.com/forms/d/e/1FAIpQLSfysBGNP-7RAaX1SI9RkWN1e-uJU4Mlt_W8qp79I7WGJjf2rw/formResponse"></iframe>
        </div>
      </Layout>
    )
  }
}

export default needsSubmit


