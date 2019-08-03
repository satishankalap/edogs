import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosection from "../components/reuseable/Herosection"
import Infoblock from "../components/reuseable/Infoblock"
//import Dualinfoblock from "../components/reuseable/Dualinfoblock"
import Contact from "../components/contact/Contact"


const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Herosection 
      img={data.img.childImageSharp.fluid}
      title="Contact Us."
      subtitle="You can contact our management for any queries."
      heroclass="about-background"
      />
      <Infoblock heading="How can we help?" /> 
      <Contact />
  </Layout>
)

export const query = graphql `
{
  img: file(relativePath: { eq: "dog2.jpg" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
` 
export default ContactPage
