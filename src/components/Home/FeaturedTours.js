import React from "react"
import Tour from "../Tours/Tour"
import { useStaticQuery, graphql } from "gatsby"

// import Title from "../Title"
import styles from "../css/items.module.css"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

const getTours = graphql`{
  allAirtable(filter: {table: {eq: "Tours"}}, limit: 3, sort: {fields:data___date}) {
    edges {
      node {
      id
      data {
        date
        name
        type
        image {
          localFiles {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
     	 }
      }
    }
  }
}
`

const FeaturedTours = () => {
  const response = useStaticQuery(getTours)
  const tours = response.allAirtable.edges

  return (
    <section className={styles.tours}>
      {/* <Title title="featured" subtitle="tours" /> */}
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.id} tour={node} />
        })}
      </div>

      {/* <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink> */}
    </section>
  )
}

export default FeaturedTours
