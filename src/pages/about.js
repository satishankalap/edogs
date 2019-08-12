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
      title="About Us."
      subtitle="Our aim is to digitalise dogs,this is the perfect place to search for your favourite breed.You and buy sell healthy breeds from EDogs."
      heroclass="about-background"
      />
      <Infoblock heading="Our Vision" /> 
      <Teamphotosection />
  </Layout>
)

export const query = graphql `
{
  img: file(relativePath: { eq: "dog5.jpg" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
` 
export default AboutPage
