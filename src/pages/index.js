import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Lightbox from "../components/Lightbox"
import Contact from "../components/contact3"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Inicio" />
    <h2 className="section-title">COMERCIALES / CINE-TELEVISION</h2>
    <Lightbox type="vimeo" images={data.allVimeoJson.nodes.filter(i => i.type === 'comercial')} />
    {/* <Lightbox type="soundcloud" images={data.allSoundcloudJson.nodes} /> */}
    <h2 className="section-title">DIGITAL </h2>
    <Lightbox type="vimeo" images={data.allVimeoJson.nodes.filter(i => i.type === 'video')} />
    {/* <Lightbox type="vimeo" images={data.allVimeoJson.nodes} />  */}

    <Contact />

  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allVimeoJson {
      nodes {
        link
        thumbnail
        type
      }
    }
    #allSoundcloudJson {
    #  nodes {
    #    link
    #  }
    #}
    #   allImageSharp {
    #     edges {
    #       node {
    #         sizes(maxWidth: 1800) {
    #           ...GatsbyImageSharpSizes
    #         }
    #       }
    #     }
    #   }
  }
`
