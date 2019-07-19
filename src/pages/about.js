import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosection from "../components/reuseable/Herosection"
import Infoblock from "../components/reuseable/Infoblock"
import Dualinfoblock from "../components/reuseable/Dualinfoblock"
import Teamphotosection from "../components/About/Teamphotosection"


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Herosection 
      img={data.img.childImageSharp.fluid}
      title="About LearnCode."
      subtitle=""
      heroclass="about-background"
      />
      <Dualinfoblock heading="A message From CEO" />
      <Infoblock heading="About Vision" /> 
      <Teamphotosection />
  </Layout>
)

export const query = graphql `
{
  img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
` 
export default AboutPage
