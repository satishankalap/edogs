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
      title="Breeds Are LOVE."
      subtitle="Follow us on edogs.in"
      heroclass="hero-background"
      />
    <Infoblock heading="About Us" /> 
    <Coursecart courses={data.mycourses}/>
    <Dualinfoblock heading="Truth know by everyone,but none follows" />
  </Layout>
)

export const query = graphql `
{
  img: file(relativePath: { eq: "dogs.jpg" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  
  mycourses:allContentfulCourses{
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
