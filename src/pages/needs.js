import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import NeedPreview from '../components/need-preview'

class NeedsIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const needs = get(this, 'props.data.allContentfulNeeds2.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Needs Assessments</h2>
            <ul className="article-list">
              {needs.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <NeedPreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NeedsIndex

export const pageQuery = graphql`
  query NeedsIndexQuery {
    allContentfulNeeds2(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
