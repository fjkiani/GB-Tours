import React from "react"
import { graphql } from "gatsby"
import FeaturedTours from "../components/Home/FeaturedTours"
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  // Slider,
  GridProjects,
} from "../components"
import SEO from "../components/seo"
const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Layout>
      <SEO title="Home" />
      <Hero projects={projects} />
      <About />
      <Projects projects={projects}/>
      {/* <FeaturedTours/> */}
      {/* <GridProjects projects={projects} title="latest projects" /> */}
      {/* <Survey /> */}
    

    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Tours" } }
      limit: 4
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        data {
          date
          name
          slug
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
