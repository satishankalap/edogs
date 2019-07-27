import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Herosection from "../components/reuseable/Herosection"
import Infoblock from "../components/reuseable/Infoblock"
import Dualinfoblock from "../components/reuseable/Dualinfoblock"
import Coursecart from "../components/cart/Coursecart"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Herosection 
      img={data.img.childImageSharp.fluid}
      title="I write my code."
      subtitle="learncodeonline.in"
      heroclass="hero-background"
      />
    <Infoblock heading="About Us" /> 
    <Coursecart courses={data.courses}/>
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
  
  courses:allContentfulCourses{
      edges{
        node{
          id
          title
          category
          price
    
          image {
            fixed(width:200,height:120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
}
` 
export default IndexPage
