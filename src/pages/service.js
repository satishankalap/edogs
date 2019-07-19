import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Herosection from "../components/reuseable/Herosection"
import Infoblock from "../components/reuseable/Infoblock"
import Dualinfoblock from "../components/reuseable/Dualinfoblock"


const ServicePage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Herosection 
      img={data.img.childImageSharp.fluid}
      title="Our Services."
      subtitle=""
      heroclass="about-background"
      />
    <Infoblock heading="About Us" /> 
    <Dualinfoblock heading="Our Team" />
  </Layout>
)

export const query = graphql `
{
  img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
` 
export default ServicePage
